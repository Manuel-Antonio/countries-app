import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PixabayService {
  constructor(private http: HttpClient) {}

  getImagenes(
    query: string,
    cantPorPage: number,
    page: number
  ): Observable<any> {
    const key = '42861705-e6cf5068978e23d1da0c1fd57';
    const url = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(
      query
    )}&per_page=${cantPorPage}&page=${page}&orientation=horizontal&image_type=photo`;

    return this.http.get(url).pipe(
      map((response: any) => {
        if (response.hits && response.hits.length > 0) {
          return response.hits[0].webformatURL;
        } else {
          return null;
        }
      })
    );
  }
}
