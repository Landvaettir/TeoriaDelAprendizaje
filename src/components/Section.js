import React from 'react';

const styles = {
    section: {
        background: 'linear-gradient(135deg,rgba(24, 129, 226, 0.31), #f3e9ff)',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        margin: '2rem auto',
        maxWidth: '800px',
        width: '90vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    titulo: {
        fontSize: '2rem',
        margin: 0,
        textAlign: 'center',
    },
    contenido: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    texto: {
        flex: 1,
        fontSize: '1.3rem',
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        textAlign: 'justify',
        minWidth: '250px',
    },
    imagen: {
        maxWidth: '200px',
        height: 'auto',
        borderRadius: '10px',
        flexShrink: 0,
    }
};

const Section = ({
    titulo,
    descripcion,
    imagen,
    estiloTitulo = {},
    estiloTexto = {},
    estiloImagen = {},
    estiloTarjeta = {}
}) => {
    return (
        <>
            <style>
                {`
          @media (max-width: 768px) {
            .section-contenido {
              flex-direction: column !important;
              align-items: center !important;
            }
            .section-texto {
              max-width: 100% !important;
              font-size: 1.1rem !important;
              text-align: center !important;
            }
            .section-imagen {
              max-width: 80% !important;
              margin-top: 1rem;
            }
            .section-tarjeta {
              width: 95vw !important;
              margin: 1rem auto !important;
              padding: 1rem !important;
            }
            .section-titulo {
              font-size: 1.8rem !important;
            }
          }
        `}
            </style>

            <section
                className="section-tarjeta"
                style={{
                    ...styles.section,
                    ...estiloTarjeta
                }}
            >
                <h2
                    className="section-titulo"
                    style={{
                        ...styles.titulo,
                        ...estiloTitulo,
                    }}
                >
                    {titulo}
                </h2>

                <div
                    className="section-contenido"
                    style={{
                        ...styles.contenido,
                    }}
                >
                    <p
                        className="section-texto"
                        style={{
                            ...styles.texto,
                            ...estiloTexto,
                        }}
                    >
                        {descripcion}
                    </p>

                    {imagen && (
                        <img
                            className="section-imagen"
                            src={imagen}
                            alt={titulo}
                            style={{
                                ...styles.imagen,
                                ...estiloImagen,
                            }}
                        />
                    )}
                </div>
            </section>
        </>
    );
};

export default Section;
