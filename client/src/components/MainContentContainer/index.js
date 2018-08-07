import React from 'react';
import { Container } from 'reactstrap';

const MainContentContainer = props => {
    return (
        <main>
            <Container>
                {props.children}
            </Container>
        </main>
    );
};

export default MainContentContainer;