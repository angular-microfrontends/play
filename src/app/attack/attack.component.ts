import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameCoreService } from '@angular-microfrontends/game-core';

@Component({
  selector: 'play-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.sass'],
})
export class AttackComponent implements OnInit, OnDestroy {
  get attacking(): boolean {
    return this.core.attacking;
  }

  get defending(): boolean {
    return this.core.defending;
  }

  get waiting(): boolean {
    return !this.resting && !this.attacking && !this.defending && !this.core.challengeEnded;
  }

  get resting(): boolean {
    return (typeof this.core.challenger !== 'object') || this.core.challengeEnded;
  }

  get challengeEnded(): boolean {
    return (typeof this.core.challenger === 'object') && this.core.challengeEnded;
  }

  get win(): boolean {
    return this.core.player.health > 0;
  }

  constructor(
    public core: GameCoreService,
  ) { }

  ngOnInit(): void {
    this.core.load();
  }

  ngOnDestroy(): void {
    this.core.save();
  }

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
