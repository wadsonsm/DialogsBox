// Estilos do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CaixaDialogo from './components/CaixaDialogo';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPropos, setModalProps] = useState({});
  const [loading, setLoading] = useState(false);

  const abrirModalComLoader = async (titulo, conteudo, icone) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setModalProps({titulo, conteudo, icone});
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
  };

  const confirmarAcao = () => {
    console.log('Ação confirmada!');
    fecharModal(); 
  };
  return (
    <div>
      <Container>
          <h1>Exemplo de Modal com React-Bootstrap</h1>
          {loading &&(
            <div style={{textAlign:'center', margin:'20px 0'}}>
              <Spinner animation='border' role='status'>
                  <span className='visually-hidden'>loading ...</span>
              </Spinner>
              <p>Carregando ...</p>
            </div>
          )}

          {!loading && (
              <Row>
              <Col>
                <Button variant="primary" onClick={() =>abrirModalComLoader(
                  'Sucesso',
                  'A operação foi concluída com sucesso !',
                  <FaCheckCircle style={{ color: 'green' }} />
                  )}>
                  Abrir Modal
                </Button>
              </Col>
              <Col>
              <Button  variant="warning"
          onClick={() =>
            abrirModalComLoader(
              'Aviso',
              'Essa ação pode ter consequências.',
              <FaExclamationTriangle style={{ color: 'orange' }} />
            )
          }
        >
                Abrir Modal
              </Button>
              </Col>
            </Row>
          )}          
      </Container>

      {/* Modal CaixaDialogo */}
      <CaixaDialogo
        show={showModal} // Estado controla a visibilidade
        onClose={fecharModal}
        onConfirm={confirmarAcao}
        titulo={modalPropos.titulo}
        conteudo={modalPropos.conteudo}
        icone={modalPropos.icone}
      />
    </div>
  );
};

export default App;