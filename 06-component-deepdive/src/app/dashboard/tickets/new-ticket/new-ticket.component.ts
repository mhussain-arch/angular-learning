import { Component, ViewChild, ElementRef, viewChild, output } from '@angular/core';
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
add = output<{title: string; text: string}>();  


onSubmit(title: string, text: string){
    this.add.emit({title: title, text: text});
    // ? tells typescript that the form variable will have a value at some point.
    this.form()?.nativeElement.reset();
  }

}
