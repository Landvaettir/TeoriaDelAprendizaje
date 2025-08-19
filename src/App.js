import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import { useState, useRef } from 'react';
import VerticalSection from './components/VerticalSection';
import teoriapedagogica from './assets/images/vocal.jpeg';
import teoriaap from './assets/images/arte.jpeg';
import monte from './assets/images/mariamontessori.jpeg';
import condu from './assets/images/dog.jpeg';
import mapa from './assets/images/grafica.png';
import memoriaImg from './assets/images/memoriaa.jpeg';
import Enfoque from './assets/images/enfoque.png';
import Circulo from './assets/images/circuloninos.jpg';
import teoriaA from './assets/images/teorias1.jpeg';
import teoriaB from './assets/images/teorias2.jpeg';
import constructivismo from './assets/images/contructivismo.jpeg';
import nem from './assets/images/nem.jpeg';
import aprendSign from './assets/images/aprendsign.jpeg';

function App() {
  const [modal, setModal] = useState(null);
  const [mostrarSecciones, setMostrarSecciones] = useState(false);
  const seccionExpandibleRef = useRef(null);

  const estiloBoton = {
    backgroundColor: '#91D2F4',
    color: '#334BA5',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.5rem',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: "'Delius', cursive"
  };

  const estiloModal = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const estiloContenido = {
    background: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    maxWidth: '600px',
    width: '90%',
    textAlign: 'center',
    fontFamily: "'Delius', cursive"
  };

  const estiloCerrar = {
    marginTop: '1rem',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  const estiloTituloModal = {
    fontSize: '2rem',
    marginBottom: '1rem',
    fontFamily: "'Chicle', cursive"
  };

  const estiloTextoModal = {
    fontSize: '1.3rem',
    textAlign: 'justify'
  };

  return (
    <>
      <Header />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '2rem',
          marginTop: '2rem'
        }}
      >
        {/* Columna izquierda: 2 secciones una sobre otra */}
        <div
          style={{
            flex: '1 1 60%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            minWidth: '320px'
          }}
        >
          <Section
            titulo="Teoría pedagógica"
            descripcion="Son conjunto de principios, conceptos y proposiciones que buscan explicar, comprender y orientar la práctica educativa..."
            imagen={teoriapedagogica}
            estiloTitulo={{
              color: '#000000',
              fontFamily: "'Chicle', cursive",
              fontSize: '3rem',
              textAlign: 'center'
            }}
            estiloTexto={{
              fontFamily: "'Delius', cursive",
              color: '#333',
              fontSize: '1.8rem',
              textAlign: 'justify'
            }}
            estiloImagen={{
              border: '3px solid #5C3D99',
              maxWidth: '200px',
              width: '100%',
              margin: '1rem'
            }}
            estiloTarjeta={{
              background: '#b7cdff'
            }}
          />

          <Section
            titulo="Teorías del aprendizaje"
            descripcion={
              <>
                <p>
                  Son conjuntos de ideas y principios que explican cómo aprenden las personas, es decir, cómo adquieren conocimientos, habilidades, valores y actitudes.
                </p>
                <ul style={{ paddingLeft: '1rem' }}>
                  <li>Conductista: Aprender es un cambio de conducta (Pavlov, Skinner).</li>
                  <li>Cognitivista: Aprender es procesar información (Piaget, Bruner).</li>
                  <li>Constructivista: El conocimiento se construye activamente (Vygotsky, Piaget).</li>
                  <li>Humanista: Aprender es crecer como persona (Maslow, Rogers).</li>
                  <li>Sociocultural: Se aprende con y a través de otros (Vygotsky).</li>
                  <li>Experiencial: Se aprende haciendo (Kolb).</li>
                </ul>
              </>
            }
            imagen={teoriaap}
            estiloTitulo={{
              color: '#000000',
              fontFamily: "'Chicle', cursive",
              fontSize: '3rem',
              textAlign: 'center'
            }}
            estiloTexto={{
              fontFamily: "'Delius', cursive",
              color: '#333',
              fontSize: '1.5rem',
              textAlign: 'justify'
            }}
            estiloImagen={{
              border: '3px solid #5C3D99',
              maxWidth: '200px',
              width: '100%',
              margin: '1rem'
            }}
            estiloTarjeta={{
              background: '#b7cdff'
            }}
          />
        </div>

        {/* Columna derecha: Otros conceptos */}
        <div
          style={{
            background: '#2868C6',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            flex: '1 1 300px',
            maxWidth: '350px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.2rem',
            color: '#fff',
            fontFamily: "'Delius', cursive"
          }}
        >
          <h2
            style={{
              fontFamily: "'Chicle', cursive",
              fontSize: '2rem',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}
          >
            Otros conceptos
          </h2>

          <button onClick={() => setModal('memoria')} style={estiloBoton}>Memoria</button>
          <button onClick={() => setModal('estilos')} style={estiloBoton}>Estilos de aprendizaje</button>
          <button onClick={() => setModal('objetivos')} style={estiloBoton}>Objetivos</button>
          <button onClick={() => setModal('inteligencias')} style={estiloBoton}>Inteligencias múltiples</button>
          <button
            onClick={() => seccionExpandibleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            style={estiloBoton}
          >
            Ir a Teorías Principales
          </button>
        </div>
      </div>



      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
        {/* Fila 1 */}
        <Section
          titulo="Juego Funcional"
          descripcion={
            <>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '56.25%',
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAGsuotwmzA/IAN9H2CLIEfNYwP3IOetvw/view?embed"
                  allowFullScreen
                  title="Juego funcional"
                ></iframe>
              </div>

              <a
                href="https://www.canva.com/design/DAGsuotwmzA/IAN9H2CLIEfNYwP3IOetvw/view?utm_content=DAGsuotwmzA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Delius', cursive",
                  display: 'inline-block',
                  marginTop: '1rem',
                  backgroundColor: '#5C3D99',
                  color: '#fff',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                }}
              >
                Ver presentación en Canva
              </a>
            </>
          }
          estiloTarjeta={{ background: '#F4DADA', flex: '1 1 45%', minWidth: '300px' }}
          estiloTitulo={{
            color: '#000000',
            fontFamily: "'Chicle', cursive",
            fontSize: '3rem',
            letterSpacing: '0.08rem',
            textAlign: 'center'
          }}
        />

        <Section
          titulo="Teoría Social"
          descripcion={
            <>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '56.25%',
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAGrkV9y3-k/H3xRboJGAlcr3Y3wDt9cBA/view?embed"
                  allowFullScreen
                  title="Juego funcional"
                ></iframe>
              </div>

              <a
                href="https://www.canva.com/design/DAGrkV9y3-k/H3xRboJGAlcr3Y3wDt9cBA/view?utm_content=DAGsuotwmzA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Delius', cursive",
                  display: 'inline-block',
                  marginTop: '1rem',
                  backgroundColor: '#5C3D99',
                  color: '#fff',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                }}
              >
                Ver presentación en Canva
              </a>
            </>
          }
          estiloTarjeta={{ background: '#F4DADA', flex: '1 1 45%', minWidth: '300px' }}
          estiloTitulo={{
            color: '#000000',
            fontFamily: "'Chicle', cursive",
            fontSize: '3rem',
            letterSpacing: '0.08rem',
            textAlign: 'center'
          }}
        />

        {/* Fila 2 */}
        <Section
          titulo="Enfoque Constructivista"
          descripcion={
            <>
              <p>
                Enfatiza que el aprendizaje es un proceso activo donde los estudiantes construyen su propio conocimiento a través de la interacción con el entorno y la reflexión sobre sus experiencias, en lugar de simplemente recibir información de manera pasiva.
                El estudiante es el centro del proceso de aprendizaje, promoviendo la autonomía, la exploración y la construcción significativa del conocimiento.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', marginTop: '1.5rem' }}>
                {/* Lista de viñetas a la izquierda */}
                <ul style={{ flex: '1 1 50%', paddingLeft: '1.5rem', fontSize: '1.5rem' }}>
                  <li>Construcción activa del conocimiento</li>
                  <li>Importancia de la experiencia</li>
                  <li>Interacción social</li>
                  <li>Rol activo del estudiante</li>
                </ul>
                <img
                  src={Enfoque}
                  alt="Enfoque Constructivista"
                  style={{
                    flex: '1 1 40%',

                    maxWidth: '350px',
                    width: '100%',
                    borderRadius: '10px'
                  }}
                />
              </div>
            </>
          }
          estiloTitulo={{
            color: '#000000',
            fontFamily: "'Chicle', cursive",
            fontSize: '3rem',
            letterSpacing: '0.08rem',
            textAlign: 'center'
          }}
          estiloTexto={{
            fontFamily: "'Delius', cursive",
            color: '#333',
            fontSize: '1.7rem',
            letterSpacing: '0.05rem',
            wordSpacing: '0.1em',
            textAlign: 'justify'
          }}
          estiloTarjeta={{ background: '#DAF0F4', flex: '1 1 45%', minWidth: '300px' }}
        />

        <Section
          titulo="Enfoque Sociocultural"
          descripcion="El enfoque sociocultural, basado en la teoria de Lev Vygotsky enfatiza la influencia de la sociedad y la cultura en el desarrollo humano. Este enfoque considera que el aprendizaje y el desarrollo cognitivo son procesos sociales y culturales donde la interacción con otros y con el entorno sociocultural son fundamentales, viendo al individuo como un ser social inmerso en un contexto cultural que moldea su pensamiento y comportamiento"
          imagen={Circulo}
          estiloTarjeta={{ background: '#F4EEDA', flex: '1 1 45%', minWidth: '300px' }}
          estiloTitulo={{
            color: '#000000',
            fontFamily: "'Chicle', cursive",
            fontSize: '3rem',
            letterSpacing: '0.08rem',
            textAlign: 'center'
          }}
          estiloTexto={{
            fontFamily: "'Delius', cursive",
            color: '#333',
            fontSize: '1.7rem',
            letterSpacing: '0.05rem',
            wordSpacing: '0.1em',
            textAlign: 'justify'
          }}
          estiloImagen={{
            maxWidth: '250px',
            width: '100%',
            margin: '1rem'
          }}
        />

        {/* Fila 3 */}
        <Section
          titulo="Aprendizaje Instruccional"
          descripcion={
            <>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '56.25%',
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://prezi.com/p/embed/03NBdLRKGojLQSh43VmA/"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                  title="Aprendizaje Instruccional"
                ></iframe>
              </div>
            </>
          }
          estiloTarjeta={{ background: '#E0DAF4', flex: '1 1 45%', minWidth: '300px' }}
          estiloTitulo={{
            color: '#000000',
            fontFamily: "'Chicle', cursive",
            fontSize: '3rem',
            letterSpacing: '0.08rem',
            textAlign: 'center'
          }}
          estiloTexto={{
            fontFamily: "'Delius', cursive",
            color: '#333',
            fontSize: '1.7rem',
            letterSpacing: '0.05rem',
            wordSpacing: '0.1em',
            textAlign: 'justify'
          }}
        />

        <Section
          titulo="Aprendizaje Instruccional de Robert Gagne"
          descripcion={
            <>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '56.25%',
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://prezi.com/p/embed/UuZCdzjZEXglQ2rry2No/"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                  title="Aprendizaje Instruccional"
                ></iframe>
              </div>
            </>
          }
          estiloTarjeta={{ background: '#E0DAF4', flex: '1 1 45%', minWidth: '300px' }}
          estiloTitulo={{
            color: '#000000',
            fontFamily: "'Chicle', cursive",
            fontSize: '3rem',
            letterSpacing: '0.08rem',
            textAlign: 'center'
          }}
          estiloTexto={{
            fontFamily: "'Delius', cursive",
            color: '#333',
            fontSize: '1.7rem',
            letterSpacing: '0.05rem',
            wordSpacing: '0.1em',
            textAlign: 'justify'
          }}
        />

        <Section
          descripcion={
            <>
              <div>
                <img style={{ width: '100%', borderRadius: '10px' }}
                  src={teoriaA}
                  alt="Teorias 1 Img"
                />
              </div>
            </>
          }
          estiloTarjeta={{ background: '#DAF0F4', flex: '1 1 45%', minWidth: '300px' }}
        />

        <Section
          descripcion={
            <>
              <div>
                <img style={{ width: '100%', borderRadius: '10px' }}
                  src={teoriaB}
                  alt="Teorias 2 Img"
                />
              </div>
            </>
          }
          estiloTarjeta={{ background: '#DAF0F4', flex: '1 1 45%', minWidth: '300px' }}
        />

        <Section
          descripcion={
            <>
              <div>
                <img style={{ width: '100%', borderRadius: '10px' }}
                  src={constructivismo}
                  alt="Constructivismo Img"
                />
              </div>
            </>
          }
          estiloTarjeta={{ background: '#DAF0F4', flex: '1 1 45%', minWidth: '300px' }}
        />

        <Section
          descripcion={
            <>
              <div>
                <img style={{ width: '100%', borderRadius: '10px' }}
                  src={nem}
                  alt="NEM Img"
                />
              </div>
            </>
          }
          estiloTarjeta={{ background: '#DAF0F4', flex: '1 1 45%', minWidth: '300px' }}
        />

        <Section
          descripcion={
            <>
              <div>
                <img style={{ width: '100%', borderRadius: '10px' }}
                  src={aprendSign}
                  alt="Aprendizaje Significativo Img"
                />
              </div>
            </>
          }
          estiloTarjeta={{ background: '#DAF0F4', flex: '1 1 45%', minWidth: '300px' }}
        />

      </div >


      <div ref={seccionExpandibleRef} style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={() => setMostrarSecciones(!mostrarSecciones)}
          style={{
            ...estiloBoton,
            padding: '12px 24px',
            fontSize: '1.3rem'
          }}
        >
          {mostrarSecciones ? 'Ocultar Teorías Principales' : 'Mostrar Teorías Principales'}
        </button>
      </div>


      {
        mostrarSecciones && (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: '1 1 45%' }}>
              <Section
                titulo="Metodo Montessori"
                descripcion="Es un método educativo creado por María Montessori, médica y pedagoga italiana, a principios del siglo XX
              Su objetivo es formar personas libres, autónomas, responsables y felices, a través de un aprendizaje activo y respetuoso con el ritmo de cada niño.
