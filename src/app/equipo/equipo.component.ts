import { Component, OnInit } from '@angular/core';
import { JugadorComponent } from "../jugador/jugador.component";
import {MatDividerModule} from '@angular/material/divider';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-equipo',
    standalone: true,
    templateUrl: './equipo.component.html',
    styleUrl: './equipo.component.scss',
    imports: [JugadorComponent, MatDividerModule, CdkAccordionModule, MatExpansionModule, MatIconModule]
})
export class EquipoComponent implements OnInit {

  nombre: string = 'A';
  estatus: boolean = true;
  jugador: string = 'Carlos';


  constructor(){

  }

  ngOnInit() {
    this.nombre = 'B';
  }

  agregarJugador(){
    let jugador = 'Llanos';

    this.jugador = jugador;
  }

  actualizarEstado(event: boolean) {
    this.estatus = event;
  }
}
