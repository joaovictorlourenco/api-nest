import { UsuarioRepository } from './usuario.repository';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("usuario")
export class UsuarioController {

  //Injeção de dependência
  constructor(private usuarioRepository: UsuarioRepository){}

  @Post()
  async criarUsuario(@Body() dadosDoUsuario){
    this.usuarioRepository.salvar(dadosDoUsuario);
    return {dadosDoUsuario};

  }

  @Get() 
  async listarUsuarios(){
    return this.usuarioRepository.listar();
  }

}