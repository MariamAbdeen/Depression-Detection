import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  constructor(private viewportScroller: ViewportScroller) {} 
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
}
