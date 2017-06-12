import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HorsePersonalsComponent } from './horse-personals/horse-personals.component';
const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
 },
  {
   path: 'horse-personals',
   component: HorsePersonalsComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
