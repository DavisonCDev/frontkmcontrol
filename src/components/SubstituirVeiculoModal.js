import React, { useState } from 'react';
import './SubstituirVeiculoModal.css'
const SubstituirVeiculoModal = ({ closeModal }) => {
  // Estado para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    numeroContrato: '',
    placa: '',
    kmInicial: '',
    dataSubstituicao: '',
    marca: '',
    modelo: ''
  });

  // Função para manipular as mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para enviar os dados do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/contratos/substituirVeiculo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Veículo substituído com sucesso!');
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
        <h2>Substituir Veículo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Número do Contrato</label>
            <input type="text" name="numeroContrato" value={formData.numeroContrato} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Placa</label>
            <input type="text" name="placa" value={formData.placa} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>KM Inicial</label>
            <input type="number" name="kmInicial" value={formData.kmInicial} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Data de Substituição</label>
            <input type="date" name="dataSubstituicao" value={formData.dataSubstituicao} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Marca</label>
            <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Modelo</label>
            <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
          </div>
          <div className="form-buttons">
            <button type="submit">Substituir</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubstituirVeiculoModal;
