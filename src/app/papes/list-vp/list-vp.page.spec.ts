import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListVPPage } from './list-vp.page';

describe('ListVPPage', () => {
  let component: ListVPPage;
  let fixture: ComponentFixture<ListVPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListVPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
