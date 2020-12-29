import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirephotoPage } from './firephoto.page';

describe('FirephotoPage', () => {
  let component: FirephotoPage;
  let fixture: ComponentFixture<FirephotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirephotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirephotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
