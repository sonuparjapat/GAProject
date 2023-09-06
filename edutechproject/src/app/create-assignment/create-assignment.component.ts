import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent {
  assignmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router:Router
  ) {
    this.assignmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitAssignment() {
    if (this.assignmentForm.valid) {
      const assignmentData = this.assignmentForm.value;
      this.apiService.createInstructorAssignment(assignmentData).subscribe((response) => {
        // Handle the response (e.g., show a success message)
        alert(response.msg)
        this.router.navigate(["/dashboard"])
      });
    }
  }
}
