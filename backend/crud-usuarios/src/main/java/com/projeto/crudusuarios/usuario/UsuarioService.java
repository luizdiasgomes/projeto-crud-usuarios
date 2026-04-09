package com.projeto.crudusuarios.usuario;

import com.projeto.crudusuarios.exception.ApiException;
import com.projeto.crudusuarios.usuario.entity.UsuarioEntity;
import com.seuprojeto.model.Usuario;
import com.seuprojeto.model.UsuarioRequest;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final ModelMapper mapper;

    /**
     * Retorna a lista de todos os usuários cadastrados.
     *
     * @return Lista de usuários
     */
    public List<Usuario> listar() {
        return repository.findAll().stream()
                .map(entity -> mapper.map(entity, Usuario.class))
                .toList();
    }

    /**
     * Busca um usuário pelo seu ID.
     *
     * @param id ID do usuário (obrigatório)
     * @return Usuário encontrado
     * @throws ApiException caso o usuário não exista
     */
    public Usuario buscarPorId(Long id) {
        UsuarioEntity entity = repository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));
        return mapper.map(entity, Usuario.class);
    }

    /**
     * Cria um novo usuário a partir dos dados recebidos.
     *
     * @param request Dados do usuário (nome e email)
     * @return Usuário criado
     */
    public Usuario criar(UsuarioRequest request) {
        UsuarioEntity entity = mapper.map(request, UsuarioEntity.class);

        UsuarioEntity salvo = repository.save(entity);

        return mapper.map(salvo, Usuario.class);
    }

    /**
     * Atualiza os dados de um usuário existente.
     *
     * @param id      ID do usuário a ser atualizado
     * @param request Novos dados do usuário
     * @return Usuário atualizado
     */
    public Usuario atualizar(Long id, UsuarioRequest request) {
        var entityExistente = repository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));

        mapper.map(request, entityExistente);

        UsuarioEntity atualizado = repository.save(entityExistente);
        return mapper.map(atualizado, Usuario.class);
    }

    /**
     * Remove um usuário pelo seu ID.
     *
     * @param id ID do usuário a ser removido
     */
    public void deletar(Long id) {
        if (!repository.existsById(id)) {
            throw new ApiException(HttpStatus.NOT_FOUND, "Usuário não encontrado");
        }
        repository.deleteById(id);
    }
}