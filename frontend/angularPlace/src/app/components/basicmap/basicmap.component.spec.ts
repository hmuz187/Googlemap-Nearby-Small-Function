import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicmapComponent } from './basicmap.component';

describe('BasicmapComponent', () => {
  let component: BasicmapComponent;
  let fixture: ComponentFixture<BasicmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
