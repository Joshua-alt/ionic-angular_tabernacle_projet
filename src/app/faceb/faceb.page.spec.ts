import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacebPage } from './faceb.page';

describe('FacebPage', () => {
  let component: FacebPage;
  let fixture: ComponentFixture<FacebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
