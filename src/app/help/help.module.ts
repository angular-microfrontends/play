import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetUrlPipe } from './asset-url-pipe';
import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';
import { AssetUrlService } from './asset-url.service';

@NgModule({
  declarations: [
    AssetUrlPipe,
    AssetUrlService,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
  ],
})
export class HelpModule { }
