import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    }
  };
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onGoToConfirm(item: any): void {
    // @ts-ignore
    this.navigationExtras.state.value = item;
    this.router.navigate(['/empleados/confirmar'], this.navigationExtras);
  }

  onGoToEdit(item: any): void {
     // @ts-ignore
    this.navigationExtras.state.value = item;
    this.router.navigate(['/empleados/editar'], this.navigationExtras);
  }

  onGoToDelete(item: any): void {alert ('Borrado');
  }

}

