import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({ 
  selector: '[tepuy-draggable]',
  host: { "(started)": "dragStarted($event)", "(stopped)": "dragStopped($event)" }
})
export class TepuyDraggableDirective {
  dropTarget: HTMLElement;
  @Input('tepuy-draggable') targetId: string

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) { }


  ngOnInit() {
    console.log(this.targetId);
    //console.log('initialized');
  }

  dragStarted(el){
    this.renderer.removeClass(el, 'tepuy-dropped');
    this.renderer.removeClass(this.dropTarget, 'tepuy-filled');
    this.dropTarget = null;
  }

  dragStopped(el){
    console.log(this);
    let rect = el.getBoundingClientRect();
    let x = rect.x + (rect.width / 2);
    let y = rect.y + (rect.height / 2);
    let target:any = this.getElementFromPoint(el, x, y);
    if (!target) return;

    let droppableTarget = target.attributes.getNamedItem("tepuy-droppable-target");
    console.log(droppableTarget);
    if (droppableTarget) {
      let tRect = target.getBoundingClientRect();
      //el.
      console.log(target.style.top);
      console.log(target.style.left);
      target.appendChild(el);
      console.log(el.style);
      el.style.left = "0px";
      el.style.top = "0px";
      el.style.transform = "none";
      console.log(this.renderer);
      this.renderer.addClass(el, 'tepuy-dropped');
      this.renderer.addClass(target, 'tepuy-filled');
      this.dropTarget = target;
    }
    //if (target) target.shift();
    //target = target.shift();
    //console.log(target);
  }

  getElementFromPoint(el, x, y) {
    //Hide the dragging element so it took the first element behind
    var display = el.style.display;
    el.style.display = 'none';
    //Get the element behind
    var target = document.elementFromPoint(x, y);
    //Restart the visibility
    el.style.display = display;
    return target;
  }

  private isOverAxis(x, reference, size){
    return (x >= reference ) && ( x < (reference + size ));
  }

  private intersect(draggable, droppable, toleranceMode, event){

  }
}


/*
$.ui.intersect = ( function() {
  function isOverAxis( x, reference, size ) {
    return ( x >= reference ) && ( x < ( reference + size ) );
  }

  return function( draggable, droppable, toleranceMode, event ) {

    if ( !droppable.offset ) {
      return false;
    }

    var x1 = ( draggable.positionAbs ||
        draggable.position.absolute ).left + draggable.margins.left,
      y1 = ( draggable.positionAbs ||
        draggable.position.absolute ).top + draggable.margins.top,
      x2 = x1 + draggable.helperProportions.width,
      y2 = y1 + draggable.helperProportions.height,
      l = droppable.offset.left,
      t = droppable.offset.top,
      r = l + droppable.proportions().width,
      b = t + droppable.proportions().height;

    switch ( toleranceMode ) {
    case "fit":
      return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
    case "intersect":
      return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
        x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
        t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
        y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
    case "pointer":
      return isOverAxis( event.pageY, t, droppable.proportions().height ) &&
        isOverAxis( event.pageX, l, droppable.proportions().width );
    case "touch":
      return (
        ( y1 >= t && y1 <= b ) || // Top edge touching
        ( y2 >= t && y2 <= b ) || // Bottom edge touching
        ( y1 < t && y2 > b ) // Surrounded vertically
      ) && (
        ( x1 >= l && x1 <= r ) || // Left edge touching
        ( x2 >= l && x2 <= r ) || // Right edge touching
        ( x1 < l && x2 > r ) // Surrounded horizontally
      );
    default:
      return false;
    }
  };
} )();*/