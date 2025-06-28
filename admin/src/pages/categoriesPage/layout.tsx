import AddCategory from "../../compoments/addCategory/addCategory";
import CategoriesList from "../../compoments/categoriesList/categoriesList";

const CategoriesLayout = () => {

    return(
        <div style={{marginTop:"3.5rem", background:"white", width:"100vw", height:"100vh" }}>
            <AddCategory/>
            <CategoriesList/>
        </div>
    )
}

export default CategoriesLayout;