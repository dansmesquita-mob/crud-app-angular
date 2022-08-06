import { Component, OnInit, AfterContentInit, AfterContentChecked, OnChanges, DoCheck,
  AfterViewChecked , OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input()  number = 10;
  constructor() {
    console.log("chamou o construtor");
   }
  
  ngOnChanges(): void {
    console.log("Chamou o OnChanges");
  }
 

  ngOnInit(): void {
    console.log("chamou o on Init");
  }
  ngDoCheck(): void {
    console.log("Chamou Do Check");
  }

  ngAfterContentInit(): void {
    console.log("Chamou o AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Chamou Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("Chamou o After View Init");
  }

  
  ngAfterViewChecked(): void {
    console.log("Chamou o After View Checked");
  }

  ngOnDestroy(): void {
    console.log("Chamou o On Destroy");
  }

}
