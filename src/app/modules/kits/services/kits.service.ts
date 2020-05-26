import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Kit} from '../types/kit';

@Injectable({
  providedIn: 'root'
})
export class KitsService {
  constructor(private http: HttpClient) { }

  private kitsUrl = 'http://localhost:3000/api.kits';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Err: ', error);
      return of(result as T);
    };
  }

  getKits(): Observable<Kit[]> {
    return this.http.get<Kit[]>(this.kitsUrl)
      .pipe(
        catchError(this.handleError<Kit[]>('getKits', []))
      );
  }

  getKitById(id: number): Observable<Kit> {
    const url = `${this.kitsUrl}/${id.toString()}`;
    return this.http.get<Kit>(url).pipe(
      catchError(this.handleError<Kit>(`getKitById: ${id}`))
    );
  }

  addKit(kit: Kit): Observable<Kit> {
    return this.http.post<Kit>(this.kitsUrl, kit, this.httpOptions).pipe(
      catchError(this.handleError<Kit>('addKit'))
    );
  }

  updateKit(kit: Kit): Observable<any> {
    const url = `${this.kitsUrl}/${kit.id.toString()}`;
    return this.http.put(url, kit, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateKit'))
    );
  }

  removeKit(id: number): Observable<Kit> {
    const url = `${this.kitsUrl}/${id.toString()}`;
    return this.http.delete<Kit>(url).pipe(
      catchError(this.handleError<Kit>(`removeById: ${id}`))
    );
  }
}
