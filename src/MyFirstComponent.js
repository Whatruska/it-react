// {
//     text: "My second component"
// }

import styled from 'styled-components';

const CustomLink = styled.a`
    color: red;
    font-size: 24px;
`;

function MyFirstComponent(props) {
    return (
        <CustomLink href="https://google.com">
            {props.text}
        </CustomLink>
    )
}

export default MyFirstComponent;