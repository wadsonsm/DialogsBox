import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CaixaDialogo = ({show, onClose, titulo, conteudo, onConfirm, icone}) => {      
  return (    
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
            {icone && <span style={{marginRight:'10px'}}>{icone}</span>}
            {titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{conteudo}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Botão de fechar
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Botão de salvar
        </Button>
      </Modal.Footer>
    </Modal>  
  )
}

export default CaixaDialogo