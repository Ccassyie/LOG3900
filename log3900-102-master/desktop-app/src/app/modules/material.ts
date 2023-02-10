import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatInputModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSliderModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatInputModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatSliderModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
})
export class MaterialModule {}
