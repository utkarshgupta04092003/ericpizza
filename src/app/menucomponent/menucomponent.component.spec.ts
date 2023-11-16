import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucomponentComponent } from './menucomponent.component';

describe('MenucomponentComponent', () => {
  let component: MenucomponentComponent;
  let fixture: ComponentFixture<MenucomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenucomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenucomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
