import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'substituir'
})
export class SubstituirPipe implements PipeTransform{

    transform(valor: string, caracter: string, valorParaSubstituir: string){
        return valor.replace(caracter, valorParaSubstituir); 
    }

}