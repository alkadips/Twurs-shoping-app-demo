import bcrypt from 'bcryptjs';

const data = {
  products: [
    {
      name: "Laptop",
      slug: "free-Laptop",
      category: "Laptop",
      image: "/Images/lap1.jpg",
      price: 70,
      brand: "Dell",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular Laptop",
    },
    {
      name: "Android Phone",
      slug: "Android-Phone",
      category: "Phone",
      image: "/Images/android.jpg",
      price: 90,
      brand: "Sony",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular Phone",
    },
    {
      name: "Guitars",
      slug: "Guitars",
      category: "Guitars",
      image: "/Images/guitars.jpg",
      price: 90,
      brand: "Fender",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking Guitars",
    },
    {
      name: "Laptop",
      slug: "free-Laptop1",
      category: "Laptop",
      image: "/Images/lap1.jpg",
      price: 70,
      brand: "Dell",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular Laptop",
    },
    {
      name: "Guitars",
      slug: "Guitars1",
      category: "Guitars",
      image: "/Images/guitars.jpg",
      price: 90,
      brand: "Fender",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking Guitars",
    },
    {
      name: "Guitars",
      slug: "Guitars2",
      category: "Guitars",
      image: "/Images/guitars.jpg",
      price: 90,
      brand: "Fender",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking Guitars",
    },
    {
      name: "Android Phone",
      slug: "Android-Phone1",
      category: "Phone",
      image: "/Images/android.jpg",
      price: 90,
      brand: "Sony",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular Phone",
    },
    {
      name: "Android Phone",
      slug: "Android-Phone2",
      category: "Phone",
      image: "/Images/android.jpg",
      price: 90,
      brand: "Sony",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular Phone",
    },
  ],
  users: [
    {
      name: 'Alka',
      email: 'rashinkaralka@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};
export default data;
