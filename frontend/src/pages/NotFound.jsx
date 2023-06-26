import { Link } from "react-router-dom";
import '../styles/NotFound.css'

export default function NotFoundPage() {
  return <div className="not-found-container">
    <div>Page not found!</div>
    
    
    

    <p>Go to the <Link to="/">Homepage</Link></p>
  </div>;
}
