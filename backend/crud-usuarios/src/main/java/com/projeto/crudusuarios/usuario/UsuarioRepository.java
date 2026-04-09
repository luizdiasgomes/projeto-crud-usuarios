package com.projeto.crudusuarios.usuario;

import com.projeto.crudusuarios.usuario.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
}