import { Component, Input } from '@angular/core';

@Component({
  selector: 'generic-icon',
  templateUrl: './generic-icon.component.html',
  styles: ['.icon-container {display: flex; align-items: center;}'],
})
export class GenericIconComponent {
  @Input() iconType: string = '';
}
