package com.projeto.crudusuarios.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ApiException extends RuntimeException {

    private final HttpStatus status;
    private final String codigo;

    /**
     * Cria uma nova ApiException.
     *
     * @param status  Status HTTP a ser retornado
     * @param message Mensagem amigável de erro
     */
    public ApiException(HttpStatus status, String message) {
        super(message);
        this.status = status;
        this.codigo = null;
    }
}