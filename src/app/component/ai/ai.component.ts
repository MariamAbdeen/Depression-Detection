import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'
@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  constructor(private viewportScroller: ViewportScroller) {} 
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
}
