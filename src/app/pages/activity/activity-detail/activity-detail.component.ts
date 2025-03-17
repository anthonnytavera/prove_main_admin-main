import { Component } from '@angular/core';
import { Activity } from '../../../shared/models/activity';
import { Trainer } from '../../../shared/models/trainer';
import { Member } from '../../../shared/models/member';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './activity-detail.component.html',
  styleUrl: './activity-detail.component.css'
})
export class ActivityDetailComponent {
  activity: Activity & { trainer: Trainer | undefined, members: Member[] };
  
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.activity = config.data.activity;
  }

}
