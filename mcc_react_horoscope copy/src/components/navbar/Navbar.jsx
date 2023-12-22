import logo from "./logo.png"
import NavbarStyle from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={NavbarStyle.navbar}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className={NavbarStyle.right}>
                <a href="#Horoscope">Horoscope</a>
                <a href="#Daily">Daily</a>
                <a href="#Tarot">Tarot</a>
                <a href="#Article">Article</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    )
}
export default Navbar;