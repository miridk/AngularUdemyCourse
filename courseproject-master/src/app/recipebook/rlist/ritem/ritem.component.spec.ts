import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitemComponent } from './ritem.component';

describe('RitemComponent', () => {
  let component: RitemComponent;
  let fixture: ComponentFixture<RitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
