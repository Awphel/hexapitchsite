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
          <a className="dropdown-item" href="#">Suppy chain management</a>
          <a className="dropdown-item" href="#">Quality compliance</a>
        </div>
      </li>
            <li>
                <a href="#landingUS" className="navLINKS">Why Us</a>
            </li>
            <li>
                <Link href="/components/about/about-us" ><a className="navLINKS">About Us</a></Link>
            </li>
            <li>
                <a href="#" className="navLINKS">Contact</a>
            </li>
        </ul>
        <div className="copyrightTEXT">All rights reserved Hexa 2020<a type="button" data-toggle="modal" data-target="#policyModal" className="privacyLINK"><b>Privacy policy</b></a></div>
        <div className="social_icons">
            <i className="fab fa-linkedin-in fa-2x mr-4" />
            <i className="fab fa-twitter fa-2x mr-4" />
            <i className="fab fa-facebook-f fa-2x" />
        </div>
        <div className="footer_logo">
            <img src="/Logo_white.webp" className="footer_image" />
        </div>

    < /
    div >

    <
    style jsx global > {
      `
      .fab{
          color: #7f7f7f;
          transition: .5s;
      }

      .fab:hover {
          opacity: .5;
      }

      .footer {
        width: 100%;
        height: 50vh;
        background-color: #fff;
        align-content: center;
        background-image: url("/footer_background.png");
        text-align: center;
        padding-top: 3em;
      }

      .footer p {
          color: #7f7f7f;
          font-weight: 700;
      }

      ul#footer_menu li {
        color: #7f7f7f;
          display: inline;
          margin-right: 1.5em;
      }

      .social_icons {
          position: absolute;
          left: 45%;
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
        color: rgb(72,194,200)!important;
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
          margin-left: auto;
          margin-right: auto;
          border: 1px solide #fff;
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
      `
    } < /style>
    <
    /div>

  )
}
