import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-register-account',
  templateUrl: './co-register-account.component.html',
  styleUrls: ['./co-register-account.component.scss']
})
export class CoRegisterAccountComponent {

  @Output() validate:EventEmitter<any> = new EventEmitter();

  email:string;
  password:string;
  confirmPassword:string;
  errorFeedbackMessage:string;

  constructor() {}

  setEmail(value) {
    this.email = value;
    this.validateSection();
  }

  setPassword(value) {
    this.password = value;
    this.validateSection();
  }

  setConfirmPassword(value) {
    this.confirmPassword = value;
    this.validateSection();
  }

  validateSection() {
    let data = {
      validate: false,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    if(this.email == "" || this.email == undefined || this.password == "" || this.password == undefined || this.confirmPassword == "" || this.confirmPassword == undefined || (this.confirmPassword !== undefined && this.confirmPassword !== this.password)) {
      this.validate.emit(data);
      this.setErrorFeedbackMessage();
      return;
    }

    data.validate = true;
    this.validate.emit(data);
    this.setErrorFeedbackMessage();
  }

  setErrorFeedbackMessage() {
    if(this.email == "") {
      this.errorFeedbackMessage = "O e-mail inserido é inválido";
    }

    if(this.password == "") {
      this.errorFeedbackMessage = "A senha inserida é muito fraca";
    }

    if(this.confirmPassword !== undefined && this.confirmPassword !== this.password) {
      this.errorFeedbackMessage = "As senhas não correspondem";
    }

    if(this.email == "" || this.password == "" || this.confirmPassword == "") {
      this.errorFeedbackMessage = "Todos os campos devem ser preenchidos";
    }
  }

}
