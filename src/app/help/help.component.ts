import { Component } from '@angular/core';
import { AssetUrlService } from './asset-url.service';

@Component({
  selector: 'play-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  constructor(
    private assetUrlService: AssetUrlService,
  ) {}

  url = this.assetUrlService.assetUrl('1-code.svg');
}
