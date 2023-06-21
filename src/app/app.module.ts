import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { GenericIconComponent } from './components/generic-icon/generic-icon.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReplyComponent } from './components/reply/reply.component';
import { AdjustSizeDirective } from './adjust-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    GenericIconComponent,
    CommentsComponent,
    ReplyComponent,
    AdjustSizeDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
