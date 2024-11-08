import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContractTable from './components/ContractTable';
import './App.css';  // Estilos principais
import axios from 'axios';

function App() {
  const [contratos, setContratos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar os últimos contratos
  const fetchUltimosContratos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data.data); // Atualiza o estado com os dados dos contratos
      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar contratos');
      setLoading(false);
    }
  };

  // Chama a função para buscar os contratos ao carregar o componente
  useEffect(() => {
    fetchUltimosContratos(); // Carrega os contratos ao inicializar o componente
  }, []);

  // Função para passar para os modais, chamando a atualização após o fechamento
  const handleModalClose = () => {
    fetchUltimosContratos(); // Atualiza os contratos após o fechamento do modal
  };

  return (
    <div className="app">
      <Sidebar handleModalClose={handleModalClose} />
      <div className="content">
        <h1>KM Control</h1>
        <ContractTable contratos={contratos} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;
