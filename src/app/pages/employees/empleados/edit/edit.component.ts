import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    // @ts-ignore
    empleado: empleado = null;

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    }
  };

  constructor( private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    // @ts-ignore
    this.empleado = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

  onGoToEdit(): void {
    // @ts-ignore
   this.navigationExtras.state.value = this.empleado;
   this.router.navigate(['confirm'], this.navigationExtras);
 }

}
