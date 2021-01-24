import { Injectable } from '@angular/core';

import { assetUrl } from 'src/single-spa/asset-url';

@Injectable({
  providedIn: 'any',
})
export class AssetUrlService {
  // eslint-disable-next-line class-methods-use-this
  public assetUrl(url: string): string {
    // calling this line breaks Jest
    return assetUrl(url);
  }
}
