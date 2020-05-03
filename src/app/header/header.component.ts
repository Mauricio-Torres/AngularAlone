import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //evento emite algo
  @Output() featureSelected = new EventEmitter<any>();

  constructor() { }

  onSelect(resetas : string){
    this.featureSelected.emit(resetas);
  }
  ngOnInit() {
  }
  /*
   onResize(event: any)
   {
    console.log('size pag Alto ', event.currentTarget.innerHeight);
    console.log('size pag Ancho ', event.currentTarget.innerWidth);
   }
   */


}
