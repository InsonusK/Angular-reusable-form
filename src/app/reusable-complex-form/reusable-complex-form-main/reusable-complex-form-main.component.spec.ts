import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableComplexFormMainComponent } from './reusable-complex-form-main.component';

describe('ReusableComplexFormMainComponent', () => {
  let component: ReusableComplexFormMainComponent;
  let fixture: ComponentFixture<ReusableComplexFormMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableComplexFormMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReusableComplexFormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
