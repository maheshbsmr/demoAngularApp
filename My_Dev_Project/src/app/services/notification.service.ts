import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BehaviorSubject, config } from 'rxjs';
import { ConfirmationComponent } from '../dialogs/confirmation.component';
interface Colors {
  background: string;
}
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  colors$ = new BehaviorSubject<Colors>({ background: 'red' });
  constructor(private readonly snackBar: MatSnackBar,public dialog: MatDialog) { }

  success(message: string) {
    this.snackBar.open(message,'success',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass:['success-snackbar']
   });
  }
  error(message: string) {
    this.snackBar.open(message,'error',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass:['error-snackbar']
   });
  }
  confirmation(message:string, okCallback:()=>void, title:string,cancelCallback:()=>void){
  const dialog = this.dialog.open(ConfirmationComponent,{
    width: '250px',
    data: { message: message, title: title }
  })
  dialog.afterClosed().subscribe(result=>{
    if (result && okCallback) {
      okCallback();
    }
    if (!result && cancelCallback) {
      cancelCallback();
    }
  })
  }
}
