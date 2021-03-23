import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url-constants";
import { IEmployer } from "../models/Employer";
import { IWorker } from "../models/Worker";

@Injectable({
    providedIn: 'root'
  })
  export class EmployerService {
  
    private baseUrl=environmentVariables.JSON_API_URL;
  
    constructor(private http: HttpClient) { }
  
    getDirectorByEmail(email: string): Observable<IEmployer>{
      let url=this.baseUrl+`/employer?email=${email}`;
      return this.http.get<IEmployer>(url);
    }
    
    // getEventsByDirectorsId( id: number): Observable<IEvent[]>{
    //   let url=this.baseUrl+`/event?directorId=${id}`;
    //   return this.http.get<IEvent[]>(url);
    // }
  
    // postEvent(oglas: Event):Observable<IEvent>{
    //   let url=this.baseUrl+`/event`;
    //   return this.http.post<IEvent>(url,oglas);
    // }
  
    // updateEvent(idOglasa: number, oglas: Event):Observable<IEvent>{
    //   let url=this.baseUrl+`/event/${idOglasa}`;
    //   return this.http.put<IEvent>(url,oglas);
    // }
  
    // deleteEvent( eventId: number):Observable<IEvent>{
    //   let url=this.baseUrl+`/event/${eventId}`;
    //   return this.http.delete<IEvent>(url);
    // }
  
    getAllUsers() : Observable<IWorker[]>{
      let url=this.baseUrl+"/worker";
      return this.http.get<IWorker[]>(url);
    }
  }
  