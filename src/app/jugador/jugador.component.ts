import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.scss'
})
export class JugadorComponent implements OnInit {
  @Input('nombre')
  jugador: string = 'Sergio';

  @Input()
  equipo: string = 'Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  activarJugador() {
    this.estado.emit(true);
  }
}
