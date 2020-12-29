import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPhotoinstComponent } from './list-photoinst.component';

describe('ListPhotoinstComponent', () => {
  let component: ListPhotoinstComponent;
  let fixture: ComponentFixture<ListPhotoinstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhotoinstComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPhotoinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
