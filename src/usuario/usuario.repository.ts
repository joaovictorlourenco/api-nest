import { Injectable } from "@nestjs/common";

// No NestJS, um provider é basicamente qualquer classe que 
// esteja decorada com o decorator @Injectable

@Injectable()
export class UsuarioRepository{

    private usuarios = []

    async salvar(usuario){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }

}