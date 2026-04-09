import { useEffect, useState } from "react";
import api from "../services/api";

function UsuarioForm({ usuarioSelecionado, onSave, onCancel }) {
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
        <div>
            <h2 style={{ color: "#374151", marginBottom: "20px", fontSize: "20px" }}>
                {usuarioSelecionado ? "Editar Cadastro" : "Novo Cadastro"}
            </h2>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", color: "#6B7280", fontSize: "14px" }}>Nome</label>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #D1D5DB",
                        fontSize: "15px",
                        boxSizing: "border-box",
                        outline: "none"
                    }}
                />
            </div>

            <div style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", marginBottom: "5px", color: "#6B7280", fontSize: "14px" }}>E-mail</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #D1D5DB",
                        fontSize: "15px",
                        boxSizing: "border-box",
                        outline: "none"
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    onClick={salvar}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#2E75D3",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "14px"
                    }}
                >
                    Salvar
                </button>
                <button
                    onClick={onCancel}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#F3F4F6",
                        color: "#374151",
                        border: "1px solid #D1D5DB",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "14px"
                    }}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default UsuarioForm;