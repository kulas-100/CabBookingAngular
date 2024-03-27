import { Routes } from '@angular/router';
import { AddaAccountComponent } from './components/adda-account/adda-account.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { DemoComponent } from './components/demo/demo.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayAccountsComponent } from './components/display-accounts/display-accounts.component';
import { LoginComponent } from './components/login/login.component';
import { NeedsLoginComponent } from './components/needs-login/needs-login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';

//import { RegisterComponent } from './components/register/register.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { DriverHomeComponent } from './components/driver-home/driver-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { SearchCabComponent } from './components/search-cab/search-cab.component';
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { PostRatingComponent } from './components/post-rating/post-rating.component';
import { EnterRatingComponent } from './components/enter-rating/enter-rating.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { ViewRatingComponent } from './components/view-rating/view-rating.component';
import { UpdateRatingComponent } from './components/update-rating/update-rating.component';
import { CreateRouteComponent } from './components/create-route/create-route.component';
import { DisplayAllCabsComponent } from './components/display-all-cabs/display-all-cabs.component';
import { DisplayAllDriversComponent } from './components/display-all-drivers/display-all-drivers.component';
import { DisplayAllTripsComponent } from './components/display-all-trips/display-all-trips.component';
import { DisplayAllUsersComponent } from './components/display-all-users/display-all-users.component';
import { DisplayAllRoutesComponent } from './components/display-all-routes/display-all-routes.component';
import { DriverRegistrationComponent } from './components/driver-registration/driver-registration.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RegisterComponent } from './components/register/register.component';
import { RoutesComponent } from './components/routes/routes.component';
import { UpdateRoutesComponent } from './components/update-routes/update-routes.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';



export const routes: Routes = [
    {path: 'user-home', component: UserHomeComponent},
    {path: 'driver-home', component: DriverHomeComponent},
    {path: 'admin-home', component: AdminHomeComponent},
    {path: 'user-login', component: UserLoginComponent},
    {path: 'search-cab', component: SearchCabComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'view-bookings', component: ViewBookingsComponent},
    {path: 'cancel-booking', component: CancelBookingComponent},
    {path: 'post-rating', component: PostRatingComponent},
    {path: 'enter-rating', component: EnterRatingComponent},
    {path: 'payment-success', component: PaymentSuccessComponent},
    {path: 'view-rating', component: ViewRatingComponent},
    {path: 'update-rating', component: UpdateRatingComponent},
    {path: 'routes/create-route', component: CreateRouteComponent},
    {path: 'display-bookings', component: DisplayAccountsComponent},
    {path: 'display-cabs', component: DisplayAllCabsComponent},
    {path: 'display-drivers', component: DisplayAllDriversComponent},
    {path: 'display-trips', component: DisplayAllTripsComponent},
    {path: 'display-users', component: DisplayAllUsersComponent},
    {path: 'routes/display-routes', component: DisplayAllRoutesComponent},
    {path: 'driver-registration', component: DriverRegistrationComponent},
    {path: 'admin-login', component: AdminLoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'routes', component: RoutesComponent},
    {path: 'update-routes', component: UpdateRoutesComponent},
    {path: 'user-registration', component: UserRegistrationComponent},
    { path: 'login', component: LoginComponent },
    { path: 'demo', component: DemoComponent,canActivate:[authGuard] },
    {path:'products',component:ProductsComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'accounts',component:DisplayAccountsComponent},
    {path:'account',component:AddaAccountComponent,canActivate:[adminGuard]},    
    {path:'update-account/:id',component:UpdateAccountComponent},    
    {path:'needs-login',component:NeedsLoginComponent},  
    {path:'c1',component:C1Component},
    {path:'c2',component:C2Component},
    {path:'',component:AppComponent},
    {path: '**', component: PageNotFoundComponent }
];
