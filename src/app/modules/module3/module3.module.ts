import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThirdComponent } from './components/third/third.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'home', component:ThirdComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThirdComponent]
})
export class Module3Module { }
