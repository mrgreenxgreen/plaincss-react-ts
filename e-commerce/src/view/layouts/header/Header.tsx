import Navigation from "../../features/navigation/Navigation.tsx";
import CSS from "./Header.module.css"

const Header = () => {
    return (
        <div className={CSS.container}>
            <Navigation/>
        </div>
    );
};

export default Header;
