import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable} from 'rxjs'
import { Response} from 'src/app/model/response.interface';
import { User } from 'src/app/model/user.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

  private getCustomHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getUsers(size: number = 10) : Observable<Response>{
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`,{
      headers:this.getCustomHeaders(),
    }).pipe(
      map(this.processResponse));
  }

  getUser(uuid: string) : Observable<Response>{
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`,{
      headers:this.getCustomHeaders(),
    }).pipe(
      map(this.processResponse));
  }

  private processResponse(response: Response):Response{
    return{
      info: {...response.info},
      results: response.results.map((user:any) => (<User>{
        uuid: user.login.uuid,
        firstName:user.name.first,
        lastName:user.name.last,
        email:user.email,
        username:user.login.username,
        gender:user.gender,
        address:`${user.location.street.name}, ${user.location.street.number}, ${user.location.city}, ${user.location.country}` ,
        dateOfBirth: user.dob.date,
        phone:user.phone,
        imageUrl:user.picture.medium,
        coordinate:  { latitude: +user.location.coordinates.latitude , longitude: +user.location.coordinates.longitude}
      }))
    }
  }
}
