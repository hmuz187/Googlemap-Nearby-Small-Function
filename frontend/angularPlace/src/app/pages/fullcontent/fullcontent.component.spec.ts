import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcontentComponent } from './fullcontent.component';

describe('FullcontentComponent', () => {
  let component: FullcontentComponent;
  let fixture: ComponentFixture<FullcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
