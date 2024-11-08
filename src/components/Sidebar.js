import React, { useState } from 'react';
import './Sidebar.css'; 
import AddContratoModal from './AddContratoModal'; 
import AtualizarKmModal from './AtualizarKmModal'; 
import FazerRevisaoModal from './FazerRevisaoModal'; 
import SubstituirVeiculoModal from './SubstituirVeiculoModal'; 
import ApagarContratoModal from './ApagarContratoModal'; 
import HistoricoModal from './HistoricoModal'; 

const Sidebar = ({ handleModalClose }) => {
  const [isAddContratoModalOpen, setIsAddContratoModalOpen] = useState(false);  
  const [isAtualizarKmModalOpen, setIsAtualizarKmModalOpen] = useState(false);  
  const [isFazerRevisaoModalOpen, setIsFazerRevisaoModalOpen] = useState(false);  
  const [isSubstituirVeiculoModalOpen, setIsSubstituirVeiculoModalOpen] = useState(false);  
  const [isApagarContratoModalOpen, setIsApagarContratoModalOpen] = useState(false);  
  const [isHistoricoModalOpen, setIsHistoricoModalOpen] = useState(false);

  // Funções para abrir os modais
  const openAddContratoModal = () => setIsAddContratoModalOpen(true);
  const openAtualizarKmModal = () => setIsAtualizarKmModalOpen(true);
  const openFazerRevisaoModal = () => setIsFazerRevisaoModalOpen(true);
  const openSubstituirVeiculoModal = () => setIsSubstituirVeiculoModalOpen(true);
  const openApagarContratoModal = () => setIsApagarContratoModalOpen(true);
  const openHistoricoModal = () => setIsHistoricoModalOpen(true);

  // Funções para fechar os modais
  const closeModal = (modalName) => {
    switch(modalName) {
      case 'addContrato': 
        setIsAddContratoModalOpen(false); break;
      case 'atualizarKm':
        setIsAtualizarKmModalOpen(false); break;
      case 'fazerRevisao': 
        setIsFazerRevisaoModalOpen(false); break;
      case 'substituirVeiculo': 
        setIsSubstituirVeiculoModalOpen(false); break;
      case 'apagarContrato':
        setIsApagarContratoModalOpen(false); break;
      case 'historico':
        setIsHistoricoModalOpen(false); break;
      default:
        break;
    }
    // Chama a função de atualização dos contratos ao fechar qualquer modal
    handleModalClose(); // Chama a função para atualizar a tabela de contratos
  };

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={openAddContratoModal}>Adicionar Contrato</button>
      <button className="sidebar-button" onClick={openAtualizarKmModal}>Atualizar KM</button>
      <button className="sidebar-button" onClick={openFazerRevisaoModal}>Fazer Revisão</button>
      <button className="sidebar-button" onClick={openSubstituirVeiculoModal}>Substituir Veículo</button>
      <button className="sidebar-button" onClick={openApagarContratoModal}>Apagar Contrato</button>
      <button className="sidebar-button" onClick={openHistoricoModal}>Histórico</button>

      {/* Modals */}
      {isAddContratoModalOpen && <AddContratoModal closeModal={() => closeModal('addContrato')} />}
      {isAtualizarKmModalOpen && <AtualizarKmModal closeModal={() => closeModal('atualizarKm')} />}
      {isFazerRevisaoModalOpen && <FazerRevisaoModal closeModal={() => closeModal('fazerRevisao')} />}
      {isSubstituirVeiculoModalOpen && <SubstituirVeiculoModal closeModal={() => closeModal('substituirVeiculo')} />}
      {isApagarContratoModalOpen && <ApagarContratoModal closeModal={() => closeModal('apagarContrato')} />}
      {isHistoricoModalOpen && <HistoricoModal closeModal={() => closeModal('historico')} />}
    </div>
  );
};

export default Sidebar;
