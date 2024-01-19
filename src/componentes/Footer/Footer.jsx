import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='contenedor-footer'>
                <Link className='logo2' to="/">
                    <img src="../img/Logo Claro.jpg" alt="Logo Claro The Petkery" />
                </Link>

                <div>
                    <h4>Contacto</h4>
                    <p> Teléfono: 11 2222 3333</p>
                    <p> Horario de Atención: De 09:00hs a 17:00hs </p>
                </div>

                <div className='redes-sociales'>
                    <h4>Siguenos</h4>
                    <img  className='rrss-icon' src="./img/whatsapp.png" alt="WhatsApp logo"/>
                    <img  className='rrss-icon' src="./img/kakao-talk.png" alt="KakaoTalk logo"/>
                    <img  className='rrss-icon' src="./img/facebook.png" alt="Facebook logo"/>
                </div>
            </div>
            
            <div class="bottom">
                <p> © 2023 - Proyecto Final CoderHouse | Giselle Auzoberry </p>
            </div>
        </footer>
    )
}

export default Footer