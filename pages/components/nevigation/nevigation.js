import Link from 'next/link';

export default function NevigationBar() {
  return ( <
    >
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
    src = "/Logo_white.webp"
    className = "site_logo_1"
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
    ul id = "Nav-list"
    className = "navbar-nav ml-auto" >
    <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/#" >
    Home <
    /a> <
    /
    li >

    <
    li className = "nav-item dropdown" >
    <
    a className = "nav-link dropdown-toggle"
    href = "#"
    id = "navbarDropdown"
    role = "button"
    data-toggle = "dropdown"
    aria-haspopup = "true"
    aria-expanded = "false" >
    Services <
    /a> <
    div className = "dropdown-menu"
    aria-labelledby = "navbarDropdown" >
    <
    a className = "dropdown-item"
    href = "/components/services/services" > SERVICES < /a> <
    a className = "dropdown-item"
    href = "/components/services/services/#supplyChain" > Suppy chain management < /a> <
    a className = "dropdown-item"
    href = "/components/services/services/#quality" > Quality compliance < /a> <
    /div> <
    /li>

    <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/#landingUS" >
    Why Us <
    /a> <
    /
    li > <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/components/about/about-us" >
    About Us <
    /a> <
    /
    li > <
    li className = "nav-item" >
    <
    a className = "nav-link"
    href = "/components/contact/contact" > Contact < /a> < /
    li > <
    /ul> <
    div id = "number"
    className = "number_2" >
    <
    a href = "/components/products/products" >
    View Products < /a> <
    /div> < /
    div >

    {
      /* scroll progress indicator */ } <
    div id = "progress-container" >
    <
    div className = "progress-bar"
    id = "myBar" > < /div> <
    /div> <
    /nav>

    <
    /
    div >
    <
    /div> <
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
        .navbar-light .navbar-toggler {
          color: blue;
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
      }

    .nav-link:hover {
        color: #48c2c8!important;
    }

    .active {
        color: #48c2c8!important;
    }

      #navnav {
        letter-spacing: .02em;
        font-size: .75em;
        text-transform: uppercase;
        transition: 0.5s;
        height: 5em;
        top: 1rem;
        }

        .navnav_Scrolling {
          letter-spacing: .02em;
          font-size: .75em;
          text-transform: uppercase;
          transition: 0.5s;
          height: 5em;
          top: 1rem;
          }

          .bg-light{
           background-color: #fff0!important;
         }

      .fixed-top{
        top: 0;
        transition: 0.5;
      }

        .number_1 {
        background-color: #fff0;
        padding: .5em .85em .5em .7em;
        border: 1px solid #FFF;
        border-radius: 3em;
        font-weight: 300;
        margin-left: 1em;
        margin-right: 2em;
        color: #FFF;
        transition: .5s;
      }

      .number_2 {
      background-color: rgb(50,58,107);
      padding: .5em .85em .5em .7em;
      border-radius: 3em;
      font-weight: 300;
      margin-left: 1em;
      margin-right: 2em;
      transition: .5s;
    }

      .number_2:hover {
        color: rgb(50,58,107);
        background-color: #fff;
        border: 1px solid rgb(50,58,107)!important;
      }

      .number_2 a {
          color: #fff!important;
      }
      .number_2 a:hover {
          color: rgb(50,58,107)!important;
          text-decoration: none;
      }

      .number_1:hover {
          background-color: #fff0;
          border: 1px solid #fff;
          cursor: pointer;
          color: #fff!important;
      }

      .number_1 a {
          color: #FFF!important;
      }
      .number_1 a:hover {
          color: #fff!important;
          text-decoration: none;
      }

      #logo_sm {
        margin-left: 2.5em;
      }

      .site_logo_1{
        margin: 2.5em;
        width: 5.5em;
      }

      .site_logo_2 {
        margin: 2.5em;
        width: 9.5em;
      }
@media only screen and (max-width: 990px) {
      #progress-container {
        visibility: hidden!important;
      }
      #navnav {
        height: 6em!important;
      }
      #logo_sm {
        margin-left: .5em;
      }

      .site_logo_1{
        margin: .5em;
      }
      .site_logo_2{
        margin: .5em;
      }
      #navbarSupportedContent {
        background-color: rgba(50, 58, 107, 0.8) !important;
        border-radius: .5em;
        margin-top: 2em;
        padding: 1.5em;
      }
      .number_1 {
      background-color: #fff;
      padding: .5em .85em .5em .7em;
      border: 1px solid rgb(50,58,107);
      border-radius: 3em;
      font-weight: 300;
      margin-left: 1em;
      margin-right: 1em;
      margin-top: .5em;
      margin-bottom: 1em;
      text-align: center;
      transition: .5s;
    }
    .number_1 a {
        color: rgb(50,58,107)!important;
    }
    .navbar-light .navbar-nav .nav-link {
      color: #FFF;
    }
}
        `
    } < /style> <
    />
  )
}
