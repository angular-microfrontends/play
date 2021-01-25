import { Component } from '@angular/core';

import { SingleSpaService } from 'src/single-spa/single-spa.service';

@Component({
  selector: 'play-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  constructor(
    private spaService: SingleSpaService,
  ) {}

  url = this.spaService.assetUrl('1-code.svg');
}
