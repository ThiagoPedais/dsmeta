import logo from '../../assets/images/logo.svg'
import './styles.css'




const Header = () => {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/thiago_pedais/">@thiagopedais</a>
                </p>
            </div>
        </header>
    )
}


export default Header;