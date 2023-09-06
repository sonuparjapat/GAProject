import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignmentId!: number ;
  assignment: any = {}; // Initialize assignment object with the assignment structure

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.assignmentId = params['id'];
      this.apiService.getAssignmentById(this.assignmentId).subscribe(data => {
        console.log(data)
        this.assignment = data.msg; // Populate assignment object with fetched data
      });
    });
  }

  updateAssignment() {
    this.apiService.updateAssignment(this.assignmentId, this.assignment).subscribe(response => {
      alert(response.msg)
      // Handle the response (e.g., show a success message)
      this.router.navigate(['/dashboard']); // Navigate back to the dashboard after updating
    },(error)=>{
      alert(error.error.msg)
    });
  }
}
