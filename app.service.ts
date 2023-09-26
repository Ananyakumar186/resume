import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService{
  isHandset =  new BehaviorSubject<boolean>(false);
  constructor(public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width:600px)']).subscribe(result=>{
      if(result.matches){
        this.isHandset.next(true);
        console.log('ishandset');
      }else{
        this.isHandset.next(false);
        console.log('not ishandset');
      }
    });
  }


}
