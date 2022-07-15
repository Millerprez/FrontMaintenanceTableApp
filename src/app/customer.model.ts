export class Customer {
    id: number = 0;
    idCustomer: string = '';
    name: string = '';
    lastName: string = '';
    address: string = '';
    email: string = '';
    phone: string = '';
    phoneAddit: string = '';
    cel: string = '';
    nmPosition: number = 0;
    position: string = '';
    nmCity: number = 0;
    city: string = '';
    dateBirth: string = '';
    gender: string = '';
    nmCommunity: number = 0;
    community: string = '';
    company: string = '';
    nmDivision: number = 0;
    division: string = '';
    nmCountry: number = 0;
    country: string = '';
    hobbies: string = '';
    dateUnsubs: string = '';
    dateRecord: string = '';
    
    constructor(
        id: number,
        idCustomer: string,
        name: string,
        lastName: string,
        address: string,
        email: string,
        phone: string,
        phoneAddit: string,
        cel: string,
        nmPosition:number,
        position:string,
        nmCity: number,
        city: string,
        dateBirth: string,
        gender: string,
        nmCommunity: number,
        community: string,
        company: string,
        nmDivision: number,
        division: string,
        nmCountry: number,
        country: string,
        hobbies: string,
        dateUnsubs: string,
        dateRecord: string
    ){
        this.id = id;
        this.idCustomer = idCustomer;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.phoneAddit = phoneAddit;
        this.cel = cel;
        this.nmPosition = nmPosition;
        this.position = position;
        this.nmCity = nmCity;
        this.city = city;
        this.dateBirth = dateBirth;
        this.gender = gender;
        this.nmCommunity= nmCommunity;
        this.community = community;
        this.company = company;
        this.nmDivision= nmDivision;
        this.division = division;
        this.nmCountry= nmCountry;
        this.country = country;
        this.hobbies = hobbies;
        this.dateUnsubs = dateUnsubs;
        this.dateRecord = dateRecord;
    }
}