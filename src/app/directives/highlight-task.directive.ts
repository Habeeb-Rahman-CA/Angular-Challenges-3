import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]',
  standalone: true
})
export class HighlightTaskDirective {

  @Input() set appHighlightTask(isCompleted: boolean){
    this.textDecoration = isCompleted ? 'line-through': 'none'
  }

  @HostBinding('style.textDecoration') textDecoration: string = 'none'

}
