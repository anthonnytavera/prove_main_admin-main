import { Component, inject, OnInit } from '@angular/core';
import { Activity } from '../../shared/models/activity';
import { ActivityService } from '../../shared/services/activity.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { CommonModule } from '@angular/common';
import { Trainer } from '../../shared/models/trainer';
import { Member } from '../../shared/models/member';
import { StateService } from '../../shared/services/state.service';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  providers: [DialogService],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent implements OnInit {
  activities: (Activity & { trainer: Trainer | undefined, members: Member[] })[] = [];
  ref: DynamicDialogRef | undefined;

  private dialogService = inject(DialogService);
  private stateService = inject(StateService);

  ngOnInit(): void {
    this.stateService.activities$.subscribe((activities) => {
      this.activities = activities;
    });
  }

  seeDetail(activity: Activity & { trainer: Trainer | undefined, members: Member[] }): void {
    this.ref = this.dialogService.open(ActivityDetailComponent, {
      header: activity.nombreActividadColectiva,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      closable: true,
      data: { activity } 
    });
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
