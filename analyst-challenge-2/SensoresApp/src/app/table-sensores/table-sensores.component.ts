import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { LeiturasResponse } from '../services/interface/leituras-response.interface';
import{ LeituraService } from '../services/leitura.service';

@Component({
  selector: 'app-table-sensores',
  templateUrl: './table-sensores.component.html',
  styleUrls: ['./table-sensores.component.css']
})
export class TableSensoresComponent implements OnInit {

  constructor(private leituraService: LeituraService) { }

  leituras: LeiturasResponse[];
  
  ngOnInit(): void {
    this.atualizarDados();
  }

  atualizarDados(){
    this.leituraService.getLeituras()
    .pipe(
      take(1)
    )
    .subscribe(
      response => {
        this.leituras = response;
        setTimeout(() => {
          this.atualizarDados()
        },1000)
      },
      error => {
        alert(error.error.message);
      }
    );
  }  

}
