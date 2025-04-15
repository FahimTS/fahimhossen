import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServiceComponent } from './service/service.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StayInTouchComponent } from './stay-in-touch/stay-in-touch.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    ServiceComponent,
    WorkProcessComponent,
    PortfolioComponent,
    StayInTouchComponent,
    FooterComponent,
    HomeComponent,
    PortfolioCardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule, // ✅ ngx-slick-carousel ইমপোর্ট করুন
    ReactiveFormsModule,
    HttpClientModule,
    CountUpModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
