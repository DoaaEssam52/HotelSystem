import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule, ChangePasswordComponent],
})
export class SharedModule {}
