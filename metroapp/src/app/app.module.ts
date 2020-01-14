import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstacionComponent } from './estacion/estacion.component';
import { ParallaxDirective } from './parallax.directive';
import { ParallaxComponent } from './parallax/parallax.component';
import { StoryComponent } from './story/story.component';
import { ParallaxHeaderComponent } from './parallax-header/parallax-header.component';
import { RazonesComponent } from './razones/razones.component';
import { FooterComponent } from './footer/footer.component';
import { PollComponent } from './poll/poll.component';
import { SpacerComponent } from './spacer/spacer.component';
import { HttpClientModule } from '@angular/common/http';
import { OpinionService } from './opinion.service';
import { Opinion } from './opinion';
import { FormsModule } from '@angular/forms';
import {  ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EstacionComponent,
    ParallaxDirective,
    ParallaxComponent,
    StoryComponent,
    ParallaxHeaderComponent,
    RazonesComponent,
    FooterComponent,
    PollComponent,
    SpacerComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [Opinion,OpinionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
