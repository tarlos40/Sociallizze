// IMPORTANDO OS COMPONENTES//
import React from 'react';

function Title(props) {
    const { text, customClass } = props;
    return(
        <>
        <Title className={`${customClass}`}>{text}</Title>
        </>
    );
}

function Text(props) {
    const { text, customClass } = props;
    return(
        <>
        <p className={`${customClass}`}>{text}</p>
        </>
    );
}

// EXPORTANDO OS COMPONENTES //
export { Title, Text };