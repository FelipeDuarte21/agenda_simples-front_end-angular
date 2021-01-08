export interface PaginaUsuario{
    content: Array<Usuario>;
    pageable: Pageable,
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    sort: Sort,
    number: number,
    numberOfElements: number,
    first: boolean,
    empty: boolean
}

interface Pageable{
    sort: Sort,
    offset: number,
    pageSize: number,
    pageNumber: number,
    paged: boolean,
    unpaged: boolean
}

interface Sort{
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
}

export interface UsuarioToken{
    id: number,
    nome: string,
    email: string,
    perfil: Array<string>
}

export interface Usuario{
    id: number,
    nome: string,
    email: string,
    tipo: Array<string>
}

export enum UsuarioPerfil{
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_USER = 'ROLE_USER'
}

export enum UsuarioPerfilNumero{
    ROLE_ADMIN = 0,
    ROLE_USER = 1
}