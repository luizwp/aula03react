import React from 'react';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import AddUser from './components/AddUser';

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <main>
          <UserProfile />
          <AddUser />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
