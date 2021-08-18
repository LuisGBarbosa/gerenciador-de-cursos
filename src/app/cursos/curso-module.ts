import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EstrelaModule } from '../shared/component/estrela/estrela.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { CursoInfoComponent } from './curso-info.component';
import { ListaCursoComponent } from './lista-curso.component';

@NgModule({
    declarations: [
        ListaCursoComponent,
        CursoInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        EstrelaModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'cursos', 
                component: ListaCursoComponent  //ligando a rota com o component
            },
            {
                path: 'cursos/info/:id',
                component: CursoInfoComponent
            }
        ])
    ]
})
export class CursoModule{

}