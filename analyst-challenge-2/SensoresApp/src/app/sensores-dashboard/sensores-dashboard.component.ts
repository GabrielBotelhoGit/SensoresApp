import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { LeiturasResponse } from '../services/interface/leituras-response.interface';
import { LeiturasTratadas } from '../services/classes/leituras-tratadas.class';
import{ LeituraService } from '../services/leitura.service';

@Component({
  selector: 'app-sensores-dashboard',
  templateUrl: './sensores-dashboard.component.html',
  styleUrls: ['./sensores-dashboard.component.css']
})
export class SensoresDashboardComponent implements OnInit {

  constructor(private leituraService: LeituraService) { }

  leiturasProcessadas: LeiturasTratadas;
  dadosGrafico: any[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Nome sensor';
  showYAxisLabel = true;
  yAxisLabel = 'Valor registrado'; 

  ngOnInit(): void {
    //this.atualizarDados();
    /*let teste = [{"timestamp":1613498699,"data":"2021-02-16 15:04","tag":"brasil.sudente.sensor01","valor":"500","status":"Processado"},{"timestamp":1613498699,"data":"2021-02-16 15:04","tag":"brasil.sudente.sensor01","valor":"500","status":"Processado"},{"timestamp":1613590206,"data":"2021-02-17 16:30","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590364,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590371,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590372,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590372,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590373,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590373,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590374,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590374,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590374,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590375,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590377,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590378,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590378,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590378,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"},{"timestamp":1613590379,"data":"2021-02-17 16:32","tag":"brasil.sudeste.sensor01","valor":"Teste","status":"Erro"}];
    this.tratarDados(teste);*/
    this.atualizarDados();
    this.atualizarDadosGrafico();
  }

  atualizarDados(){
    this.leituraService.getLeituras()
    .pipe(
      take(1)
    )
    .subscribe(
      response => this.tratarDados(response),
      error => {
        alert(error.error.message);
      }
    );
  }

  atualizarDadosGrafico(){
    this.leituraService.getLeiturasGrafico()
    .pipe(
      take(1)
    )
    .subscribe(
      response => this.tratarDadosGrafico(response),
      error => {
        alert(error.error.message);
      }
    );
  }

  tratarDados(leituras: LeiturasResponse[]){
    let leiturasProcessadas: LeiturasTratadas = new LeiturasTratadas();           
    leiturasProcessadas.pais = [];    
    for(let leitura of leituras){
      let pais = leitura.tag.split(".")[0],
          regiao = leitura.tag.split(".")[1],
          sensor = leitura.tag.split(".")[2];

      let paisCadastrado = leiturasProcessadas.pais.find((el) => el.nome == pais);
      if(!paisCadastrado){
        leiturasProcessadas.pais.push({nome: pais, regiao:[]});
        paisCadastrado = leiturasProcessadas.pais.find((el) => el.nome == pais);
      }      
      let regiaoCadastrada = paisCadastrado.regiao.find((el) => el.nome == regiao);
      if(!regiaoCadastrada){               
        paisCadastrado.regiao.push({nome:regiao, sensor:[], incidencia:0});
        regiaoCadastrada = paisCadastrado.regiao.find((el) => el.nome == regiao);
      }      
      let sensorCadastrado = regiaoCadastrada.sensor.find((el) => el.nome == sensor);
      if(sensorCadastrado){
        sensorCadastrado.incidencia++;
        regiaoCadastrada.incidencia++;
      }
      else{
        regiaoCadastrada.sensor.push({nome:sensor, incidencia:1});
        regiaoCadastrada.incidencia++;
      }   
    }
    this.leiturasProcessadas = leiturasProcessadas;

    setTimeout(() => {
      this.atualizarDados()
    },1000)
  }

  tratarDadosGrafico(leituras: LeiturasResponse[]){
    let valoresGrafico: any[] = [];           
    for(let leitura of leituras){
      valoresGrafico.push({name:leitura.tag, value: Number(leitura.valor)});
    }
    this.dadosGrafico = valoresGrafico;

    setTimeout(() => {
      this.atualizarDadosGrafico()
    },1000)
  }
}
