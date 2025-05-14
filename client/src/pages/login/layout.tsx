import Benefits from "../../components/layouts/benefits/benefits";
import LoginComponent from "../../components/layouts/login/loginComponent";
import WelcomeBack from "../../components/layouts/welcomeBack/welcomeBack";

const LoginLayout = () => {
    return(
        <div className="loginPage">
            <WelcomeBack/>
            <LoginComponent/>
            <Benefits/>
        </div>
    );
}

export default LoginLayout;