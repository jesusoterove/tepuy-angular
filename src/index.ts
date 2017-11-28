import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AngularDraggableModule } from 'angular2-draggable';

import { TepuyDraggableComponent } from './draggable/draggable.component';
import { TepuyDraggableDirective } from './draggable/draggable.directive';

//import { SampleComponent } from './sample.component';
//import { SampleDirective } from './sample.directive';
//import { SamplePipe } from './sample.pipe';
//import { SampleService } from './sample.service';

//export * from './sample.component';
//export * from './sample.directive';
//export * from './sample.pipe';
//export * from './sample.service';
export * from './draggable/draggable.component';
export * from './draggable/draggable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TepuyDraggableComponent,
    TepuyDraggableDirective
  ],
  exports: [
    TepuyDraggableComponent,
    TepuyDraggableDirective
  ]
})
export class TepuyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TepuyModule,
      providers: []
    };
  }
}
