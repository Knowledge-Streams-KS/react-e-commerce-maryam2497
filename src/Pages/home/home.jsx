import { Link } from "react-router-dom";

const Home = () => (
    <div>Home Page
      <br/>
      <br/>
      <Link to="/product">Products</Link>

      <br/>
      <br/>
      <Link to="/categories">Categories</Link>
      <br />
        <br />
        <Link to="/userDetailForm">User Detail Form</Link>
  </div>
);

export default Home;