import React from 'react';
import styled from 'styled-components';
import Navbar from 'bulma/components/navbar';
import Container from 'bulma/components/container';

const MyNavbar = styled(Navbar)`
    box-shadow: 0 2px 0 0 #f5f5f5;
`;

export default () => (
    <MyNavbar>
        <Container>
            <Navbar.Brand>
                <Navbar.Item href="#">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width="112"
                        height="28"
                    />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item Dropdown hoverable>
                        <Navbar.Link>Docs</Navbar.Link>
                        <Navbar.Dropdown boxed>
                            <Navbar.Item href="#">Home</Navbar.Item>
                            <Navbar.Item href="#">List</Navbar.Item>
                            <Navbar.Item href="#">Another Item</Navbar.Item>
                            <Navbar.Divider />
                            <Navbar.Item active href="#">
                                Active
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item href="#">Second</Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item Dropdown hoverable>
                        <Navbar.Link>Other Menu</Navbar.Link>
                        <Navbar.Dropdown right boxed>
                            <Navbar.Item href="#">
                                this is aligned to the right
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Container>
    </MyNavbar>
);
