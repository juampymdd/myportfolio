import Link from 'next/link'


const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-custom-primary navbar-dark fixed-top">
  <div className="container">
    <Link className="navbar-brand" href="/">
      <h1 className='d-flex flex-row align-items-center'>
          <span >{">"}</span>
          <span className='underline'>_</span>
      </h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="#skils" className="nav-link">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#experience" className="nav-link">
          Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link href="https://github.com/juampymdd" className="nav-link" target="_blank">
            <div className='d-flex flex-row gap-1 align-items-center'>
              <img alt="githubIcon" src="/images/github.svg" style={{width:'18px', height: 'auto'}}></img>
              <span>Github</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Navbar