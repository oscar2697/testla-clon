import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const[burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt=''/>
            </a>
            <Menu>
            {cars && cars.map((car, index) => (
                <a key={index} href='#'>{car}</a>
            ))}
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panels</a>
                <a href='#'>Powerwall</a>
            </Menu>
            <RigthMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <a href='#'>Menu</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RigthMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a key={index} href='#'>{car}</a></li>
                ))}
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>CyberTruck</a></li>
                <li><a href='#'>Roadster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 50px;
    position: fixed;
    display: flex;
    align-itmes: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.8;
    
    a{
        font-weight: 550;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RigthMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 550;
        text-transform: uppercase;
        padding: 0 10px;
        margin-right: 10;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;

        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`