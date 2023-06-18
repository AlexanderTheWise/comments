import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { GenericIconComponent } from './components/generic-icon/generic-icon.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [AppComponent, CommentComponent, GenericIconComponent, CommentsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
