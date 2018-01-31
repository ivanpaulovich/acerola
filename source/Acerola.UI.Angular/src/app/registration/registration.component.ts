import { Component, OnInit, Input } from '@angular/core';
import { Register } from '../commands/register';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register: Register = {
    pin: "",
    name: "",
    initialAmount: 500.0
  };

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  add(pin: string, name: string, initialAmount: number): void {
    let reg : Register = new Register(pin, name, initialAmount);
    this.customerService.register(reg)
      .subscribe(register => {
        this.register = register;
      });
  }

}
