package com.projeto.crudusuarios.usuario;

import com.seuprojeto.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}