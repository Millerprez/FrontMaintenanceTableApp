import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { City } from '../city.model';
import { Community } from '../community.model';
import { Country } from '../country.model';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { DataServices } from '../dataServices.service';
import { Division } from '../division.model';
import { Message } from '../message.model';
import { Position } from '../position.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  cargos: Position[];
  ciudades: City[];
  paises: Country[];
  divisiones: Division[];
  comunidades: Community[] ;

  constructor(private customerService: CustomerService, private data: DataServices) { }

  customer: Customer;
  disablebtnUpdate :boolean = true;
  disablebtnSave :boolean = false;
  disablebtnSearch: boolean = false;
  cargoInput: string; // for form to save a cargo in db
  comunidadInput: string; // for form to save a comunidad in db
  divisionInput: string; // for form to save a division in db
  msjError:string;
  
  idInput: number;
  identificacion: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  correo: string;
  telefono: string;
  telefonoAlt: string;
  celular: string;
  ciudad: string = "Seleccione ciudad";
  numCiudad: number;
  cargo: string = "Seleccione cargo";
  numCargo: number;
  fechaNacimiento: string;
  genero: string = "Seleccione género";
  comunidad: string = "Seleccione comunidad";
  numComunidad:number
  nombreEmpresa: string;
  division: string = "Seleccione división";
  numDivision: number;
  pais: string = "Seleccione país";
  numPais: number;
  hobbies: string;
  dateUnsubs: string;
  dateRecord: string;

  cargosInput: string; // For modal to change the name of cargo
  ciudadesInput: string; // For modal to change the name of city
  paisesInput: string; // For modal to change the name of country
  comunidadesInput: string; // For modal to change the name of community
  divisionesInput: string; // For modal to change the name of division

  ngOnInit(): void { 
    this.loadPositionUp();
    this.loadCitiesUp();
    this.loadContriesUp();
    this.loadCommunitiesUp();
    this.loadDivisionsUp();
  } 

  loadPositionUp(){
    this.data.loadPositions().subscribe(
      (position: Position[]) => { 
        this.cargos = position
      }
    ); 
  }

  loadCitiesUp(){
    this.data.loadCities().subscribe(
      (cities: City[]) =>{
        this.ciudades = cities;
      }
    );
  }

  loadContriesUp(){
    this.data.loadCountries().subscribe(
    (countries: Country[]) => {
      this.paises = countries;
    }
    );
  }

  loadCommunitiesUp(){
    this.data.loadCommunities().subscribe(
    (communities: Community[]) => {
      this.comunidades = communities;
    }
    );
  }

  loadDivisionsUp(){
    this.data.loadDivisions().subscribe(
      (divisions: Division[]) => {
        this.divisiones = divisions;
      }
      );
  }

  isCustomerFilled():boolean{
    if(this.customer.idCustomer == '' || this.customer.idCustomer == undefined){
      this.msjError = 'Debe ingresar el ID del cliente';
      return false;
    } 
    if(this.customer.name == '' || this.customer.name == undefined){
      this.msjError = 'Debe ingresar los Nombres del cliente';
      return false;
    }
    if(this.customer.lastName == '' || this.customer.lastName == undefined){
      this.msjError = 'Debe ingresar los Apellido del cliente';
      return false;
    }
    if(this.customer.address == '' || this.customer.address == undefined){
      this.msjError = 'Debe ingresar la Dirección del cliente';
      return false;
    }
    if(this.customer.email == '' || this.customer.email == undefined){
      this.msjError = 'Debe ingresar el correo electrónico del cliente';
      return false;
    }
    if(this.customer.phone == '' || this.customer.phone == undefined){
      this.msjError = 'Debe ingresar el teléfono del cliente';
      return false;
    }
    if(this.customer.cel == '' || this.customer.cel == undefined){
      this.msjError = 'Debe ingresar el celular del cliente';
      return false;
    }
    if(this.customer.position.toLowerCase() == 'seleccione cargo'){
      this.msjError = 'Debe seleccionar el Cargo del cliente';
      return false;
    }
    if(this.customer.city.toLowerCase() == 'seleccione ciudad' ){
      this.msjError = 'Debe seleccionar la ciudad del cliente';
      return false;
    }
    if(this.customer.dateBirth == undefined){
      this.msjError = 'Debe ingresar la fecha de nacimiento del cliente';
      return false;
    } 
    if(this.customer.gender.toLowerCase() == 'seleccione género'){
      console.log(this.customer.gender);
      this.msjError = 'Debe seleccionar el género del cliente';
      return false;
    }
    if(this.customer.community.toLowerCase() == 'seleccione comunidad'){
      this.msjError = 'Debe la comunidad del cliente';
      return false;
    }
    if(this.customer.company == '' || this.customer.company == undefined){
      this.msjError = 'Debe seleccionar el nombre de la empresa del cliente';
      return false;
    }
    if(this.customer.division == '' || this.customer.division == undefined){
      this.msjError = 'Debe seleccionar la división del cliente';
      return false;
    }
    if(this.customer.country.toLowerCase() == 'seleccione país'){
      this.msjError = 'Debe seleccionar el país del cliente';
      return false;
    }
    if(this.customer.hobbies == '' || this.customer.hobbies == undefined){
      this.msjError = 'Debe ingresar los hobbies del cliente';
      return false;
    }
      
    return true;  
  }

  verifyCustomerData(cause: string):boolean{
    switch(cause){
      case 'search':
        this.msjError = 'El valor ingresado no es un número válido, verifique e intente nuevamente'
        return Number.isInteger(this.idInput);
      case 'save':
        return (this.isCustomerFilled());
    }

    return false;
  }

  fillForm(cus: Customer){
    this.identificacion = cus.idCustomer;
    this.nombres = cus.name;
    this.apellidos = cus.lastName;
    this.direccion = cus.address;
    this.correo = cus.email;
    this.telefono = cus.phone;
    this.telefonoAlt= cus.phoneAddit;
    this.celular = cus.cel;
    this.ciudad = cus.city;
    this.cargo = cus.position;
    this.fechaNacimiento = cus.dateBirth;
    this.genero = cus.gender;
    this.comunidad = cus.community;
    this.nombreEmpresa = cus.company;
    this.division = cus.division;
    this.pais = cus.country;
    this.hobbies = cus.hobbies;
    this.dateUnsubs = cus.dateUnsubs;
    this.dateRecord = cus.dateRecord;
  }

  cleanForm(){
      this.identificacion = '';
      this.nombres = '';
      this.apellidos = '';
      this.direccion = '';
      this.correo = '';
      this.telefono = '';
      this.telefonoAlt= '';
      this.celular = '';
      this.ciudad = '';
      this.cargo = '';
      this.fechaNacimiento = '';
      this.genero = '';
      this.comunidad = '';
      this.nombreEmpresa = '';
      this.division = '';
      this.pais = '';
      this.hobbies = '';
  }

  savePosition(){
    this.cargos.push(new Position(1,this.cargoInput));
    this.data.savePosition(this.cargos);
  } 

  saveCommunity(){
    this.comunidades.push(new Community(this.comunidadInput));
    this.data.saveCommunity(this.comunidades);
  } 
  
  saveDivision(){
    console.log(this.divisionInput);
    this.divisiones.push(new Division(this.divisionInput));
    this.data.saveDivision(this.divisiones);
  } 

  insertCargo(index: number){
    this.cargo = this.cargos[index].namePosition;
    this.numCargo = index;
  }

  insertCiudad(index: number){
    this.ciudad = this.ciudades[index].municipio;
    this.numCiudad = index;
  }

  insertPais(index: number){
    this.pais = this.paises[index].name;
    this.numPais = index;
  }

  insertComunidad(index: number){
    this.comunidad = this.comunidades[index].name;
    this.numComunidad = index;
  }

  insertDivision(index: number){
    this.division = this.divisiones[index].name;
    this.numDivision = index;
  }

  getCustomer(){
    if(!this.verifyCustomerData('search')){
      return alert('Por favor ingrese un valor válido para buscar');
    } else {
    console.log(this.customer);
    this.customerService.getCustomerById(Number(this.idInput)).subscribe(      
      (customer: Customer) => {
        this.customer = customer;
        if(this.customer == null){
          return alert('Ups, no se pudo encontrar el cliente, verifica el código');  
        } else {
          this.disablebtnUpdate = false;
          this.disablebtnSave = true;
          this.fillForm(this.customer);
        }
      }
    );
   
     
  }
}

  saveCustomer(){
      this.customer = new Customer(
      this.idInput,
      this.identificacion,
      this.nombres,
      this.apellidos,
      this.direccion,
      this.correo,
      this.telefono,
      this.telefonoAlt,
      this.celular,
      this.numCargo,
      this.cargo,
      this.numCiudad,
      this.ciudad,
      this.fechaNacimiento,
      this.genero,
      this.numComunidad,
      this.comunidad,
      this.nombreEmpresa,
      this.numDivision,
      this.division,
      this.numPais,
      this.pais,
      this.hobbies,
      this.dateUnsubs, 
      this.dateRecord
    );
    if(!this.verifyCustomerData('save')){
      return alert(this.msjError);
    }
    this.customer.id = 0; // put a number not valid to autogerate a number
    this.customerService.createCustomer(this.customer).subscribe(
    (msj: any) => {
      let msjSave: Message = msj as Message;
      alert(msjSave.name);
    }
    );
  }
  
  updateCustomer(){
    this.customer = new Customer(
      this.idInput,
      this.identificacion,
      this.nombres,
      this.apellidos,
      this.direccion,
      this.correo,
      this.telefono,
      this.telefonoAlt,
      this.celular,
      this.numCargo,
      this.cargo,
      this.numCiudad,
      this.ciudad,
      this.fechaNacimiento,
      this.genero,
      this.numComunidad,
      this.comunidad,
      this.nombreEmpresa,
      this.numDivision,
      this.division,
      this.numPais,
      this.pais,
      this.hobbies,
      this.dateUnsubs,
      this.dateRecord
    );

    console.log(this.customer);
    if(!this.verifyCustomerData('save')){
      return alert(this.msjError);
    }
    
    this.customerService.updateCustomer(this.customer).subscribe(
    (msj: any) => {
      let msjSave: Message = msj as Message;
      this.cleanForm();
      alert(msjSave.name);
    }
    );
  }
}


