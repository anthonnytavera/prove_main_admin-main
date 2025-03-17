import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateService } from './shared/services/state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Metropolitan';
  private stateService = inject(StateService);

  ngOnInit(): void {
    this.stateService.initializeData();
  }
}
