import Link from 'next/link'
const Navbar =() => (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link href="/"><a className="navbar-brand">BitzPrice</a></Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">       
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>       
      </ul>     
    </div>
  </div>
</nav>
);

export default Navbar;