import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/UI/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0

const HomePage = async () => {

    const billboard = await getBillboard("8771f883-8144-4262-a68e-9bb5e7180598")
    const products = await getProducts({isFeatured: true})

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured products" items={products}/>
            </div>
            </div>
        </Container>
     );
}
 
export default HomePage;