import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthguardGuard } from "../app/authguard/authguard.guard";
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"toolbar",component:ToolbarComponent},
  {path:"forgotPassword",component:ForgotpasswordComponent},
  {path:"resetPassword/:token",component:ResetpasswordComponent},
  {path:"adminDashBoard",component:AdmindashboardComponent,canActivate: [AuthguardGuard]},
  {path:"register",component:RegisterComponent},
  {path:"userDashboard",component:GetbooksComponent,canActivate: [AuthguardGuard]},
  {path:"footer",component:FooterComponent},
  {path:"cart",component:CartComponent},
  {path:"order",component:OrdersuccessComponent},
  {path:"w",component:WishlistComponent},
  {path:"dashboard",component:UserdashboardComponent,canActivate: [AuthguardGuard],
  children: [
    {
      path: 'books',
      component: GetbooksComponent
    }, 
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent
    }  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
