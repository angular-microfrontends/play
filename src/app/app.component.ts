import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'play-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngVersion = VERSION;

  title = 'play';
}
