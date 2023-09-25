import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor(public breakpointObserver: BreakpointObserver) { }
  isMobile(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset) || this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape);
  }

}
