import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
import Addproduct from './admin/Addproduct';
import Login from './login/Login';
import Register from './register/Register';
export default function Home() {
  return (
   <Layout title="Home page">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
          ></ProductItem>
        ))}
        
      </div>
      <Addproduct/>
      <Login/>
      <Register/>
   </Layout>
  )
}
