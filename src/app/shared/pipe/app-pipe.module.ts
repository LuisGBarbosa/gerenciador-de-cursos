import { NgModule } from '@angular/core';
import { SubstituirPipe } from './substituir.pipe';

@NgModule({
    declarations: [
        SubstituirPipe
    ],
    exports: [
        SubstituirPipe
    ]
})

export class AppPipeModule{

}