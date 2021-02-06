import { Component } from '@angular/core';
import { CoreService } from '@angular-mf/core';

@Component({
  selector: 'play-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.sass'],
})
export class AttackComponent {
  get fighting(): boolean {
    return typeof this.core.challenger === 'object';
  }

  get resting(): boolean {
    return !this.fighting;
  }

  constructor(
    public core: CoreService,
  ) { }

  attack(): void {
    this.core.attack();
  }

  challenge(): void {
    this.core.buildChallenger();
  }

  runAway(): void {
    this.core.runAway();
  }
}
