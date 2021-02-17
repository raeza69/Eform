import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   
  private employementStatus =  [
    { id: 'rbEmployed', name: 'Employed' },
    { id: 'rbUnEmployed', name: 'Un Employed' },
    { id: 'rbSelfEmployed', name: 'Self Employed' },
    { id: 'rbStudent', name: 'Student' }
  ];

  private jobPositionList = [
    { id: 1, name: 'Awesome position 1' },
    { id: 2, name: 'Awesome position 2' },
    { id: 3, name: 'Awesome position 3' },
    { id: 4, name: 'Awesome position 4' },
    { id: 5, name: 'Awesome position 5' }
  ];

  private employeeStatus;
  private jobPosition;
  constructor() { }

  ngOnInit() {
    this.employeeStatus = this.employementStatus[0].name;
  }
  onChange(x) {
    console.log(x);
  }

  jobSubmit(jf) {
    console.log(jf);
  }

}
