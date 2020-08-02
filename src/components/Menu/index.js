import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu() { // Todo componente é inicia com Caixa Alta
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Cloudflix logo" />   
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;