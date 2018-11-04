export class User {
  constructor(
    private id:string,
    private firstName:string,
    private lastName:string,
    private email:string,
    private password:string
  ) {}
  
  getId():string {
    return this.id;
  }

  getFirstName():string {
    return this.firstName;
  }

  setFirstName(firstName:string):void {
    this.firstName = firstName;
  }

  getLastName():string {
    return this.lastName;
  }

  setLastName(lastName:string):void {
    this.lastName = lastName;
  }

  getEmail():string {
    return this.email;
  }

  setEmail(email:string):void {
    this.email = email;
  }

  getPassword():string {
    return this.password;
  }

  setPassword(password:string):void {
    this.password = password;
  }
}