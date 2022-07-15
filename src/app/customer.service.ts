import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { DataServices } from './dataServices.service';
import { Position } from './position.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = 'http://localhost:8080/ApiRest/api/customers';

  constructor(private http: HttpClient) { }

  getCustomerById(id: number):Observable<Customer>{
    return this.http.get<Customer>(this.url+'/'+id)
  }

  createCustomer(customer: Customer):Observable<string>{
      return this.http.post<string>(this.url+'/save', customer)
  }

  updateCustomer(customer: Customer):Observable<string>{
    return this.http.put<string>(this.url+'/update', customer)
  }
}
