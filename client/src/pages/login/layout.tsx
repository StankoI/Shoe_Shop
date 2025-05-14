import LoginComponent from "../../components/layouts/login/loginComponent";
import WelcomeBack from "../../components/layouts/welcomeBack/welcomeBack";

const LoginLayout = () => {
    return(
        <div className="loginPage">
            <WelcomeBack/>
            <LoginComponent/>
        </div>
    );
}

export default LoginLayout;