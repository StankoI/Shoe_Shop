import AddColor from "../../compoments/addColor/addColor";
import ColorList from "../../compoments/colorList/colorList";

const ColorLayout = () => {

    return(
        <div style={{marginTop:"4rem"}}>
            <AddColor/>
            <ColorList/>
        </div>
    )
}

export default ColorLayout;