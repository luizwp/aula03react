import React from 'react';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { users, selectUser, currentUser } = useUser();

  return (
    <header>
      <h1>Olá, {currentUser.name}!</h1>
      <select onChange={(e) => selectUser(Number(e.target.value))} value={currentUser.id}>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
  