// src/components/VerticalSection.js
const VerticalSection = ({
    titulo,
    descripcion,
    imagen,
    estiloTitulo = {},
    estiloTexto = {},
    estiloImagen = {},
    estiloTarjeta = {},
}) => {
    return (
        <section
            style={{
                background: 'linear-gradient(135deg,rgba(24, 129, 226, 0.31), #f3e9ff)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                margin: '2rem 2rem',
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                ...estiloTarjeta,
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    margin: 0,
                    textAlign: 'center',
                    ...estiloTitulo,
                }}
            >
                {titulo}
            </h2>

            <div
                style={{
                    fontSize: '1.3rem',
                    textAlign: 'justify',
                    width: '100%',
                    ...estiloTexto,
                }}
            >
                {descripcion}
            </div>

            {imagen && (
                <img
                    src={imagen}
                    alt={titulo}
                    style={{
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        marginTop: '1rem',
                        ...estiloImagen,
                    }}
                />
            )}
        </section>
    );
};

export default VerticalSection;
