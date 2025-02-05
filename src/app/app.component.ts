import { Component } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'component-library';

  handleEdit(): void {
    console.log('Edit button clicked.');
  }

  handleDelete(): void {
    console.log('Delete button clicked.');
  }

  handleSave(): void {
    console.log('Save button clicked.');
  }
}
