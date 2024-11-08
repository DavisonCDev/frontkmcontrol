import React from 'react';
import './ContractTable.css';

const ContractTable = ({ contratos, loading, error }) => {
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="contract-table-container">
      <table className="contract-table">
        <thead>
          <tr>
            <th>Nº do Contrato</th>
            <th>Data Vigência</th>
            <th>Cond. Responsável</th>
            <th>Placa</th>
            <th>Modelo</th>
            <th>KM Atual</th>
            <th>Média(KM)</th>
            <th>Observações</th>
          </tr>
        </thead>
        <tbody>
          {contratos.map((contrato) => {
            const isKmExcedido = contrato.kmExcedido;
            const isFazerRevisao = contrato.fazerRevisao;

            const rowStyle = isKmExcedido
              ? { backgroundColor: '#ffcccc' } 
              : isFazerRevisao
              ? { backgroundColor: '#ffffcc' } 
              : { backgroundColor: '#ccffcc' };

            return (
              <tr key={contrato.id} style={rowStyle}>
                <td>{contrato.numeroContrato}</td>
                <td>{contrato.dataVigencia}</td>
                <td>{contrato.condutorResponsavel}</td>
                <td>{contrato.placa}</td>
                <td>{contrato.modelo}</td>
                <td>{contrato.kmAtual}</td>
                <td>{contrato.kmMediaMensal}</td>
                <td>{contrato.observacoes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContractTable;
