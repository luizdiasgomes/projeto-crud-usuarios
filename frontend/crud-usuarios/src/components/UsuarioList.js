import { useEffect, useState } from "react";
import api from "../services/api";

function UsuarioList({ onEdit }) {
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
        await api.delete(`/usuarios/${id}`);
        carregar();
    };

    return (
        <div style={{
            backgroundColor: "#1F1B24",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            minWidth: "300px"
        }}>
            <h2 style={{ color: "#03DAC6", marginBottom: "15px" }}>Usuários</h2>

            {usuarios.map((u) => (
                <div key={u.id} style={{
                    backgroundColor: "#2C2C2C",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#E0E0E0"
                }}>
                    <div>
                        <strong>{u.nome}</strong> - {u.email}
                    </div>

                    <div style={{ display: "flex", gap: "5px" }}>
                        <button
                            onClick={() => onEdit(u)}
                            style={{
                                backgroundColor: "#03DAC6",
                                border: "none",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                cursor: "pointer",
                                color: "#121212",
                                fontWeight: "bold"
                            }}
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => deletar(u.id)}
                            style={{
                                backgroundColor: "#CF6679",
                                border: "none",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                cursor: "pointer",
                                color: "#121212",
                                fontWeight: "bold"
                            }}
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UsuarioList;