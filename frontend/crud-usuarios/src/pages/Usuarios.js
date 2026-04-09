import { useState } from "react";
import UsuarioForm from "../components/UsuarioForm";
import UsuarioList from "../components/UsuarioList";

function Usuarios() {
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [reload, setReload] = useState(false);

    const handleSave = () => {
        setUsuarioSelecionado(null);
        setMostrarForm(false);
        setReload(!reload);
    };

    const handleEdit = (u) => {
        setUsuarioSelecionado(u);
        setMostrarForm(true);
    };

    const handleNovo = () => {
        setUsuarioSelecionado(null);
        setMostrarForm(true);
    };

    return (
        <div style={{
            backgroundColor: "#2B2D3C", // Fundo escuro das bordas da imagem
            minHeight: "100vh",
            padding: "40px 20px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start"
        }}>
            <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "800px",
                padding: "30px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
                {!mostrarForm ? (
                    <UsuarioList
                        key={reload}
                        onEdit={handleEdit}
                        onNovo={handleNovo}
                    />
                ) : (
                    <UsuarioForm
                        usuarioSelecionado={usuarioSelecionado}
                        onSave={handleSave}
                        onCancel={() => setMostrarForm(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default Usuarios;