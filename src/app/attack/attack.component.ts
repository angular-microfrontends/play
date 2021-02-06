import { Component } from '@angular/core';
import { CoreService } from '@angular-mf/core';

@Component({
  selector: 'play-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.sass'],
})
export class AttackComponent {
  get attacking(): boolean {
    return this.core.attacking;
  }

  get defending(): boolean {
    return this.core.defending;
  }

  get waiting(): boolean {
    return !this.resting && !this.attacking && !this.defending;
  }

  get resting(): boolean {
    return typeof this.core.challenger !== 'object';
  }

  constructor(
    public core: CoreService,
  ) { }

  attack(): void {
    this.core.attack();
  }

  block(): void {
    this.core.block();
  }

  challenge(): void {
    this.core.startChallenge();
  }

  dodge(): void {
    this.core.dodge();
  }

  nextTurn(): void {
    this.core.startTurn();
  }

  run(): void {
    this.core.run();
  }
}
