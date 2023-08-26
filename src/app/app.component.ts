import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'; // Import Header component
import { DataComponent } from './components/data/data.component'; // Import DataComponent

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-most-watched></app-most-watched>
    <app-data></app-data>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
