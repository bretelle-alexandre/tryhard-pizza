import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglePizzaPage } from './single-pizza.page';

describe('SinglePizzaPage', () => {
  let component: SinglePizzaPage;
  let fixture: ComponentFixture<SinglePizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
