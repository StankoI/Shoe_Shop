import AddColor from "../../compoments/addColor/addColor";
import ColorList from "../../compoments/colorList/colorList";

const ColorLayout = () => {

    return(
        <div style={{marginTop:"3.5rem", background:"white", width:"100vw", height:"100vh"}}>
            <AddColor/>
            <ColorList/>
        </div>
    )
}

export default ColorLayout;