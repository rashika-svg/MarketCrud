import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';

export const MAIN_COMPONENT = [
  DialogComponent,
  HomeComponent
]

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
