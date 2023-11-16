import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcomponentComponent } from './totalcomponent.component';

describe('TotalcomponentComponent', () => {
  let component: TotalcomponentComponent;
  let fixture: ComponentFixture<TotalcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
