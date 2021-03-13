import styled from "styled-components";
import { Link, NavLink, useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    heigth: 100px;
    display: flex;
    justify-content: center;
    padding: 15px;
    width: 100%;
    border-radius: 15px;
`;

const CustomNavigationButton = styled(NavLink)`
    color: black;
    text-decoration: none;
    background-color: transparent;
    margin: 10px;
    padding: 10px;
    border: 1px solid royalblue;
    border-radius: 10px;

    &.active {
        color: red;
        border-color: red;
    }
`;

export const NavigationBar = () => {
    return (
        <Wrapper>
            <CustomNavigationButton to="/" exact>
                Главная
            </CustomNavigationButton>
            <CustomNavigationButton to="/age">
                Вкладка "Возраст"
            </CustomNavigationButton>
            <CustomNavigationButton to="/height">
                Вкладка "Рост"
            </CustomNavigationButton>
            <CustomNavigationButton to="/app">
                App
            </CustomNavigationButton>
        </Wrapper>
    )
}