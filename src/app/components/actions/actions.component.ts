import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ActionsComponent {
  @Input() isYours: boolean;
  @Output() replyEmit = new EventEmitter();
  @Output() toggleEditingEmit = new EventEmitter();
  @Output() openModalEvent = new EventEmitter();

  onReplyOpen() {
    this.replyEmit.emit();
  }

  onToggleEditing() {
    this.toggleEditingEmit.emit();
  }

  onOpenModal() {
    this.openModalEvent.emit();
  }
}
