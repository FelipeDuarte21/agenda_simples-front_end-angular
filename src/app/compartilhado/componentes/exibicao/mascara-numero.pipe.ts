import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mascaraNumero'
})
export class MascaraNumeroPipe implements PipeTransform{

    transform(dado:string, campo: string) {

        if(campo === "telefone" || campo === "celular"){
            let numero = dado;

            let ultimoIndice = 0;

            if(campo === "telefone"){
                ultimoIndice = 5;
            }else{
                ultimoIndice = 6;
            }

            let numeroMascarado = "(";

            for(let i=0; i < numero.length; i++){
                if(i == 1){
                    numeroMascarado += numero[i] + ") ";
                }else if(i == ultimoIndice){
                    numeroMascarado += numero[i] + "-";
                }else{
                    numeroMascarado += numero[i];
                }
            }

            return numeroMascarado;

        }

        return dado;

    }

}