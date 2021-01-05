import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'desmascaraNumero'
})
export class DesmascaraNumeroPipe implements PipeTransform{

    transform(numero: string):string {

        let partes = ['(',')','-',' '];

        partes.forEach(parte => {
            numero = numero.replace(parte,"");
        });

        return numero
    }

}