import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaralunos',
  templateUrl: './listaralunos.component.html',
  styleUrls: ['./listaralunos.component.css']
})
export class ListaralunosComponent implements OnInit {

  listaAlunos: any[] = [
    { id: 1, nome: 'Andreas Meyer Engel', ru: 3366763, curso: 'ADS', nascimento: '17/12/1999' },
    { id: 2, nome: 'Giordana Silva', ru: 1111111, curso: 'Direito', nascimento: '10/02/1999' },
    { id: 3, nome: 'Hiago Siqueira', ru: 2222222, curso: 'Sistemas da Informação', nascimento: '19/12/2000' },
    { id: 4, nome: 'Patryk Pauleto', ru: 3333333, curso: 'ADS', nascimento: '10/06/1998' },
    { id: 5, nome: 'Douglas Barb', ru: 4444444, curso: 'Marketing', nascimento: '20/07/1999' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
