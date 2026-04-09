import { useEffect, useState } from "react";
import api from "../services/api";

function UsuarioList({ onEdit, onNovo }) {
    const [usuarios, setUsuarios] = useState([]);

    const carregar = async () => {
        try {
            const res = await api.get("/usuarios");
            setUsuarios(res.data);
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    };

    useEffect(() => {
        carregar();
    }, []);

    const deletar = async (id) => {
        if (window.confirm("Deseja realmente excluir este usuário?")) {
            await api.delete(`/usuarios/${id}`);
            carregar();
        }
    };

    return (
        <div>
            <button
                onClick={onNovo}
                style={{
                    backgroundColor: "#2E75D3",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginBottom: "30px",
                    fontSize: "14px"
                }}
            >
                NOVO CADASTRO
            </button>

            <div>
                {/* Cabeçalho da Tabela */}
                <div style={{
                    display: "flex",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #F0F0F0",
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontSize: "14px",
                    textTransform: "uppercase"
                }}>
                    <div style={{ flex: 1 }}>Nome</div>
                    <div style={{ flex: 1 }}>E-mail</div>
                    <div style={{ width: "80px", textAlign: "center" }}></div>
                </div>

                {/* Linhas de Usuários */}
                {usuarios.map((u) => (
                    <div key={u.id} style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "15px 0",
                        borderBottom: "1px solid #F0F0F0",
                        color: "#374151",
                        fontSize: "15px"
                    }}>
                        <div style={{ flex: 1 }}>{u.nome}</div>
                        <div style={{ flex: 1 }}>{u.email}</div>

                        {/* Ações (Ícones) */}
                        <div style={{ width: "80px", display: "flex", justifyContent: "space-between" }}>
                            <button
                                onClick={() => onEdit(u)}
                                style={{ background: "none", border: "none", cursor: "pointer", padding: "5px" }}
                                title="Editar"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                            <button
                                onClick={() => deletar(u.id)}
                                style={{ background: "none", border: "none", cursor: "pointer", padding: "5px" }}
                                title="Excluir"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsuarioList;