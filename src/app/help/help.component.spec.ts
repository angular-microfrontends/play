import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetUrlPipe } from './asset-url-pipe';
import { AssetUrlService } from './asset-url.service';
import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AssetUrlPipe,
        HelpComponent,
      ],
      providers: [
        { provide: AssetUrlService, useValue: { assetUrl: jest.fn() } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
