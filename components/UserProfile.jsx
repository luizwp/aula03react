import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const UserProfile = () => {
  const { currentUser, updateUser } = useUser();
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({ ...currentUser });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    updateUser(userData);
    setEditing(false);
  };

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      {editing ? (
        <div>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <p><strong>Nome:</strong> {currentUser.name}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
