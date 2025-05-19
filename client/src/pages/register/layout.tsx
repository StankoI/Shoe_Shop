import CreateAccount from "../../components/layouts/createAccountComponent/createAccountComponent";
import JoinOurCommunity from "../../components/layouts/joinOurCommunity/JoinOurCommunity";
import RegisterComponent from "../../components/layouts/register/registerComponent";

const RegisterLayout = () => {
    return (
        <div className="registerPage">
            <CreateAccount/>
            <RegisterComponent/>
            <JoinOurCommunity/>
        </div>
    );
}

export default RegisterLayout;