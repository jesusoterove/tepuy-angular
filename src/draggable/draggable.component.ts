import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tepuy-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class TepuyDraggableComponent implements OnInit {
  @Input() title: string
  constructor() {

  }

  ngOnInit() {
  }

}
