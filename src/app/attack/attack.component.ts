import { core } from '@angular/compiler';
import { Component } from '@angular/core';
import { CoreService } from '@angular-mf/core';

@Component({
  selector: 'play-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.sass'],
})
export class AttackComponent {
  public message = this.core.readMessage();

  constructor(
    private core: CoreService,
  ) { }
}
