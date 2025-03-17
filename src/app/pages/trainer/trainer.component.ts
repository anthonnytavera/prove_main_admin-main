import { Component, inject, OnInit } from '@angular/core';
import { Activity } from '../../shared/models/activity';
import { Trainer } from '../../shared/models/trainer';
import { StateService } from '../../shared/services/state.service';
import { ActivityService } from '../../shared/services/activity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  private stateService = inject(StateService);
  private activityService = inject(ActivityService);

  trainers: Trainer[] = [];
  activities: Activity[] = [];

  ngOnInit(): void {
    this.stateService.trainers$.subscribe((trainers) => {
      this.trainers = trainers;
    });

    this.stateService.activities$.subscribe((activities) => {
      this.activities = activities;
    });
  }

  reassignActivity(activity: Activity | undefined, newTrainerId: number): void {
    if (activity) {
      this.stateService.reassignActivity(activity.idActividadColectiva, newTrainerId);
    } else {
      console.error('No se encontró la actividad para reasignar.');
    }
  }

  getActivityName(activityId: number): string {
    const activity = this.activities.find((a) => a.idActividadColectiva === activityId);
    return activity ? activity.nombreActividadColectiva : 'Actividad no encontrada';
  }

  getActivityById(activityId: number): Activity | undefined {
    return this.activities.find((a) => a.idActividadColectiva === activityId);
  }

  onReassignActivity(activityId: number, event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const newTrainerId = +selectElement.value; // Convertir a número
    const activity = this.getActivityById(activityId);
  
    if (activity) {
      this.stateService.reassignActivity(activity.idActividadColectiva, newTrainerId);
    } else {
      console.error('No se encontró la actividad para reasignar.');
    }
  }

}
