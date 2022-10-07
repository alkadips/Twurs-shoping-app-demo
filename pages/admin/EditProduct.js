import React, { useState, useEffect } from "react";

const EditProduct = props => {
  const initialFormState = { id: null, name: "", price: "",category:[''],descriptions:"",imgUpload:"" };
  const [product, setProduct] = useState(
    props.editing ? props.currentProduct : initialFormState
  );

  const handleInputChange = event => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    setProduct(props.currentProduct);
  }, [props]);

  const resetAddProduct = () => {
    props.setEditing(false);
    setProduct(initialFormState);
    props.setCurrentProduct(initialFormState);
  };

  return (
    <form style={{textAlign:"center",margin:'0 auto',width:"50%",border:'2px solid',padding:"20px"}}
      onSubmit={event => {
        event.preventDefault();
        if (!product.name ||!product.price||!product.category||!product.descriptions||!product.imgUpload) return;

        props.editing ? props.updateproduct(product.id, product) : props.addProduct(product);
        resetAddProduct();
      }}
    >
        <div>
      <label>Name:</label>
      <input style={{marginLeft:'10px'}}
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      />
      </div>
      <div>
      <label>Price:</label>
      <input style={{marginLeft:'10px',marginTop:"10px"}}
        type="text"
        name="price"
        value={product.price}
        onChange={handleInputChange}
      />
      </div>
      <div>
      <label>Category:</label>
     <select style={{marginLeft:'10px',marginTop:"10px"}} name="category"value={product.category} onChange={handleInputChange}>
     <option value=""></option>
            <option value="Laptop">Laptop</option>
            <option value="Android Phones">Android Phones</option>
            <option value="Guitars">Guitars</option>
     </select>
     </div>
     <div>
     <label>Descriptions:</label>
     <input style={{marginLeft:'10px',marginTop:"10px"}}
        type="text"
        name="descriptions"
        value={product.descriptions}
        onChange={handleInputChange}
      />
      </div>
      <div>
       <label>Product Img:</label>
     <input style={{marginLeft:'10px',marginTop:"10px"}}
        type="file"
        name="imgUpload"
        value={product.imgUpload}
        onChange={handleInputChange}
      />
      </div>

      <button style={{marginTop:"10px"}}  className="success-button">{props.editing ? "Update Product" : "Add Product"}</button>
      {props.editing && (
        <button onClick={resetAddProduct} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditProduct;
