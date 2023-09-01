import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateProfileComponent } from './student-create-profile.component';

describe('StudentCreateProfileComponent', () => {
  let component: StudentCreateProfileComponent;
  let fixture: ComponentFixture<StudentCreateProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCreateProfileComponent]
    });
    fixture = TestBed.createComponent(StudentCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
