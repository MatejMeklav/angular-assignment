import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  duration = 3000;
  horizontalPosition:
    | 'left'
    | 'start'
    | 'end'
    | 'right'
    | 'center'
    | undefined = 'right';
  verticalPosition: 'bottom' | 'top' | undefined = 'bottom';

  constructor(private snackBar: MatSnackBar) {}

  apiErrorSnackbar(
    message = 'Something went wrong, please try again later.',
    duration = this.duration,
    horizontalPosition = this.horizontalPosition,
    verticalPosition = this.verticalPosition
  ) {
    this.snackBar.open(message, 'Close', {
      duration,
      horizontalPosition,
      verticalPosition,
    });
  }
}
