import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  rows = [];
  constructor() { }

  ngOnInit() {
    this.generateRows();
  }

  private generateRows() {
    this.rows = [];
    for (var i = 0; i < 99; i++) {
      this.rows.push(`кот ${i}`);
    }
  }
}
