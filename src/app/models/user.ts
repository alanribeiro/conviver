export class User {
  constructor(
    private id:string,
    private firstName:string,
    private lastName:string,
    private email:string,
    private password:string,
    private age:number,
    private genre:string,
    private personality:Array<string>,
    private photo:string,
    private description:string
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

  getAge():number {
    return this.age;
  }

  setAge(age:number):void {
    this.age = age;
  }

  getGenre():string {
    return this.genre;
  }

  setGenre(genre:string):void {
    this.genre = genre;
  }

  getPersonality():Array<string> {
    return this.personality;
  }

  setPersonality(personality:Array<string>):void {
    this.personality = personality;
  }

  getPhoto():string {
    return this.photo;
  }

  setPhoto(photo:string):void {
    this.photo = photo;
  }

  getDescription():string {
    return this.description;
  }

  setDescription(description:string):void {
    this.description = description;
  }
}