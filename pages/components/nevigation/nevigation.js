import Link from 'next/link';

export default function NevigationBar() {
  return (
  <>
    <
    div className = "row" >
    <
    div id = "navMenu" >
    <
    nav id = "navnav"
    className = "navbar navbar-expand-lg navbar-light bg-light fixed-top" >
    <
    a className = "navbar-brand"
    href = "/#" >
    <
    img id = "logo_sm"
    src = "/Logo.webp"
    width = "150em"
    className = "tooltip-test"
    title = "Take me home"
    alt = "logo" / >
    <
    /a> <
    button className = "navbar-toggler"
    type = "button"
    data-toggle = "collapse"
    data-target = "#navbarSupportedContent"
    aria-controls = "navbarSupportedContent"
    aria-expanded = "false"
    aria-label = "Toggle navigation" >
    <
    span className = "navbar-toggler-icon" > < /span> < /
    button >

    <
    div className = "collapse navbar-collapse"
    id = "navbarSupportedContent" >

    <
    ul className = "navbar-nav ml-auto" >
    <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/#" > 
    Home 
    </a>
    < /
    li > 
    
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/components/services/services">SERVICES</a>
          <a className="dropdown-item" href="/components/services/services/#supplyChain">Suppy chain management</a>
          <a className="dropdown-item" href="/components/services/services/#quality">Quality compliance</a>
        </div>
      </li>
    
     <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/#landingUS" > 
    Why Us 
    <
        /a>
    < /
    li > <
    li className = "nav-item" >
    <
    a className = "nav-link" href="/components/about/about-us"
     >
     About Us 
     <
        /a>
     < /
    li > <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/components/contact/contact" > Contact < /a> < /
    li > <
    /ul> <
    div className = "number" >
    <a href="/components/products/products">
     Browse Products</a>
     <
    /div> < /
    div > 
    
    {/* scroll progress indicator */}
        <div id="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
    <
    /nav> 
    
    < /
    div >
    </div>
<
    style jsx global > {
      `
        #progress-container {
            left: 0;
            bottom: 0;
          width: 100%;
          height: 4.8px;
          background: #f0f0f0;
          position: absolute;
          visibility: hidden;
          transition: 0.3s;
          
}

    .progress-bar {
          height: 4px;
          background: rgb(237,29,95);
          width: 0%;
}

      
      .dropdown-menu {
          min-width: 100%;
          font-size: .95em;
          background-color: rgb(50,58,107);
          text-transform: uppercase;
          opacity: 1;
      }
      
      .dropdown-item {
          color: white;
      }
      
      .nav-item {
        margin-right: 1em;
        color: #fff;
      }

      .nav-link {
        color: #fff!important;
      }
        
    .nav-link:hover {
        color: #48c2c8!important;
    }
    
    .active {
        color: #48c2c8!important;
    }

      #navnav{
        background-color: #fff0!important;
        letter-spacing: .02em;
        font-size: .85em;
        text-transform: uppercase;
        transition: 0.5s;
        top: 1.5rem;
        }

      .bg-light{
        background-color: #fff0!important;
      }

      .fixed-top{
        top: 0;
        transition: 0.5;
      }
      
        .number {
        background-color: #fff;
        padding: .5em .85em .5em .7em;
        border-radius: 3em;
        font-weight: 300;
        margin-left: 1em;
        margin-right: 2em;
        color: rgb(50,58,107);
        transition: .5s;
      }
      
      .number:hover {
          background-color: #fff0;
          border: 1px solid #fff;
          cursor: pointer;
          color: #fff;
      }
      
      .number a {
          color: rgb(50,58,107);
      }
      .number a:hover {
          color: #fff;
          text-decoration: none;
      }

      #logo_sm {
        margin-left: 2.5em;
      }
        `
    } < /style>
  </>
   )
}

