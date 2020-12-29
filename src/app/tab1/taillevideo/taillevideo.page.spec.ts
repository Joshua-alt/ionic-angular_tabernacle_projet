import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaillevideoPage } from './taillevideo.page';

describe('TaillevideoPage', () => {
  let component: TaillevideoPage;
  let fixture: ComponentFixture<TaillevideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaillevideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaillevideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
