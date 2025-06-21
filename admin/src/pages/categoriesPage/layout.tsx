import AddCategory from "../../compoments/addCategory/addCategory";
import CategoriesList from "../../compoments/categoriesList/categoriesList";

const CategoriesLayout = () => {

    return(
        <div style={{marginTop:"4rem"}}>
            <AddCategory/>
            <CategoriesList/>
        </div>
    )
}

export default CategoriesLayout;