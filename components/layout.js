import Head from 'next/head';
import Navbar from './NavBar';
const Layout = (props) => (
<div>
     <Head>
         <title>BitzPrice</title>
         <link rel="stylesheet"
         href="https://bootswatch.com/3/cerulean/bootstrap.min.css"/>
      </Head>
     <Navbar/>
     <div className="container">
     {props.children}
     </div>
</div>

);

export default Layout;