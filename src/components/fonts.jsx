// IMPORTANDO OS COMPONENTES//
import React from 'react';

function Title(props) {
    const { text, className } = props;
    return(
        <>
        <Title className={`${className}`}>{text}</Title>
        </>
    );
}

function Text(props) {
    const { text, className } = props;
    return(
        <>
        <p className={`${className}`}>{text}</p>
        </>
    );
}

// EXPORTANDO OS COMPONENTES //
export { Title, Text };