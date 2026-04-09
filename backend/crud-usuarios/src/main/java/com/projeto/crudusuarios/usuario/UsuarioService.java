package com.projeto.crudusuarios.usuario;

import com.projeto.crudusuarios.exception.ApiException;
import com.seuprojeto.model.Usuario;
import com.seuprojeto.model.UsuarioRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;

    /**
     * Retorna a lista de todos os usuários cadastrados.
     *
     * @return Lista de usuários
     */
    public List<Usuario> listar() {
        return repository.findAll();
    }

    /**
     * Busca um usuário pelo seu ID.
     *
     * @param id ID do usuário (obrigatório)
     * @return Usuário encontrado
     * @throws ApiException caso o usuário não exista
     */
    public Usuario buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));
    }

    /**
     * Cria um novo usuário a partir dos dados recebidos.
     *
     * @param request Dados do usuário (nome e email)
     * @return Usuário criado
     */
    public Usuario criar(UsuarioRequest request) {
        Usuario usuario = new Usuario();
        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        return repository.save(usuario);
    }

    /**
     * Atualiza os dados de um usuário existente.
     *
     * @param id      ID do usuário a ser atualizado
     * @param request Novos dados do usuário
     * @return Usuário atualizado
     */
    public Usuario atualizar(Long id, UsuarioRequest request) {
        Usuario usuario = buscarPorId(id);
        usuario.setNome(request.getNome());
        usuario.setEmail(request.getEmail());
        return repository.save(usuario);
    }

    /**
     * Remove um usuário pelo seu ID.
     *
     * @param id ID do usuário a ser removido
     */
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}