import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class AppService{

  constructor(public breakpointObserver: BreakpointObserver) { }
  isMobile(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait) || this.breakpointObserver.isMatched(Breakpoints.XSmall);
  }

}
