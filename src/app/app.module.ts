import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    DetailsComponent,
    FooterComponent,
    Page2Component,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
