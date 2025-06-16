import Orders from "../../components/orders/orders";
import UserInfo from "../../components/userInfo/userInfo";


const UserPageLayout = () => {

    return (
        <div style={{marginTop:"4rem"}}>
            <UserInfo/>
            <Orders/>
        </div>
    )
}

export default UserPageLayout;