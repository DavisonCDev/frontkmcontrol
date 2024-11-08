import React, { useState } from 'react';
import './AddContratoModal.css'; // Não se esqueça de importar o CSS

const AddContratoModal = ({ closeModal }) => {
  // Estado para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    condutorPrincipal: '',
    condutorResponsavel: '',
    dataRegistro: '',
    diarias: '',
    franquiaKm: '',
    kmAtual: '',
    kmInicial: '',
    locadora: '',
    marca: '',
    modelo: '',
    numeroContrato: '',
    osCliente: '',
    placa: '',
    valorAluguel: '',
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
      const response = await fetch('http://localhost:8081/api/contratos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Contrato criado com sucesso!');
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
        <h2>Adicionar Contrato</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Condutor Principal</label>
            <input type="text" name="condutorPrincipal" value={formData.condutorPrincipal} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Condutor Responsável</label>
            <input type="text" name="condutorResponsavel" value={formData.condutorResponsavel} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Data de Registro</label>
            <input type="date" name="dataRegistro" value={formData.dataRegistro} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Diárias</label>
            <input type="number" name="diarias" value={formData.diarias} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Franquia KM</label>
            <input type="number" name="franquiaKm" value={formData.franquiaKm} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>KM Atual</label>
            <input type="number" name="kmAtual" value={formData.kmAtual} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>KM Inicial</label>
            <input type="number" name="kmInicial" value={formData.kmInicial} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Locadora</label>
            <input type="text" name="locadora" value={formData.locadora} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Marca</label>
            <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Modelo</label>
            <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Número do Contrato</label>
            <input type="text" name="numeroContrato" value={formData.numeroContrato} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>OS Cliente</label>
            <input type="text" name="osCliente" value={formData.osCliente} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Placa</label>
            <input type="text" name="placa" value={formData.placa} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Valor de Aluguel</label>
            <input type="number" name="valorAluguel" value={formData.valorAluguel} onChange={handleChange} />
          </div>
          
          <div className="form-buttons">
            <button type="submit">Adicionar</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContratoModal;
