import React from 'react';
import styled from 'styled-components';
import Hero from 'bulma/components/hero';
import Container from 'bulma/components/container';
import Content from 'bulma/components/content';
import Footer from 'bulma/components/footer';

const PageFooter = () => (
    <Footer>
        <Container>
            <Content style={{ textAlign: 'center' }}>
                <p>
                    <strong>Bulma</strong>
                    by
                    <a href="http://jgthms.com">Jeremy Thomas</a>
                    . The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">
                        MIT
                    </a>
                    . The website content is licensed
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                        CC BY NC SA 4.0
                    </a>
                    .
                </p>
            </Content>
        </Container>
    </Footer>
);

export default PageFooter;
