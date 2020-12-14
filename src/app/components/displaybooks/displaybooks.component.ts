import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent implements OnInit {
  @Input() values=[];
  @Input() count;
  public show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  toggle() {
    this.show = !this.show;
  }
}
