import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public isHandset: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) { }
  ngOnInit() {

    this.breakpointObserver
      .observe(['(max-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isHandset = true;
          console.log('isHanset');
        } else {
          console.log('not isHanset');
        }
      });
}
}
