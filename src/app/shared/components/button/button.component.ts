import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'default' | 'negative' = 'default'; // variant
  @Input() icon?: string; // optional icon
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  // button click handler
  onClickHandle(): void {
    if (!this.disabled) {
      this.buttonClick.emit(); // only if the button is not disabled, emit the event
    }
  }
}
