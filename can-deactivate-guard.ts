import { Injectable } from '@angular/core'
import { CanDeactivate } from '@angular/router'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
 
// Вызывыется метод canDeactivate когда пользователь покидает страницу 
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
