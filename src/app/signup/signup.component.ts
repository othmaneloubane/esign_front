import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  step:any=0;

  constructor() { }

  ngOnInit(): void
  {
  }

  nextStep()
  {
    this.step++;
  }

  previousStep()
  {
    this.step--;
  }
}
