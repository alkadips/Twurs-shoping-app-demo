import React, { useState } from "react";
import EditProduct from "./EditProduct";
import ViewProduct from "./ViewProduct";

const Addproduct = () => {
  const productData = [
    {
      id: 1,
      name: "Dell",
      price: "23",
      category: ["laptop", "Android Phones", "Guitars"],
      descriptions: "hi",
      imgUpload: "",
    },
    {
      id: 2,
      name: "Samsand",
      price: "100",
      category: ["laptop", "Android Phones", "Guitars"],
      descriptions: "hello",
      imgUpload: "",
    },
    {
      id: 3,
      name: "Guitar",
      price: "200",
      category: ["laptop", "Android Phones", "Guitars"],
      descriptions: "how are you",
      imgUpload: "",
    },
  ];
  const initialFormState = {
    id: null,
    name: "",
    price: "",
    category: ["laptop", "Android Phones", "Guitars"],
    descriptions: "",
    imgUpload: "",
  };

  const [products, setproducts] = useState(productData);

  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(initialFormState);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setproducts([...products, product]);
    alert("product added successfully");
  };

  const deleteProduct = (id) => {
    setEditing(false);
    setproducts(products.filter((product) => product.id !== id));
    alert("product deleted successfully");
  };
  const editRow = (product) => {
    setEditing(true);
    setCurrentProduct(product);
  };

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);
    setproducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
    alert("product updated successfully");
  };

  return (
    <div className="container">
      <h1>Product Crud Operations</h1>
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <button className="success-button" type="button">
              {editing ? "Edit Product" : "Add Product"}
            </button>
            <EditProduct
              editing={editing}
              setEditing={setEditing}
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
              updateProduct={updateProduct}
              addProduct={addProduct}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2 className="view-products">View products</h2>
          <ViewProduct
            products={products}
            editRow={editRow}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
