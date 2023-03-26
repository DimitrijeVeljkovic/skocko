import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSignsComponent } from './available-signs.component';

describe('AvailableSignsComponent', () => {
  let component: AvailableSignsComponent;
  let fixture: ComponentFixture<AvailableSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableSignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
