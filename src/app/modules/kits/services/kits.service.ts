import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, from} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import {Kit} from '../types/kit';

interface ItemsResponseType {
  Items: object[];
}

interface ItemResponseType {
  Item: object;
}

const attributesFirstLetterTo = (command: 'lower' | 'upper') => <T>(item: object) => {
  const newItem = {};
  const caseCommand = command === 'lower' ? 'toLowerCase' : 'toUpperCase';
  Object.keys(item).forEach((key: string) => {
    const lowerKey = key.charAt(0)[caseCommand]() + key.slice(1);
    newItem[lowerKey] = item[key];
  });
  return newItem as T;
};

const attributesFirstLetterToLower = attributesFirstLetterTo('lower');
const attributesFirstLetterToUpper = attributesFirstLetterTo('upper');

@Injectable({
  providedIn: 'root'
})
export class KitsService {
  constructor(private http: HttpClient) { }

  private kitsUrl = 'https://80fo5exz60.execute-api.eu-central-1.amazonaws.com/prod/kits';

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
    return this.http.get<ItemsResponseType>(this.kitsUrl)
      .pipe(
        map((response: ItemsResponseType): Kit[] =>
          response.Items.map<Kit>(attributesFirstLetterToLower)
        ),
        catchError(this.handleError<Kit[]>('getKits', []))
      );
  }

  // with Authorization
  getKitById(article: string): Observable<any> {
    const url = `${this.kitsUrl}/${article}`;

    return from(Auth.currentSession()).pipe(
      switchMap((tokens: any) => this.http.get<ItemResponseType>(url, {
        headers: {
          Authorization: tokens.idToken.jwtToken
        }
      })),
      map((response: ItemResponseType): Kit =>
        attributesFirstLetterToLower<Kit>(response.Item)
      ),
      catchError(this.handleError<Kit>(`getKitById: ${article}`))
    );
  }

  addKit(kit: Kit): any {
    return this.http.post<Kit>(this.kitsUrl, attributesFirstLetterToUpper(kit), this.httpOptions).pipe(
      catchError(this.handleError<Kit>('addKit'))
    );
  }

  updateKit(kit: Kit): Observable<any> {
    return this.addKit(kit);
  }

  removeKit(article: string): Observable<Kit> {
    const url = `${this.kitsUrl}/${article}`;
    return this.http.delete<Kit>(url).pipe(
      catchError(this.handleError<Kit>(`removeById: ${article}`))
    );
  }
}
