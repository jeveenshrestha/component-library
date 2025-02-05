import { Component, model } from '@angular/core';
import { CardComponent } from "./shared/components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  handleDelete(): void {
    console.log('Delete button clicked.');
  }

  handleSave(): void {
    console.log('Save button clicked.');
  }
}
