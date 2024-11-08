import React, { useState } from 'react';
import './AtualizarKmModal.css'
const AtualizarKmModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    placa: '',
    kmAtual: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/contratos/atualizar-km', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('KM atualizado com sucesso!');
        closeModal(); // Fecha o modal após sucesso
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Atualizar KM</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Placa</label>
            <input
              type="text"
              name="placa"
              value={formData.placa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>KM Atual</label>
            <input
              type="number"
              name="kmAtual"
              value={formData.kmAtual}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">Atualizar</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AtualizarKmModal;
