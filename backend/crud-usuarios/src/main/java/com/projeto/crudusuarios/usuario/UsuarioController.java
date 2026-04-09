package com.projeto.crudusuarios.usuario;

import com.seuprojeto.api.UsuariosApi;
import com.seuprojeto.model.Usuario;
import com.seuprojeto.model.UsuarioRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UsuarioController implements UsuariosApi {

    private final UsuarioService service;

    /**
     * GET /usuarios : Lista todos os usuários
     *
     * @return Lista de usuários (status code 200)
     */
    @Override
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        return ResponseEntity.ok(service.listar());
    }

    /**
     * POST /usuarios : Cria um novo usuário
     *
     * @param request (required)
     * @return Usuário criado (status code 201)
     */
    @Override
    public ResponseEntity<Usuario> criarUsuario(UsuarioRequest request) {
        return ResponseEntity.status(201).body(service.criar(request));
    }

    /**
     * GET /usuarios/{id} : Busca usuário por ID
     *
     * @param id (required)
     * @return Usuário encontrado (status code 200)
     * or Usuário não encontrado (status code 404)
     */
    @Override
    public ResponseEntity<Usuario> buscarUsuarioPorId(Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    /**
     * PUT /usuarios/{id} : Atualiza um usuário
     *
     * @param id             (required)
     * @param request (required)
     * @return Usuário atualizado (status code 200)
     */
    @Override
    public ResponseEntity<Usuario> atualizarUsuario(Long id, UsuarioRequest request) {
        return ResponseEntity.ok(service.atualizar(id, request));
    }

    /**
     * DELETE /usuarios/{id} : Remove um usuário
     *
     * @param id (required)
     * @return Usuário deletado com sucesso (status code 204)
     */
    @Override
    public ResponseEntity<Void> deletarUsuario(Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
