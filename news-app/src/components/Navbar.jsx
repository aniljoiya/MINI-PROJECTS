import React from 'react'

const Navbar = ({ category, setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="#"><img src="/NewsApp.svg" alt="NewsApp Logo" width="60" height="60" className="me-2 "/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" style={{ cursor: "pointer" }}>Technology</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
