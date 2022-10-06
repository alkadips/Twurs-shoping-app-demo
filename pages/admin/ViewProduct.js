import React from "react";

const ViewProduct = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Descriptions</th>
        <th>Product Img</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.price}</td>
            <td>{user.category}</td>
            <td>{user.descriptions}</td>
            <td>{user.imgUpload}</td>

            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ViewProduct;
