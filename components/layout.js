import Navbar from "./navbar";
import Head from "next/head";
const Layout = ({ children }) => (
  <>
    <Head>
      <title></title>
    </Head>
    <Navbar />
    <main className="container-fluid p-4">
      {children}
    </main>
  </>
);

export default Layout;
