// import { Resolve } from '@angular/router';

// export const userResolver: ResolveFn<boolean> = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from 'src/interface/response.interface';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<Response> {

  constructor(private userService: UserService){}

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Response> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}