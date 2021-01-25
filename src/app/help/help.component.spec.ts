import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetUrlPipe } from 'src/single-spa/asset-url-pipe';
import { SingleSpaService } from 'src/single-spa/single-spa.service';

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
        { provide: SingleSpaService, useValue: { assetUrl: jest.fn() } },
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
