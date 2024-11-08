import React, { useState } from 'react';
import './FazerRevisaoModal.css'
const FazerRevisaoModal = ({ closeModal }) => {
  const [placa, setPlaca] = useState('');  // Estado para o campo Placa

  // Função para lidar com mudanças no campo "Placa"
  const handleChange = (e) => {
    setPlaca(e.target.value);
  };

  // Função para enviar os dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifique se o campo Placa não está vazio
    if (!placa) {
      alert("Por favor, insira a placa do veículo.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/api/contratos/fazer-revisao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa }),  // Enviando apenas a placa no corpo da requisição
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Revisão realizada com sucesso!');
        closeModal(); // Fecha o modal após sucesso
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert('Erro ao realizar revisão');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Fazer Revisão</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Placa</label>
            <input
              type="text"
              name="placa"
              value={placa}
              onChange={handleChange}
              placeholder="Digite a placa do veículo"
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Confirmar</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FazerRevisaoModal;
