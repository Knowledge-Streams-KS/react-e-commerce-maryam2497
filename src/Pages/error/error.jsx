import './error.css'
import { Link } from 'react-router-dom';
const Error = () => (
  <div class="d-flex align-items-center justify-content-center vh-100">
  <div class="text-center">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="white"> <span class="text-danger">Opps!</span> Page not found.</p>
      <p class="white-small">
          The page you’re looking for doesn’t exist.
        </p>
        <Link to='/' className='btn btn-primary'>Go Home</Link>
  </div>
</div>
);

export default Error;