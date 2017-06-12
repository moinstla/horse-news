import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HorsePersonalsComponent } from './horse-personals/horse-personals.component';
import { HorseAdviceComponent } from './horse-advice/horse-advice.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
 },
  {
   path: 'horse-personals',
   component: HorsePersonalsComponent
 },
  {
   path: 'horse-advice',
   component: HorseAdviceComponent
 },
 {
   path: 'posts/:id',
   component: PostDetailComponent
 }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
