import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-receta',
  templateUrl: './receta-edit.component.html',
  styleUrls: ['./receta-edit.component.css']
})
export class RecetaCEditComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log('edit mode', this.editMode);
    });
  }

}
