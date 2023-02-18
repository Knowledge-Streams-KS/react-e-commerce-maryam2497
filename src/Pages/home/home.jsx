import { Link } from "react-router-dom";
import "./home.css";

const Home = () => (
    <div className="home">
      <h1>Welcome to our website!</h1>
      <p>We offer a wide range of products and categories to suit your needs.</p>
      <div className="btn-group">
        <Link to="/product" className="btn">Products</Link>
        <Link to="/categories" className="btn">Categories</Link>
       
      </div>
  </div>
);

export default Home;
