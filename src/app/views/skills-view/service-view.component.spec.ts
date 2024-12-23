import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsViewComponent } from './service-view.component';

describe('ServiceViewComponent', () => {
  let component: SkillsViewComponent;
  let fixture: ComponentFixture<SkillsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
