import { Component } from '@angular/core';
import { Slider1Component } from '../../../shared/sliders/slider-1/slider-1.component';
import { BannerHomeComponent } from '../../../shared/sliders/banner-home/banner-home.component';
import { GamestaticsComponent } from '../../../shared/alerts/gamestatics/gamestatics.component';
import { LiveComponent } from '../../../shared/live/live.component';
import { ReleasesComponent } from '../../../shared/releases/releases.component';

@Component({
  standalone: true,
  imports: [Slider1Component, BannerHomeComponent, GamestaticsComponent, LiveComponent, ReleasesComponent],
  templateUrl: './home.component.html',
  styles: ``
})

export default class HomeComponent {

}
