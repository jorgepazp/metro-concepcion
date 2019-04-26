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
    SpacerComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
