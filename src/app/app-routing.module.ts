import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from  'src/app/UI/view-models/login/login.component';
import { CategoriesComponent } from  'src/app/UI/view-models/categories/categories.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'admin-categories',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
