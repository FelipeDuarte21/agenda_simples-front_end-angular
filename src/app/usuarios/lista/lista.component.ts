import { Component } from "@angular/core";
import { Usuario, UsuarioPerfilNumero } from "src/app/compartilhado/usuario/usuario.model";
import { UsuarioService } from "src/app/compartilhado/usuario/usuario.service";

@Component({
    selector: 'lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent{
    
    campos: Array<string> = ['id','nome','email','tipo'];

    usuarios: Array<Usuario>;

    paginaAtual: number = 0;
    qtdPorPagina: number = 4; 
    totalPaginas: number = 1;
    totalElementos: number = 1;

    private nome: string = null;

    constructor(
        private usuarioService: UsuarioService
    ) { }

    ngOnInit() {
        this.buscarTodos(this.paginaAtual,this.qtdPorPagina);
    }

    buscarTodos(paginaAtual:number,qtdPorPagina:number){
        this.usuarioService.buscarTodos(paginaAtual,qtdPorPagina).subscribe(
            pagina => {
                this.usuarios = this.converteArray(pagina.content);
                this.totalPaginas = pagina.totalPages;
                this.paginaAtual = paginaAtual;
                this.totalElementos = pagina.numberOfElements;
            }
        );
    }

    private converteArray(usuarios: Array<Usuario>):Array<Usuario>{
        usuarios.forEach(usuario => {
            usuario.tipo.map((t,index) => {
                usuario.tipo[index] = (parseInt(t) == UsuarioPerfilNumero.ROLE_ADMIN) ? 'Administrador': 'Usuário';
            });
        })
        return usuarios;
    }

    eventoBuscarPorNome(nome:string){
        this.nome = nome;
        if(this.nome.length == 0) this.nome == null;
        this.estadoAtual(0,this.qtdPorPagina);
    }

    eventoAlterarPagina(pagina:number){
        this.estadoAtual(pagina,this.qtdPorPagina);
    }

    eventoAlterarQtdPorPagina(quantidade:number){
        this.qtdPorPagina = quantidade;
        this.paginaAtual = 0;
        this.estadoAtual(this.paginaAtual,this.qtdPorPagina);
    }

    estadoAtual(pagina:number,qtdPorPagina:number = 0){
        if(!this.nome){
            this.buscarTodos(pagina,qtdPorPagina);
        }else{
            this.buscarPorNome(this.nome,pagina);
        }
    }

    
    buscarPorNome(nome:string, pagina:number = 0){
        this.usuarioService.buscarPorNome(nome,pagina,this.qtdPorPagina).subscribe(
            pagina => {
                this.usuarios = this.converteArray(pagina.content);
                this.totalPaginas = pagina.totalPages;
                this.paginaAtual = pagina.number;
            }
        );
    }

} 