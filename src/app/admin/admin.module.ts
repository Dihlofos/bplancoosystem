import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'create',
        component: CreatePageComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [LoginPageComponent, CreatePageComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
