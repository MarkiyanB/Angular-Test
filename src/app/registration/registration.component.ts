import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
      @Input () userItem: {email: string, password: string};
      users: [{ email: string, password: string }] = [{email: 'markiyan.bulich@gmail.ua', password: '12345'}];

      public anEmail = '';
      public anPassword = '';

      addUser() {
        this.users.push({
          email: this.anEmail,
          password: this.anPassword
        });
        this.anEmail = '';
        this.anPassword = '';
      }
}
