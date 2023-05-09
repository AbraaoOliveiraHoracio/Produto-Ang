import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TClientComponent } from './tclient.component';

describe('TClientComponent', () => {
  let component: TClientComponent;
  let fixture: ComponentFixture<TClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
