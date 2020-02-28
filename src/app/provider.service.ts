import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from './model/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }
  selectedProvider:Provider;

  setSelectedProvider(provider:Provider){
    // console.log(provider);
    this.selectedProvider = provider;
  }

  getSelectedProvider():Provider{
    return this.selectedProvider;
  }
  dataUrl = 'assets/data.json'
  getData():Observable<Provider[]>{
    return this.http.get<Provider[]>(this.dataUrl);
  }
}
