import React from 'react';
import { Container } from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Container>
                <div className="header-content">
                    <div className="header-title text-center">
                        <h1>Toolbox Application</h1>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;