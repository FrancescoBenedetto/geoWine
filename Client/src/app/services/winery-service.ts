import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Winery } from '../model/winery';

@Injectable()
export class WineryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private wineriesUrl = ''; //'api/wineries';  // URL to web api
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: Http) { }

  getTopTenWineries(): Promise<Winery[]> {
    let topTenWineriesUrl = 'winery/search/getTopTenWineries';
    return this.http.get(this.baseUrl + topTenWineriesUrl) //
               .toPromise()
               .then(response => response.json() as Winery[])
               .catch(console.log);
             }

  getWineriesIn(latLngBounds): Promise<Winery[]> {
    let wineriesInUrl = 'winery/search/getWineriesIn';
    let params = new URLSearchParams();
    params.set('minLat', latLngBounds.getSouthWest().lat());
    params.set('maxLat', latLngBounds.getNorthEast().lat());
    params.set('minLng', latLngBounds.getSouthWest().lng());
    params.set('maxLng', latLngBounds.getNorthEast().lng())
    return this.http.get(this.baseUrl + wineriesInUrl, {search: params})
      .toPromise()
      .then(response => response.json() as Winery[])
      .catch(console.log);
  }

/*
  getWineries(): Promise<Winery[]> {
    return this.http.get(this.wineriesUrl)
               .toPromise()
               .then(response => response.json().data as Winery[])
               .catch(this.handleError);
  }


  getWinery(id: number): Promise<Winery> {
    const url = `${this.wineriesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Winery)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.wineriesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Winery> {
    return this.http
      .post(this.wineriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Winery)
      .catch(this.handleError);
  }

  update(winery: Winery): Promise<Winery> {
    const url = `${this.wineriesUrl}/${winery.id}`;
    return this.http
      .put(url, JSON.stringify(winery), {headers: this.headers})
      .toPromise()
      .then(() => winery)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
*/
}
