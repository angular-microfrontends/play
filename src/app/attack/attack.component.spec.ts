import { ComponentFixture } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';

import { Page } from '../../test/page';
import { TestUtil } from '../../test/test-util';
import { AppModule } from '../app.module';
import { AttackComponent } from './attack.component';

class AttackPage extends Page {
  get help(): HTMLDivElement {
    return this.query('.help');
  }
}

describe('AttackComponent', () => {
  let component: AttackComponent;
  let fixture: ComponentFixture<AttackComponent>;
  let page: AttackPage;

  beforeEach(async () => {
    await MockBuilder(AttackComponent, AppModule);
    ({
      component,
      fixture,
      page,
    } = await TestUtil.initTestEnv(AttackComponent, AttackPage));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display help', () => {
    TestUtil.initComponent(fixture);
    expect(page.help).toBeDefined();
  });
});
