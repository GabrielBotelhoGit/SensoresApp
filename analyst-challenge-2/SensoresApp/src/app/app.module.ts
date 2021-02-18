import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeBr from '@angular/common/locales/br';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TableSensoresComponent } from './table-sensores/table-sensores.component';
import { SensoresDashboardComponent } from './sensores-dashboard/sensores-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeBr, 'br');

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TableSensoresComponent,
    SensoresDashboardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'Leituras', component: TableSensoresComponent },
    { path: 'Dashboard', component: SensoresDashboardComponent }
    ], { relativeLinkResolution: 'legacy' }),
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
