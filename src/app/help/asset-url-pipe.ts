/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';

import { AssetUrlService } from './asset-url.service';

// move to util module or project
@Pipe({ name: 'assetUrl' })
export class AssetUrlPipe implements PipeTransform {
  constructor(
    private service: AssetUrlService,
  ) { }

  transform(value: string): string {
    return this.service.assetUrl(value);
  }
}
