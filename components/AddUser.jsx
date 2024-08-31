import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const AddUser = () => {
  const { addUser } = useUser();
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(), // ID único baseado no timestamp
      ...newUser
    };
    addUser(user);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Adicionar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddUser;
