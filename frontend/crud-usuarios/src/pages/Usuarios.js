import { useState } from "react";
import UsuarioForm from "../components/UsuarioForm";
import UsuarioList from "../components/UsuarioList";

function Usuarios() {
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [reload, setReload] = useState(false);

    const handleSave = () => {
        setUsuarioSelecionado(null);
        setReload(!reload);
    };

    return (
        <div style={{
            backgroundColor: "#121212",
            color: "#E0E0E0",
            minHeight: "100vh",
            padding: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#BB86FC" }}>
                CRUD de Usuários
            </h1>

            <div style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                <UsuarioForm
                    usuarioSelecionado={usuarioSelecionado}
                    onSave={handleSave}
                />

                <UsuarioList
                    key={reload}
                    onEdit={(u) => setUsuarioSelecionado(u)}
                />
            </div>
        </div>
    );
}

export default Usuarios;