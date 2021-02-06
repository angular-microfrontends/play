import { Component, Input } from '@angular/core';
import { Attack } from '@angular-mf/core';

@Component({
  selector: 'play-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
})
export class ResultComponent {
  @Input() attack?: Attack;

  get attackSuccessful(): boolean {
    return this.attack?.attackSuccessful === true;
  }

  get miss(): boolean {
    return this.attack?.attackSuccessful === false;
  }

  get attackDescription(): string {
    if (!this.attack) {
      throw new Error('No attack input');
    }

    const modifs: string[] = [];

    if (!this.attack.damageMargin) {
      // no name
    } else if (this.attack.damageMargin > 10) {
      modifs.push('HARD');
    } else if (this.attack.damageMargin > 5) {
      modifs.push('Strong');
    } else {
      modifs.push('Serious');
    }

    if (this.attack.attackMargin > 10) {
      modifs.push('CRITICAL');
    } else if (this.attack.attackMargin > 5) {
      modifs.push('Skillful');
    }

    let desc;
    if (modifs.length === 0) {
      desc = 'Regular';
    } else {
      desc = modifs.join(' ');
    }
    return `${desc} Attack`;
  }

  get attackDirection(): string {
    return (this.attack?.attacker.name === 'Player') ? '> > >' : '< < <';
  }

  get defended(): boolean {
    return typeof this.attack?.defenseSuccessful === 'boolean';
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
