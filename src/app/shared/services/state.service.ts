import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trainer } from '../models/trainer';
import { Activity } from '../models/activity';
import { Member } from '../models/member';
import { TrainerService } from './trainer.service';
import { ActivityService } from './activity.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private activitiesSubject = new BehaviorSubject<(Activity & { trainer: Trainer | undefined, members: Member[] })[]>([]);
  activities$ = this.activitiesSubject.asObservable();

  private trainersSubject = new BehaviorSubject<Trainer[]>([]);
  trainers$ = this.trainersSubject.asObservable();

  private trainerService = inject(TrainerService);
  private activityService = inject(ActivityService);

  initializeData(): void {
    this.trainerService.getAll().subscribe((trainers) => {
      this.setTrainers(trainers);
    });

    this.activityService.getAllWithTrainerAndMembers().subscribe((activities) => {
      this.setActivities(activities);
    });
  }

  getActivities(): (Activity & { trainer: Trainer | undefined, members: Member[] })[] {
    return this.activitiesSubject.getValue();
  }

  setActivities(activities: (Activity & { trainer: Trainer | undefined, members: Member[] })[]): void {
    this.activitiesSubject.next(activities);
  }

  updateActivity(updatedActivity: (Activity & { trainer: Trainer | undefined, members: Member[] })): void {
    const activities = this.getActivities();
    const index = activities.findIndex((a) => a.idActividadColectiva === updatedActivity.idActividadColectiva);
    if (index !== -1) {
      activities[index] = updatedActivity;
      this.setActivities(activities);
    }
  }

  getTrainers(): Trainer[] {
    return this.trainersSubject.getValue();
  }

  setTrainers(trainers: Trainer[]): void {
    this.trainersSubject.next(trainers);
  }

  updateTrainer(updatedTrainer: Trainer): void {
    const trainers = this.getTrainers();
    const index = trainers.findIndex((t) => t.idTrainer === updatedTrainer.idTrainer);
    if (index !== -1) {
      trainers[index] = updatedTrainer;
      this.setTrainers(trainers);
    }
  }

  reassignActivity(activityId: number, newTrainerId: number): void {
    const activities = this.getActivities();
    const trainers = this.getTrainers();

    const activity = activities.find((a) => a.idActividadColectiva === activityId);
    const oldTrainer = trainers.find((t) => t.actividades.includes(activityId));
    const newTrainer = trainers.find((t) => t.idTrainer === newTrainerId);

    if (activity && oldTrainer && newTrainer) {
      oldTrainer.actividades = oldTrainer.actividades.filter((id) => id !== activityId);
      this.updateTrainer(oldTrainer);

      newTrainer.actividades.push(activityId);
      this.updateTrainer(newTrainer);

      activity.entrenadorResponsable = newTrainerId;
      activity.trainer = newTrainer;
      this.updateActivity(activity);
    }
  }

}
