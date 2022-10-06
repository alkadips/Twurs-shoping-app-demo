import Layout from "../../components/Layout";
import data from "../../utils/data";
import { useRouter } from 'next/router';
export default function ProductScreen(props) {
    const router = useRouter()
    const {slug}=router;
    const product=data.products.find((x)=>x.slug===slug);
    if(!product){
        return<div>Product Not Found</div>;
    }
    return(
        <Layout title={product.name}>
  <div className="py-2">
        <Link href="/">back to products</Link>
      </div>        </Layout>
    )
}