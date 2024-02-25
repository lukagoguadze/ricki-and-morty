import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeCardComponent } from './cards/home-card/home-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { CardEpisodComponent } from './cards/home-card/card-episod/card-episod.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

import { AboutComponent } from './about/about.component';
import { ListchComponent } from './listch/listch.component';
import { AuthGuard } from './auth.guard';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
// import { ApisodeComponent } from './cards/home-card/apisode-card/apisode.component';
// import { EsisodComponent } from './esisod/esisod.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    RegistrationComponent,
    LoginComponent,
    HomeCardComponent,
    FooterComponent,
    PhotoCarouselComponent,
    CardEpisodComponent,
    EpisodesComponent,
    WallpaperComponent,
    AboutComponent,
    ListchComponent,
    ShopComponent,
    OrderComponent,
    // ApisodeComponent,
    // EsisodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
