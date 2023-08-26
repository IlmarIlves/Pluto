import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'; // Import Header component
import { CategoriesComponent } from './components/categories/categories.component'; // Import DataComponent

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-categories></app-categories>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
