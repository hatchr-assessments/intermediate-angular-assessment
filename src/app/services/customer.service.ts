import { Injectable } from '@angular/core';

const apiUrl = "http://localhost:3000/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  // TODO: Add methods to interface with the customer API

  getAllCustomers() {
    // TODO: Implement method to get all customers
  }
  
  deleteCustomer(id) {
    // TODO: Implement method to delete a customer by ID
  }
  
  addCustomer(data) {
    // TODO: Implement method to add a new customer
  }
  

}
