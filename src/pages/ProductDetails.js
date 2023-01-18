import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
    const Params = useParams();
    return(
    <>
    <h1>Product Details </h1>
    <p>{Params.productId}</p>
    <p><Link to =".." relative='path'>Back</Link></p>
    </>
    );
}


export default ProductDetailPage;
     