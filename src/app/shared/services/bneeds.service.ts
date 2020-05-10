import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessNeed, FbCreateResponse } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class BNeedService {
  constructor(private http: HttpClient) {}

  create(bneed: BusinessNeed): Observable<BusinessNeed> {
    return this.http.post(`${environment.fbDbUrl}/needs.json`, bneed).pipe(
      map((response: FbCreateResponse) => {
        return {
          ...bneed,
          id: response.name,
        };
      })
    );
  }

  //   getall(): Observable<BusinessNeed[]> {
  //     return this.http.get(`${environment.fbDbUrl}/posts.json`).pipe(
  //       map((response: { [key: string]: any }) => {
  //         return Object.keys(response).map((key) => ({
  //           ...response[key],
  //           id: key,
  //           date: new Date(response[key].date),
  //         }));
  //       })
  //     );
  //   }

  //   getById(id: string): Observable<BusinessNeed> {
  //     return this.http
  //       .get<BusinessNeed>(`${environment.fbDbUrl}/posts/${id}.json`)
  //       .pipe(
  //         map((post: BusinessNeed) => {
  //           return {
  //             ...post,
  //             id,
  //             date: new Date(post.date),
  //           };
  //         })
  //       );
  //   }

  //   remove(id: string): Observable<void> {
  //     return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`);
  //   }

  //   update(post: BusinessNeed): Observable<BusinessNeed> {
  //     return this.http.patch<BusinessNeed>(
  //       `${environment.fbDbUrl}/posts/${post.id}/.json`,
  //       post
  //     );
  //   }
}
