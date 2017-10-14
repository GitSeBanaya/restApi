import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { FetchPostsService } from './services/fetch-posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FetchPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