Aprendizaje autónomo	El niño elige libremente lo que quiere aprender.
Ambiente preparado	Espacios organizados y adaptados al tamaño y ritmo del niño.
Materiales sensoriales	Se usan objetos concretos que estimulan los sentidos.
Educador como guía."
                imagen={monte}
                estiloTitulo={{
                  color: '#000000',
                  fontFamily: "'Chicle', cursive",
                  fontSize: '3rem',
                  letterSpacing: '0.08rem',
                  textAlign: 'center'
                }}
                estiloTexto={{
                  fontFamily: "'Delius', cursive",
                  color: '#333',
                  fontSize: '1.7rem',
                  letterSpacing: '0.05rem',
                  wordSpacing: '0.1em',
                  textAlign: 'justify'
                }}
                estiloImagen={{
                  border: '3px solid #5C3D99',
                  maxWidth: '200px',
                  width: '100%',
                  margin: '1rem'
                }}
                estiloTarjeta={{
                  background: '#A4A6F3',
                  flex: '1 1 45%',
                  minWidth: '300px',
                  marginLeft: '5rem'
                }}
              />
              <Section
                titulo="Conductismo"
                descripcion={
                  <>
                    <p>
                      Corriente psicológica que se centra en el estudio observable y medible del comportamiento, dejando del lado los procesos mentales internos.
                    </p>
                    <p>John B. Watson utilizaba el condicionamiento clásico</p>
                    <p>B.F. Skinner creó el condicionamiento radical y operante</p>
                    <p>Iván Pavlov, padre del condicionamiento clásico</p>

                    <div style={{
                      position: 'relative',
                      paddingBottom: '56.25%',
                      height: 0,
                      overflow: 'hidden',
                      marginTop: '1rem',
                      borderRadius: '10px'
                    }}>
                      <iframe
                        src="https://www.youtube.com/embed/88Zv3p55HdM"
                        title="Video sobre el conductismo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: '10px'
                        }}
                      ></iframe>
                    </div>
                  </>
                }
                imagen={condu}
                estiloTitulo={{
                  color: '#000000',
                  fontFamily: "'Chicle', cursive",
                  fontSize: '3rem',
                  letterSpacing: '0.08rem',
                  textAlign: 'center'
                }}
                estiloTexto={{
                  fontFamily: "'Delius', cursive",
                  color: "#333",
                  fontSize: '1.5rem',
                  letterSpacing: '0.05rem',
                  wordSpacing: '0.1em',
                  textAlign: 'justify'
                }}
                estiloImagen={{
                  border: '3px solid #5C3D99',
                  maxWidth: '200px',
                  width: '100%',
                  margin: '1rem auto',
                  display: 'block'
                }}
                estiloTarjeta={{
                  background: '#A4A6F3',
                  flex: '1 1 100%',
                  maxWidth: '800px',
                  margin: '1rem auto',
                  padding: '1rem',
                  borderRadius: '10px'
                }}

              />
            </div>
            <div style={{ flex: '1 1 45%', alignSelf: 'stretch' }}>
              <VerticalSection
                titulo="Aprendizaje, paradigmas y diferencias de concepto"
                descripcion={
                  <>
                    <p>
                      Es el proceso mediante el cual una persona adquiere conocimientos, habilidades, valores o actitudes a través del estudio, la experiencia, la práctica o la observación
                    </p>
                    <p>Elementos del aprendizaje</p>
                    <p>Son los componentes esenciales que intervienen en el proceso de aprender. Todos estos elementos trabajan juntos para que el aprendizaje ocurra de manera efectiva.
                    </p>
                    <p> Elementos básicos del aprendizaje:</p>
                    <ul style={{ paddingLeft: '1rem' }}>
                      <li>Sujeto:	La persona que aprende (el estudiante).</li>
                      <li>Objeto:	Lo que se quiere aprender (el contenido o conocimiento).</li>
                      <li>Medio o recurso: Materiales, herramientas y estrategias que se usan para facilitar el aprendizaje.</li>
                      <li>Método: La manera en que se enseña o se aprende (técnicas, enfoques, actividades).</li>
                      <li>Motivación:  La razón o interés que impulsa a aprender.</li>
                      <li>Evaluación:	 Proceso para comprobar qué se ha aprendido y cómo.</li>
                      <li>Contexto: El ambiente físico, social y cultural donde ocurre el aprendizaje</li>
                    </ul>

                  </>
                }
                imagen={mapa}
                estiloTitulo={{
                  color: '#000000',
                  fontFamily: "'Chicle', cursive",
                  fontSize: '3rem',
                  letterSpacing: '0.08rem',
                  textAlign: 'center'
                }}
                estiloTexto={{
                  fontFamily: "'Delius', cursive",
                  color: "#333",
                  fontSize: '1.5rem',
                  letterSpacing: '0.05rem',
                  wordSpacing: '0.1em',
                  textAlign: 'justify'
                }}
                estiloImagen={{
                  border: '3px solid #5C3D99',
                  maxWidth: '700px',
                  width: '100%',
                  margin: '1rem',
                  marginTop: '-25rem'
                }}
                estiloTarjeta={{
                  background: '#57BBC2',
                  flex: '1 1 45%',
                  minWidth: '300px'
                }}
              />
            </div>
          </div>
        )
      }

      {/* Modales */}
      {
        modal === 'memoria' && (
          <div style={estiloModal}>
            <div style={estiloContenido}>
              <h3 style={estiloTituloModal}>Memoria</h3>
              <p style={estiloTextoModal}>
                Guarda lo que estamos aprendiendo, nos permite encontrar respuestas a ciertas cuestiones como recordar fechas.
                <br /><br />
                Esta misma está dividida en tres:
              </p>
              <img
                src={memoriaImg}
                alt="Memoria"
                style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '1rem' }}
              />
              <button onClick={() => setModal(null)} style={estiloCerrar}>Cerrar</button>
            </div>
          </div>
        )
      }


      {
        modal === 'estilos' && (
          <div style={estiloModal}>
            <div style={estiloContenido}>
              <h3 style={estiloTituloModal}>Estilos de aprendizaje</h3>

              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '56.25%',
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    border: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAGqkkjqEEM/WPkJ7dAQJuzTL0d7FXZO_w/view?embed"
                  allowFullScreen
                  title="Estilos de aprendizaje"
                ></iframe>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button onClick={() => setModal(null)} style={estiloCerrar}>Cerrar</button>

                <a
                  href="https://www.canva.com/design/DAGqkkjqEEM/WPkJ7dAQJuzTL0d7FXZO_w/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#5C3D99',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontFamily: 'sans-serif'
                  }}
                >
                  Ver en Canva
                </a>
              </div>
            </div>
          </div>
        )
      }


      {
        modal === 'inteligencias' && (
          <div style={estiloModal}>
            <div style={estiloContenido}>
              <h3 style={estiloTituloModal}>Inteligencias Múltiples</h3>
              <p style={estiloTextoModal}>
                La teoría de las inteligencias múltiples, propuesta por Howard Gardner, sugiere que la inteligencia no es una entidad única, sino un conjunto de habilidades y capacidades distintas. Gardner identificó inicialmente ocho inteligencias: lingüística, lógico-matemática, espacial, musical, corporal-kinestésica, interpersonal, intrapersonal y naturalista.
              </p>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9
                height: 0,
                overflow: 'hidden',
                width: '100%',
                borderRadius: '10px',
                marginTop: '1rem'
              }}>
                <iframe
                  src="https://www.youtube.com/embed/2hJnFAysNNs?si=lvrBTxZUl5qCEvSa"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                ></iframe>
              </div>
              <button onClick={() => setModal(null)} style={estiloCerrar}>Cerrar</button>
            </div>
          </div>
        )
      }

      {
        modal === 'objetivos' && (
          <div style={estiloModal}>
            <div style={estiloContenido}>
              <h3 style={estiloTituloModal}>Objetivos</h3>

              <p style={estiloTextoModal}>
                <strong>Objetivo general:</strong>
              </p>
              <p style={estiloTextoModal}>
                Expresa de manera amplia qué se pretende lograr con una actividad, proyecto o investigación.
                Responde a la pregunta: <em>¿Para qué se hace este trabajo?</em>
              </p>
              <p style={estiloTextoModal}>
                <strong>Fórmula:</strong><br />
                <strong style={{ color: '#CBA2EA' }}>Verbo en infinitivo</strong> +{' '}
                <strong style={{ color: '#3F3381' }}>qué se quiere lograr</strong> +{' '}
                <strong style={{ color: '#A74BC4' }}>cómo se va a lograr</strong> +{' '}
                <strong style={{ color: '#2868C6' }}>para qué</strong>
              </p>

              <hr style={{ margin: '1rem 0' }} />

              <p style={estiloTextoModal}>
                <strong>Objetivos específicos:</strong>
              </p>
              <p style={estiloTextoModal}>
                Derivan del objetivo general y desglosan sus partes en metas más concretas, medibles y delimitadas.
                Responden a la pregunta: <em>¿Qué pasos debo cumplir para alcanzar el objetivo general?</em>
              </p>
              <p style={estiloTextoModal}>
                <strong>Fórmula:</strong><br />
                <strong style={{ color: '#734BC4' }}>Verbo en infinitivo</strong> +{' '}
                <strong style={{ color: '#3CA0AF' }}>acción concreta</strong> +{' '}
                <strong style={{ color: '#C951D3' }}>elemento o variable</strong> +{' '}
                <strong style={{ color: '#60118D' }}>posible alcance o situación</strong>
              </p>
              <p style={estiloTextoModal}>(Lo que se busca que aprenda el alumno)</p>

              <button onClick={() => setModal(null)} style={estiloCerrar}>Cerrar</button>
            </div>
          </div>
        )
      }

    </>
  );
}


export default App;
