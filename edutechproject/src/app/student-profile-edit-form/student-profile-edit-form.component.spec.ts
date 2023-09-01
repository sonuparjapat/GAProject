import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditFormComponent } from './student-profile-edit-form.component';

describe('StudentProfileEditFormComponent', () => {
  let component: StudentProfileEditFormComponent;
  let fixture: ComponentFixture<StudentProfileEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfileEditFormComponent]
    });
    fixture = TestBed.createComponent(StudentProfileEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
