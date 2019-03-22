import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface PeriodicElement
{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService
{
  url = 'https://hn.algolia.com/api/v1/search?query=';

  constructor(private http: HttpClient)
  {
  }

  // Search service to find data by calling endpoint and passing search item, page number and records per page
  findSearchData(item: string, page:number, perPage: number): Observable<any>
  {
    return this.http.get(this.url + item + '&page=' + page + '&hitsPerPage=' + perPage + '&restrictSearchableAttributes=title');
  }
}
