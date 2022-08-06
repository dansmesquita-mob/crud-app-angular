import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://sheet.best/api/sheets/74f017df-68df-41f2-9d29-c7ce79ac5d68";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // retorna lista de usuários - get
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);

  }

  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }


  updateUser(id: string, user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`,user,this.httpOptions);
  }

  getUser(id: string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}
