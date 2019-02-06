import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { ContentComponent } from './content/content.component';
import { WINDOW_PROVIDERS } from './window.service';


@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
