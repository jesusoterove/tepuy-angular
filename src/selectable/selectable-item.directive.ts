import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({ 
  selector: '[tepuy-draggable]',
  host: { "(started)": "dragStarted($event)", "(stopped)": "dragStopped($event)" }
})
export class TepuyDraggableDirective {
  dropTarget: HTMLElement;
  @Input('tepuy-draggable') targetId: string
