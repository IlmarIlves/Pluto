import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component'; 

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-categories></app-categories>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
