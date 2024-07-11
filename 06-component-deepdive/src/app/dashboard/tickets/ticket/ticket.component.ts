import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal<boolean>(false);
  close = output();

  onToggleDetails(){
    // this.detailsVisible.set(!this.detailsVisible());
    // Another way of updating a signal
    // In the parameter it takes the current value and we return the value we want to set
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}
