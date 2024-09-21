import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="centered-container flex items-center justify-center flex-col gap-4" style={{height : '98vh'}}>
      <h1>404 - Page Not Found</h1>
      <Link to='/home'>Go Back</Link>
    </div>
  );
};

export default PageNotFound;
