import React, { useState, useEffect } from "react";

const EditProduct = props => {
  const initialFormState = { id: null, name: "", price: "",category:"",descriptions:"",imgUpload:"" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username||!user.price||!user.category||!user.descriptions||!user.imgUpload) return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.price}
        onChange={handleInputChange}
      />
      <label>Category</label>
     <select name="category"value={user.category} onChange={handleInputChange}>
     <option value=""></option>
            <option value="Laptop">Laptop</option>
            <option value="Android Phones">Android Phones</option>
            <option value="Guitars">Guitars</option>
     </select>
     <label>Descriptions</label>
     <input
        type="text"
        name="descriptions"
        value={user.descriptions}
        onChange={handleInputChange}
      />
       <label>Product Img</label>
     <input
        type="file"
        name="imgUpload"
        value={user.imgUpload}
        onChange={handleInputChange}
      />
      <button>{props.editing ? "Update user" : "Add user"}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditProduct;
