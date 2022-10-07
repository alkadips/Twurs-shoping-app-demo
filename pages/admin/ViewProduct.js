import React from "react";

const ViewProduct = props => (
  <table style={{width:'100%',border:"1px solid"}}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Descriptions</th>
        <th>Product Img</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.descriptions}</td>
            <td>{product.imgUpload}</td>

            <td>
              <button
                className="button muted-button edit-button "
                onClick={() => {
                  props.editRow(product);
                }}
              >
                Edit Product
              </button>
              <button
                className="button muted-button delete-button"
                onClick={() => props.deleteUser(product.id)}
              >
                Delete product
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Product</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ViewProduct;
