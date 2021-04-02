import { Component, Input } from '@angular/core';
import { Attack } from '@angular-microfrontends/game-core';

type AttackLevel = 'regular' | 'skillful' | 'critical';

type DamageLevel = 'regular' | 'serious' | 'strong' | 'hard';

@Component({
  selector: 'play-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
})
export class ResultComponent {
  @Input() attack?: Attack;

  get playerAttack(): boolean {
    return this.attack?.attacker.name === 'Player';
  }

  get attackSuccessful(): boolean {
    return this.attack?.attackSuccessful === true;
  }

  get miss(): boolean {
    return this.attack?.attackSuccessful === false;
  }

  get attackLevel(): AttackLevel {
    let level: AttackLevel;
    if (!this.attack) {
      level = 'regular';
    } else if (this.attack.attackMargin > 10) {
      level = 'critical';
    } else if (this.attack.attackMargin > 5) {
      level = 'skillful';
    } else {
      level = 'regular';
    }
    return level;
  }

  get damageLevel(): DamageLevel {
    let level: DamageLevel;
    if (!this.attack?.damageMargin) {
      level = 'regular';
    } else if (this.attack.damageMargin > 10) {
      level = 'hard';
    } else if (this.attack.damageMargin > 5) {
      level = 'strong';
    } else {
      level = 'serious';
    }
    return level;
  }

  get regularAttack(): boolean {
    return this.attackLevel === 'regular' && this.damageLevel === 'regular';
  }

  get attackDirection(): string {
    return (this.attack?.attacker.name === 'Player') ? '\u27A1' : '\u2B05';
  }

  get defended(): boolean {
    return typeof this.attack?.defenseSuccessful === 'boolean';
  }

  get defenseSuccessful(): boolean {
    return this.attack?.defenseSuccessful === true;
  }

  get defenseDescription(): string {
    if (!this.attack || (typeof this.attack.defenseSuccessful !== 'boolean')) {
      throw new Error('No attack input');
    }

    const success = this.attack.defenseSuccessful;
    switch (this.attack.defenseType) {
      case 'block':
        return success ? 'Blocked!' : 'Block failed!';
      case 'dodge':
      default:
        return success ? 'Dodged!' : 'Dodge failed!';
    }
  }
}
