/* IMPORTANDO BIBLIOTECAS */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* IMPORTANDO ROTAS */
import MainPage from './views/public/MainPage.jsx';
import ProfilePage from './views/public/ProfilePage.jsx';
import NotFoundPage from './views/public/NotFoundPage.jsx';

/* COMPONENTES */
class App extends React.Component {
  render() {
    return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
    );
  }
}

/* EXPORTANDO PÁGINA */
export default App;