import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { AboutComponent } from './about/about.component';
import { ListchComponent } from './listch/listch.component';
import { AuthGuard } from './auth.guard';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'navigation',component:NavigationComponent},
  {path:'wallpaper',component:WallpaperComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'episode',component:EpisodesComponent},
  { path: 'characters/:episodeId', component: ListchComponent },
  {path:'about',component:AboutComponent},
  { path: 'order', component: OrderComponent, },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'shop',component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
