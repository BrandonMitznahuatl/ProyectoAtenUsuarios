import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problemtracking',
  templateUrl: './problemtracking.component.html',
  styleUrls: ['./problemtracking.component.css']
})
export class ProblemtrackingComponent implements OnInit {
  band1:boolean=false;
  band2:boolean=false;
  constructor() { }
Ocultar1()
{
  console.log(this.band1);
  this.band1=!this.band1;
  return this.band1;
}
Ocultar2()
{
  console.log(this.band2);
  this.band2=!this.band2;
  return this.band2;
}
  ngOnInit(): void {
  }

}
