import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {

  number = 0;
  text = "hello World";
  date = new Date;
  pessoa = {
    nome: 'Ivonaldo',
    idade: 26,
    profissao: 'Programador',
  }
  constructor(private upperCasePipe: UpperCasePipe) {}
   


  ngOnInit(): void {
   this.text = this.upperCasePipe.transform(this.text);
  }

  mudaValor(){
    this.text = 'Novo texto';
  }

}
