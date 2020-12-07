import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor() { }
  @Input() childMessage: string;
  dispalyimg=null
  dispalySearchBar=null
  ngOnInit(): void {
    if (this.childMessage == "Admin"){
      this.dispalyimg=false;
     this.dispalySearchBar=false;
    
    }
    else{
      this.dispalyimg=true;
      this.dispalySearchBar=true;
    }
  }

}
