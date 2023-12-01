// IMPORTANDO OS COMPONENTES //
import React from 'react';
import { Import } from './utils/import.jsx';
import { Title, Text } from './components/fonts.jsx';

class App extends React.Component {
  render() {
    return (
        <>
        <Import />
        <Text customClass='text-primary' text='teste' />
        </>
    );
  }
}

// EXPORTANDO A PÁGINA //
export default App;