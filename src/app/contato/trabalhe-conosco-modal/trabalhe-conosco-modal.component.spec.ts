import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalheConoscoModalComponent } from './trabalhe-conosco-modal.component';

describe('TrabalheConoscoModalComponent', () => {
  let component: TrabalheConoscoModalComponent;
  let fixture: ComponentFixture<TrabalheConoscoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalheConoscoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalheConoscoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
