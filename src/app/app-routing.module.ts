import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DisplaybooksComponent } from './components/displaybooks/displaybooks.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"toolbar",component:ToolbarComponent},
  {path:"forgotPassword",component:ForgotpasswordComponent},
  {path:"resetPassword/:token",component:ResetpasswordComponent},
  {path:"adminDashBoard",component:AdmindashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"books",component:GetbooksComponent},
  {path:"footer",component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
