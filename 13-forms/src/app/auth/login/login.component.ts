import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmitForm(formData: NgForm){
    if (formData.form.invalid){
      return;
    }
    const enteredEmail = formData.form.value.email;
    const eneteredPassword = formData.form.value.password;
    console.log(enteredEmail, eneteredPassword);
    console.log(formData.form.status);
  }
}
