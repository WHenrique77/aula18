import React, { useState } from 'react';

const ListaDeTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)} 
        placeholder="Digite uma tarefa" 
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;