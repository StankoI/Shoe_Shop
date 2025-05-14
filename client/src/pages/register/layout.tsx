import CreateAccount from "../../components/layouts/createAccountComponent/createAccountComponent";
import RegisterComponent from "../../components/layouts/register/registerComponent";

const RegisterLayout = () => {
    return (
        <div className="registerPage">
            <CreateAccount/>
            <RegisterComponent/>
        </div>
    );
}

export default RegisterLayout;