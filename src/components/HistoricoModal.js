import React, { useState, useEffect } from 'react';
import './HistoricoModal.css'; // Estilos específicos para o modal de histórico
import axios from 'axios';

const HistoricoModal = ({ closeModal }) => {
  // Estados para armazenar contratos e paginação
  const [contratos, setContratos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Função para buscar contratos com paginação
  const fetchContratos = async (page = 0) => {
    try {
      // Chama o endpoint passando os parâmetros de paginação
      const response = await axios.get(`http://localhost:8081/api/contratos?page=${page}&size=10`);
      
      // Armazenar os contratos retornados
      setContratos(response.data.data.content); // Contratos da página atual
      setTotalPages(response.data.data.totalPages); // Total de páginas
    } catch (error) {
      console.error('Erro ao buscar contratos:', error);
    }
  };

  // Chama a função para buscar contratos sempre que o modal for aberto ou a página mudar
  useEffect(() => {
    fetchContratos(currentPage); // Recarrega os contratos ao mudar de página
  }, [currentPage]);

  // Função para ir para a próxima página
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1); // Avança para a próxima página
    }
  };

  // Função para ir para a página anterior
  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1); // Volta para a página anterior
    }
  };

  return (
    <div className="historico-modal">
      <div className="modal-content">
        <h2>Histórico de Contratos</h2>

        {/* Tabela de contratos */}
        <table className="historico-table">
          <thead>
            <tr>
              {/* Cabeçalhos da tabela para todos os campos */}
              <th>ID</th>
              <th>Condutor Principal</th>
              <th>Condutor Responsável</th>
              <th>Data Atual</th>
              <th>Data Registro</th>
              <th>Data Vigência</th>
              <th>Data Substituição</th>
              <th>Diárias</th>
              <th>Franquia Km</th>
              <th>Km Atual</th>
              <th>Km Inicial</th>
              <th>Locadora</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Número do Contrato</th>
              <th>OS Cliente</th>
              <th>Placa</th>
              <th>Valor Aluguel</th>
              <th>Revisão</th>
              <th>Km Excedido</th>
              <th>Km Ideal</th>
              <th>Km Semana</th>
              <th>Km Média Mensal</th>
              <th>Qt Meses Veículo</th>
              <th>Qt Meses Contrato</th>
              <th>Saldo Km</th>
              <th>Acumulado Mês</th>
              <th>Entrega Propriedade Data</th>
              <th>Contador Revisão</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {contratos.length === 0 ? (
              <tr>
                <td colSpan="30" style={{ textAlign: 'center' }}>Nenhum contrato encontrado.</td>
              </tr>
            ) : (
              contratos.map((contrato) => (
                <tr key={contrato.id}>
                  {/* Dados da tabela para cada contrato */}
                  <td>{contrato.id}</td>
                  <td>{contrato.condutorPrincipal}</td>
                  <td>{contrato.condutorResponsavel}</td>
                  <td>{contrato.dataAtual}</td>
                  <td>{contrato.dataRegistro}</td>
                  <td>{contrato.dataVigencia}</td>
                  <td>{contrato.dataSubstituicao}</td>
                  <td>{contrato.diarias}</td>
                  <td>{contrato.franquiaKm}</td>
                  <td>{contrato.kmAtual}</td>
                  <td>{contrato.kmInicial}</td>
                  <td>{contrato.locadora}</td>
                  <td>{contrato.marca}</td>
                  <td>{contrato.modelo}</td>
                  <td>{contrato.numeroContrato}</td>
                  <td>{contrato.osCliente}</td>
                  <td>{contrato.placa}</td>
                  <td>{contrato.valorAluguel}</td>
                  <td>{contrato.fazerRevisao ? 'Sim' : 'Não'}</td>
                  <td>{contrato.kmExcedido ? 'Sim' : 'Não'}</td>
                  <td>{contrato.kmIdeal}</td>
                  <td>{contrato.kmSemana}</td>
                  <td>{contrato.kmMediaMensal}</td>
                  <td>{contrato.qtMesesVeic}</td>
                  <td>{contrato.qtMesesCont}</td>
                  <td>{contrato.saldoKm}</td>
                  <td>{contrato.acumuladoMes}</td>
                  <td>{contrato.entregaPropData}</td>
                  <td>{contrato.contadorRevisao}</td>
                  <td>{contrato.observacoes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Controles de paginação */}
        <div className="pagination-buttons">
          <button onClick={goToPreviousPage} disabled={currentPage === 0}>
            Anterior
          </button>
          <span>Página {currentPage + 1} de {totalPages}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
            Próximo
          </button>
        </div>

        {/* Botão para fechar o modal */}
        <button className="close-button" onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default HistoricoModal;
