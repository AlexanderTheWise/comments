import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { GenericIconComponent } from './components/generic-icon/generic-icon.component';
import { ReplyComponent } from './components/reply/reply.component';
import { AdjustSizeDirective } from './adjust-size.directive';
import { VotesComponent } from './components/votes/votes.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    GenericIconComponent,
    ReplyComponent,
    AdjustSizeDirective,
    VotesComponent,
    HeaderComponent,
    ActionsComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
