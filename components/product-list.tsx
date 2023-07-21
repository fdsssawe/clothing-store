import { Product } from "@/types";
import NoResults from "./UI/no-results";

interface ProductListProps{
    title: string,
    items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({items, title}) => {
    return (
    <div className="h-3">
        <h3 className="text-bold text-3xl">{title}</h3>
        {items.length === 0 && <NoResults/>}
    </div>  
    );
}
 
export default ProductList;