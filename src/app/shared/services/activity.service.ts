import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { TrainerService } from './trainer.service';
import { Trainer } from '../models/trainer';
import { MemberService } from './member.service';
import { Member } from '../models/member';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private _url = 'api/list_activities.json';
  private _http = inject(HttpClient);
  private _trainerService = inject(TrainerService);
  private _memberService = inject(MemberService);
 
  getAll(): Observable<Activity[]> {
    return this._http.get<Activity[]>(this._url);
  }

  getAllWithTrainerAndMembers(): Observable<(Activity & { trainer: Trainer | undefined, members: Member[] })[]> {
    return forkJoin({
      activities: this.getAll(),
      trainers: this._trainerService.getAll(),
      members: this._memberService.getAll()
    }).pipe(
      map(({ activities, trainers, members }) => {
        return activities.map((activity) => {
          const trainer = trainers.find((t) => t.idTrainer === activity.entrenadorResponsable);
          const activityMembers = activity.sociosInscritos.map((memberId) =>
            members.find((member) => member.idPersona === memberId)
          ).filter((member) => member !== undefined) as Member[];
          return { ...activity, trainer, members: activityMembers };
        });
      })
    );
  }

}
