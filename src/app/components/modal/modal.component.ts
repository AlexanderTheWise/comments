import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/types';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement>;
  @Input() parentComment: Comment;
  @Input() comment: Comment;
  @Output() closeDialogEvent = new EventEmitter();

  constructor(private commentsService: CommentsService) {}

  ngAfterViewInit(): void {
    this.dialog.nativeElement.showModal();
  }

  onCancel() {
    this.dialog.nativeElement.close();
    this.closeDialogEvent.emit();
  }

  onDelete() {
    this.commentsService.deleteComment(this.parentComment, this.comment.id);
    this.dialog.nativeElement.close();
    this.closeDialogEvent.emit();
  }
}
