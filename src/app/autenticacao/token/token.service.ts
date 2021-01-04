import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class TokenService{

    private NOME_TOKEN = "token";

    constructor(){}

    setToken(token: string){
        window.localStorage.setItem(this.NOME_TOKEN, token);
    }

    getToken():string{
        return window.localStorage.getItem(this.NOME_TOKEN);
    }

    excluirToken(){
        return window.localStorage.removeItem(this.NOME_TOKEN);
    }

    temToken():boolean{
        return !!this.getToken();
    }

}