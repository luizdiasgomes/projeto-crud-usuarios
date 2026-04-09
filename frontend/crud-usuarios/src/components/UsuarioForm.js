import { useEffect, useState } from "react";
import api from "../services/api";

function UsuarioForm({ usuarioSelecionado, onSave }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (usuarioSelecionado) {
            setNome(usuarioSelecionado.nome);
            setEmail(usuarioSelecionado.email);
        }
    }, [usuarioSelecionado]);

    const salvar = async () => {
        const payload = { nome, email };

        if (usuarioSelecionado) {
            await api.put(`/usuarios/${usuarioSelecionado.id}`, payload);
        } else {
            await api.post("/usuarios", payload);
        }

        setNome("");
        setEmail("");
        onSave();
    };

    return (
        <div style={{
            backgroundColor: "#1F1B24",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            width: "320px"
        }}>
            <h2 style={{ color: "#03DAC6", marginBottom: "15px" }}>
                {usuarioSelecionado ? "Editar" : "Novo"} Usuário
            </h2>

            <input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{
                    width: "95%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #333",
                    backgroundColor: "#2C2C2C",
                    color: "#E0E0E0"
                }}
            />

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                    width: "95%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #333",
                    backgroundColor: "#2C2C2C",
                    color: "#E0E0E0"
                }}
            />

            <button
                onClick={salvar}
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#BB86FC",
                    color: "#121212",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                Salvar
            </button>
        </div>
    );
}

export default UsuarioForm;