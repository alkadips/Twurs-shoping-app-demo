import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import Product from "../models/Product";
import data from "../utils/data";
import db from "../utils/db";
import { Store } from "../utils/Store";

const getProducts = (filter, products) => {
  if (filter === "All") return data?.products;
  return products.filter((d) => d.category === filter.toString());
};

export default function Home({ _products }) {
  const [products, setProducts] = useState([..._products]);
  console.log(products);

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  const filterProducts=(e)=>{
    setProducts(getProducts(e.target.value, _products));
  }
  return (
    <Layout title="Home page">
      <div className="row">
        <div className="mb-4 ml-2">
          <span className="mr-2">Select Category</span>
          <select onChange={(e) => filterProducts(e)}>
            <option value="All">All</option>
            <option value="Laptop">Laptops</option>
            <option value="Phone">Android Phones</option>
            <option value="Guitars">Guitars</option>
          </select>
        </div>
        <div className="col-md-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductItem product={product} key={product.slug} addToCartHandler={()=>addToCartHandler(product)}></ProductItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}


export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  console.log("products>>>>",products)
  return {
    props: {
      _products: products.map(db.convertDocToObj),
    },
  };
}
