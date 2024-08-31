// src/context/UserContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const UserContext = createContext();

// Provedor do contexto
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'João da Silva', email: 'joao.silva@example.com' },
    { id: 2, name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { id: 3, name: 'Pedro Santos', email: 'pedro.santos@example.com' }
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);

  // Função para adicionar um novo usuário
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Função para editar um usuário existente
  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    if (currentUser.id === updatedUser.id) {
      setCurrentUser(updatedUser);
    }
  };

  // Função para selecionar um usuário
  const selectUser = (userId) => {
    const user = users.find(user => user.id === userId);
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, addUser, updateUser, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar o contexto
export const useUser = () => useContext(UserContext);
