import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
// @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // A signal related feature
  onSubmit(title: string, text: string){
    console.log(title);
    // ? tells typescript that the form variable will have a value at some point.
    this.form()?.nativeElement.reset();
  }

}
