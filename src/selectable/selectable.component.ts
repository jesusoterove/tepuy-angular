import { Component, OnInit, Input } from '@angular/core';

import { SelectableService } from './selectable.provider';

@Component({
  selector: 'tepuy-selectable',
  templateUrl: './selectable.component.html',
  styleUrls: ['./selectable.component.scss'],
  providers: [ SelectableService ]
})
export class TepuySelectableComponent implements OnInit {
  @Input() title: string
  
  constructor(private service: SelectableService) {

  }

  ngOnInit() {
  }

}
