import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankWithoutnavComponent } from './blank-withoutnav.component';

describe('BlankWithoutnavComponent', () => {
  let component: BlankWithoutnavComponent;
  let fixture: ComponentFixture<BlankWithoutnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankWithoutnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankWithoutnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
