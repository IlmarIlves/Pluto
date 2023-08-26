import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data/data.component';
import { HeaderComponent } from './components/header/header.component';
import { MostWatchedComponent } from './components/most-watched/most-watched.component';

@NgModule({
  declarations: [AppComponent, DataComponent, HeaderComponent, MostWatchedComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
