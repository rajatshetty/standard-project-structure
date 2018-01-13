import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleComp1Component } from './components/first-module-comp1/first-module-comp1.component';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'home', component:FirstModuleComp1Component }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstModuleComp1Component]
})
export class MainModuleModule { }
