import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';

import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPeopleDetailComponent } from './famous-people-detail/famous-people-detail.component';

// //ng add @angular/material
// import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

    DonutsComponent,
    DonutDetailComponent,
    FamousPeopleComponent,
    FamousPeopleDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

      { path: 'donuts', component: DonutsComponent },
      { path: 'donut-detail/:id', component: DonutDetailComponent },
      { path: 'famous-people', component: FamousPeopleComponent },
      { path: 'famous-people-detail/:id', component: FamousPeopleDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
