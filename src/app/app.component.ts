import { Component } from '@angular/core';
import { DataComponent } from './components/data/data.component'; // Import DataComponent

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to My Angular App</h1>
    <app-data></app-data> <!-- Including the DataComponent here -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
