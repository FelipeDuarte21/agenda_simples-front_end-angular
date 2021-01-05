import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'primeiraMaiuscula'
})
export class PrimeiraMaiusculaPipe implements PipeTransform{


    transform(palavra: string): string {

        let primeira = palavra.substr(0,1);
        primeira = primeira.toUpperCase();

        palavra = primeira + palavra.substr(1,palavra.length-1);

        return palavra;
    }

}