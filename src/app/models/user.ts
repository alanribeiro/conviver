export class User {
  constructor(
    private id:string,
    private firstName:string,
    private lastName:string
  ) {}
  
  getId():string {
    return this.id;
  }

  getFirstName():string {
    return this.firstName;
  }

  setFirstName(firstName):void {
    this.firstName = firstName;
  }

  getLastName():string {
    return this.lastName;
  }

  setLastName(lastName):void {
    this.lastName = lastName;
  }

}