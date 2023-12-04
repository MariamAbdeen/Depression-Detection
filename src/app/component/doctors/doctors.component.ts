import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  constructor(private viewportScroller: ViewportScroller) {} 
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
}
