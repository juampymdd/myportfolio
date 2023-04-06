import Link from "next/link";
import Layout from "../components/layout";

const NotFound = () => (
  <Layout>
    <div className="row justify-content-center align-items-center">
      <div className="row ">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <h1 className="text-info">404 </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <h5>Page not found</h5>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 d-flex align-items-center justify-content-center">
        <div class="alert alert-info w-100 text-center" role="alert">
          Puede redirigirse a la <Link href="/" className="alert-link">Home</Link>
        </div>
          
        </div>
      </div>
    </div>

  </Layout>
);

export default NotFound;