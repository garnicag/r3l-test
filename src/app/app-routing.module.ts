import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  { path: '', component: AnalyticsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'boardbrief', component: PlaceholderComponent },
  { path: 'briefcase', component: PlaceholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
