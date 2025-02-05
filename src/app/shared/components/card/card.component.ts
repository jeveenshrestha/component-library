import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    ButtonComponent,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  contentOfCard: string = `This is to demonstrate the look and feel of the default buttons with their use cases. 
    The edit button is a default button with an icon on the left side of the button. When the edit button is clicked, 
    the user can edit the content of this card and save it clicking the save button which is also a default button but it does not have any icon. On clicking the save button, the user can see saving button briefly which is a disabled button before the edit button appears again.`;
  isEditing: boolean = false;
  isSaving: boolean = false;

  saveChanges(): void {
    this.isSaving = true;
    setTimeout(() => {
      this.isEditing = false;
      this.isSaving = false;
    }, 2000);
  }

  toggleEdit(): void {
    if (this.isEditing) {
      this.saveChanges();
    } else {
      this.isEditing = true;
    }
  }
}
