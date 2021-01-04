export interface Usuario{
    id: number,
    nome: string,
    email: string,
    perfil: Array<string>
}

export enum UsuarioPerfil{
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_USER = 'ROLE_USER'
}

export enum UsuarioPerfilNumero{
    ROLE_ADMIN = 0,
    ROLE_USER = 1
}