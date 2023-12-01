// IMPORTANDO OS COMPONENTES //
import React from 'react';
import { Import } from './utils/import.jsx';
import { Title, Text } from './components/fonts.jsx';
import { Input } from './components/input.jsx';

class App extends React.Component {
  render() {
    return (
        <>
        <Import />
        <Text className='text-primary' text='teste' />
        <Input placeholder='E-mail' icon='bi-envelope' />
        </>
    );
  }
}

// EXPORTANDO A PÁGINA //
export default App;