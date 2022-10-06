import React, { useState } from "react";
import EditProduct from "./EditProduct";
import ViewProduct from "./ViewProduct";

const Addproduct = () => {
  const usersData = [
    { id: 1, name: "Tania", price: "floppydiskette",category:['laptop','Android Phones','Guitars'],descriptions:"hi",imgUpload:"" },
    { id: 2, name: "Craig", username: "siliconeidolon",category:['laptop','Android Phones','Guitars'],descriptions:"hello",imgUpload:"" },
    { id: 3, name: "Ben", username: "benisphere",category:['laptop','Android Phones','Guitars'],descriptions:"how are you",imgUpload:"" }
  ];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>Product Crud Operations</h1>
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
            <EditProduct
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <ViewProduct users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
