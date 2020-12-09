import Link from 'next/link';

export default function Footer() {
  return (
    <
    div className = "row" >
    <
    div className = "col footer" >
        <p>
            +44 12 564 345
        </p>
        <ul id="footer_menu">
            <li>
                <a href="#" className="navLINKS"> Home</a>
            </li>
            <li className="navLINKS dropdown">
        <a className="navLINKS dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/components/services/services/#supplyChain">Suppy chain management</a>
          <a className="dropdown-item" href="/components/services/services/#quality">Quality compliance</a>
        </div>
      </li>
            <li>
                <a href="#landingUS" className="navLINKS">Why Us</a>
            </li>
            <li>
                <Link href="/components/about/about-us" ><a className="navLINKS">About Us</a></Link>
            </li>
            <li>
                <a href="/components/contact/contact" className="navLINKS">Contact</a>
            </li>
        </ul>
        <div className="copyrightTEXT">All rights reserved Hexa 2020<a type="button" data-toggle="modal" data-target="#policyModal" className="privacyLINK"><b>Privacy policy</b></a></div>
        <div className="social_icons">
          <a href="#" className="social_links">
            <img src="/icons/linkedin-in-brands.svg" className="fontAwesome-footer-icons" /></a>
          <a href = "#" className="social_links">
            <img src="/icons/facebook-f-brands.svg" className="fontAwesome-facebook-icon" /></a>
          <a href = "#" className="social_links">
            <img src="/icons/twitter-brands.svg" className="fontAwesome-footer-icons" /></a>
        </div>
        <div className="footer_logo">
            <img src="/Logo_white.webp" className="footer_image" />
        </div>

    < /
    div >

    <
    style jsx global > {
      `
      .fontAwesome-footer-icons {
        width: 1.5em;
        margin-left: 2em;
        transition: .5s;
        opacity: .5;

      }
      .fontAwesome-facebook-icon {
        width: .85em;
        margin-left: 2em;
        transition: .5s;
        opacity: .5;
      }

      .fontAwesome-footer-icons:hover, .fontAwesome-facebook-icon:hover{
        opacity: .2;
      }

      .footer {
        width: 100%;
        height: 50vh;
        background-color: #fff;
        align-content: center;
        background-image: url("/footer_background.png");
        background-repeat: none;
        background-size: cover;
        text-align: center;
        padding-top: 3em;
        padding-left: 0;
        padding-right: 0;
      }

      .footer p {
          color: #7f7f7f;
          font-weight: 700;
      }

      #footer_menu {
        margin-left: auto;
        margin-right: auto;
      }

      ul#footer_menu li {
        color: #7f7f7f;
          display: inline;
          margin-right: 1.5em;
      }

      .social_icons {
          margin-left: auto;
          margin-right: auto;
          margin-top: 2em;
      }

      .navLINKS {
          color: #7f7f7f;
          font-size: .8em;
      }

      .navLINKS:hover {
          color: #48c2c8;
          text-decoration: none;
      }

      .privacyLINK {
        line-height: 3em;
        color: #48C2C8!important;
        text-transform: uppercase;
        text-decoration: none;
        transition: .8s;
        margin-left: .8em;
      }

      .copyrightTEXT {
            width: 100%;
            height: 10px;
            color: #7f7f7f;
          bottom: 10%;
          font-size: .7em;
          position: absolute;
          padding-left: .5em;
          padding-right: .5em;
      }

      .footer_logo {
          position: absolute;
          margin-left: 1em;
      }
      .footer_image {
          opacity: 1;
          width: 20em;
          left: 0;
      }

      @media only screen and (max-width: 1024px) {
          .footer {
            height: 45vh;
          }
      }

      @media only screen and (max-width: 768px) {
          .footer_logo{
            visibility: hidden;
          }
          .footer {
            height: 30vh;
          }
          .social_icons {
            margin-left: auto;
            margin-right: auto;
            margin-top: 2em;
          }
      }

      @media only screen and (max-width: 411px) {
          .footer {
            height: 40vh;
            padding-left: 0;
            padding-right: 0;
          }
          #footer_menu {
            padding-left: 0;
          }
          .social_icons {
            left: 30%;
          }
          .copyrightTEXT {
            width: 80%;
            left: 10%;
          }
      `
    } < /style>
    <
    /div>

  )
}
