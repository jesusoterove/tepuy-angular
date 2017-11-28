import { Component, Input } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `
    <div>
      <p>{{title}}</p>
    </div>`
})
export class SampleComponent {
  @Input() title: string
  constructor() {
  }

}