import React from 'react';
import styled from 'styled-components';
import Columns from 'bulma/components/columns';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import Heading from 'bulma/components/heading';
import BoxIcon from 'components/BoxIcon';
import yingYang from '../../assets/ico-ying-yang.png';
import iconStones from '../../assets/ico-stones.png';
import iconWheel from '../../assets/ico-cog-wheel.png';

const SectionContainer = styled(Section)`
    background-image: url('pattern-chakras-alt-color.jpg');
`;

const AboutPanel = () => {
    return (
        <SectionContainer>
            <Container>
                <Heading level={3} className="is-text-centered ">
                    Why ask your Psychic?
                </Heading>

                <Columns>
                    <BoxIcon
                        icon={yingYang}
                        heading="Transparent Pricing"
                        text="We at AskYourPsychic believe our members should always know the total cost of their session (before it begins)."
                    />
                    <BoxIcon
                        icon={iconStones}
                        heading="Compassionat Psychics"
                        text="Caring, compassionate and knowledgeable Advisors and Customer Care Specialists.Through our Kindness Initiative, your purchases help support communities in need."
                    />
                    <BoxIcon
                        icon={iconWheel}
                        heading="Your Satisfaction"
                        text="We at AskYourPsychic believe our members should always know the total cost of their session (before it begins)."
                    />
                </Columns>
            </Container>
        </SectionContainer>
    );
};

export default AboutPanel;
