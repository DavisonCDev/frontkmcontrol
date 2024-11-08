import React, { useState } from 'react';
import './ApagarContratoModal.css';

const ApagarContratoModal = ({ closeModal }) => {
  // Estado para armazenar o número do contrato
  const [numeroContrato, setNumeroContrato] = useState('');

  // Função para atualizar o estado quando o usuário digitar o número do contrato
  const handleChange = (e) => {
    setNumeroContrato(e.target.value);
  };

  // Função para enviar os dados do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/contratos', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numeroContrato }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Contrato apagado com sucesso!');
        closeModal(); // Fecha o modal após sucesso
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert('Erro ao apagar o contrato');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Apagar Contrato</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Número do Contrato</label>
            <input
              type="text"
              name="numeroContrato"
              value={numeroContrato}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Apagar</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApagarContratoModal;
