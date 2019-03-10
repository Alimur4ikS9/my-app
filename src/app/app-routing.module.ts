import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { 
    path: '',
    component: AppComponent,
  },
  {
    path: 'main',
    component: MainpageComponent,

  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}




