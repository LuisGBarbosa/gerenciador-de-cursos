import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
    templateUrl: './lista-curso.component.html',
    
})
export class ListaCursoComponent implements OnInit {   //OnInit&ngOnInit, servem para executar uma operação na inicialização

    cursosFiltrados: Curso[] = [];

    _cursos: Curso[] = [];

    _filtrarPor!: string;

    //injetando a classe CursoService
    constructor(private cursoService: CursoService){
        
    }

    ngOnInit():void{
        //executando a injeção
       this.retrieveAll();
    }

    retrieveAll(): void{
         this.cursoService.retrieveAll().subscribe({
             next: cursos => {
                 this._cursos = cursos;
                 this.cursosFiltrados = this._cursos;
             },
             error: err => console.log('Error', err)
         })
    }

    deleteById(cursoId: number): void{
        this.cursoService.deleteById(cursoId).subscribe({
            next:() => {
                console.log('Deletado com Sucesso!');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
    

    set pesquisar(value: string) { //setando valor da classe "pesquisar" no input
        this._filtrarPor = value;
        this.cursosFiltrados = this._cursos.filter((curso: Curso)=> curso.name.toLowerCase().indexOf(this._filtrarPor.toLowerCase()) > -1);
    }

    get pesquisar(){ //retornando valor
        return this._filtrarPor;
    }

}