import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignmentDetails: any = {};
  assignmentLink: string = '';
  assignmentId: string | null = null;
  assignmentForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.assignmentId = id;
    } else {
      // Handle the case when 'id' is null, e.g., show an error or redirect
    }

    this.apiService.getAssignmentDetails(this.assignmentId!).subscribe((data) => {
      this.assignmentDetails = data.msg;
    });

    this.assignmentForm = this.formBuilder.group({
      link: ['', Validators.required]
    });
  }

  submitAssignment() {
    console.log(this.assignmentLink)
    const id = this.route.snapshot.paramMap.get('id');
    if (this.assignmentLink && id !== null) {
      this.apiService.submitAssignment(id, this.assignmentLink).subscribe((response) => {
       alert(response.msg)
      });
    }else{
      alert("please provide the assignment link")
    }
     }

  markAsCompleted() {
    if (this.assignmentId !== null) {
      // Call the markAssignmentAsCompleted method from your ApiService
      this.apiService.markAssignmentAsCompleted(this.assignmentId).subscribe((response) => {
        // Handle the response (e.g., show a success message)
      });
    }
  }

  // The logLinkValue method should be defined here
  logLinkValue(event: any) {
    const link = event.target.value;
    // console.log(link); // Log the value of 'link' input
  }
}
