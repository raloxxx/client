import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { NewsComponent } from './pages/home/news/news.component';
import { BestSellerComponent } from './pages/home/best-seller/best-seller.component';
import { HighlightsComponent } from './pages/home/highlights/highlights.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewsComponent,
    BestSellerComponent,
    HighlightsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
