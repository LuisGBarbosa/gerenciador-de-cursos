import { Component, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-estrela',
    templateUrl: './estrela.component.html',
    styleUrls: ['./estrela.component.css']
})
export class EstrelaComponent implements OnChanges {    //Onchanges -> Quando queremos passar algum valor pra esse component enquanto ele alterado (verifica a alteração)
    
    @Input()  //-> faz com que a variável possa receber alguma informação de um component externo
    rating: number = 0;

    tamanhoEstrela!: number;

    ngOnChanges():void{
        this.tamanhoEstrela = this.rating * 74 / 5; 
    }
}
