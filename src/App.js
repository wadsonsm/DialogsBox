// Estilos do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CaixaDialogo from './components/CaixaDialogo';
import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPropos, setModalProps] = useState({});

  const abrirModal = () => {    
    setModalProps({
        titulo : "Sucesso",
        conteudo:"A operação foi concluída com sucesso !",
        icone : <FaCheckCircle  style={{color:'green'}} />
    });
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false); // Fecha o modal
  };

  const confirmarAcao = () => {
    console.log('Ação confirmada!');
    fecharModal(); // Fecha o modal após a ação
  };

  return (
    <div>
      <Container>
          <h1>Exemplo de Modal com React-Bootstrap</h1>
          <Row>
            <Col>
              <Button variant="primary" onClick={abrirModal}>
                Abrir Modal
              </Button>
            </Col>
            <Col>
            <Button variant="danger" onClick={abrirModal}>
              Abrir Modal
            </Button>
            </Col>
          </Row>
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