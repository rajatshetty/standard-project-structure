import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'home', component:SecondComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecondComponent]
})
export class Module2Module { }
