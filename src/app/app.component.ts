import { Component, OnInit } from '@angular/core';
import * as Markdown from 'markdown-it';

@Component({
  selector: 'app-root',
  template: `
    {{result}}
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'markdown-test';
  md = new Markdown();
  result;
  ngOnInit() {
    this.result = this.md.renderInline('# markdown-it rulezz!, **hi** `world`');
    console.log(this.result);
  }
}
