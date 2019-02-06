import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../window.service";
import { Observable, fromEvent } from "rxjs";

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.css']
})
export class StickyHeaderComponent implements OnInit {

  public navIsFixed: boolean = false;  

  public windowObservable: Observable<Event>;

  private headerHeight: number = 48;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {    
    this.windowObservable = fromEvent(window, "scroll");
  }

  ngOnInit() {
    this.windowObservable.subscribe(() => { this.processWindowOffset() });
  }

  processWindowOffset() {
    var offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0

    if (offset > this.headerHeight) {
      this.navIsFixed = true;
    } else {
      this.navIsFixed = false;
    }
  }
}
