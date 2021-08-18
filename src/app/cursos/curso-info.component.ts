import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
    templateUrl: './curso-info.component.html'
})
export class CursoInfoComponent implements OnInit{

    curso!: Curso;

    constructor(private rotaAtivada: ActivatedRoute, private cursoService: CursoService) { }

    ngOnInit(): void { 
        this.cursoService.retrieveById(+this.rotaAtivada.snapshot.paramMap.get('id')!).subscribe({
            next: curso => this.curso = curso,
            error: err => console.log('Error', err)
        });
    }

    save(): void{
        this.cursoService.save(this.curso).subscribe({
            next: curso => console.log('Salvo com sucesso', curso),
            error: err => console.log('Error', err)
        });
    }

}