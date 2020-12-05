export default function ContactHeader() {
  return (
    <>
    <
    div className = "header" >
    <
    div className = "row" >
    <
    div className = "col-sm intro" >
    <
    h1 > Contact us< /h1 >
    <span></span>
    <p className="headingText">Head Office (London, United Kingdom)</p>
    <p>Ivybridge House, 1 Adam St<br/>London WC2N, Tel: +44 12 564 345</p>

    <hr className="linebreak"/>

    <div className="social">
            <i className="fab fa-linkedin-in fa-2x mr-4" />
            <i className="fab fa-twitter fa-2x mr-4" />
            <i className="fab fa-facebook-f fa-2x" />
        </div>

     < /
    div >
    < /
    div >

    <
    /div>

    <
    style jsx global> {
      `
      .scrollCue {
          color: #6f7c80;
          font-size: .85em;
      }

      .social {
          margin-top: 2em;
      }
      .fab {
          color: #fff;
      }
      .linebreak {
          background-color: #fff;
          width: 40%;
          margin: 0;
      }

      .secondaryNAV {
          margin-top: 5em;
          font-size: .8em;
      }

      .secondaryNAV-LINKS {
          border-right: 1px solid #ccc;
          transition: .5s;
          padding-left: .5em;
          padding-right: .5em;
          color: #48c2c8;
      }

      .secondaryNAV-LINKS:hover {
          color: grey;
          font-size: 1.2em;
          text-decoration: none!important;
      }

      h1 {
        font-family: 'Open Sans';
        color: #fff;
        margin-bottom: 1em;
        padding-bottom: 0;
        line-height: .7em;
        font-weight: 550;
        font-size: 3em;
      }

      .headingText {
          color: #48c2c8;
      }


      p {
        color: #fff;
        line-height: 1.65em;
        word-spacing: .15em;
      }


      .secondary_icons {
        margin-right: .5em;
        margin-left: .3em;
        color: rgb(50,58,107);
        width: 1em;
      }

      .textLINK {
        line-height: 3em;
        color: rgb(72,194,200);
        text-transform: uppercase;
        text-decoration: none;
        transition: .8s;
        margin-left: .8em;
      }

      .textLINK:hover {
        color: rgb(50,58,107);
        text-decoration: none!important;
      }

      .header {
        background-image: url("/head_image_contact.png");
        background-position: right;
        background-size: cover;
        min-width: 100%!important;
        height: 100vh;
        position: static;
        left: 0;
        top: 0%;
      }

      .intro {
        margin-left: 5em;
        margin-top: 15%;
        padding-right: 15em;
      }

      .textLINK_MORE {
        color: rgb(257,29,95);
        text-decoration: none;
        transition: .8s;
      }
      @media only screen and (max-width: 540px) {
        .intro {
          width: 90%!important;
          padding-right: 0;
          margin-left: 1em;
          margin-top: 10em;
        }
        .linebreak {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 5em;
        }
      }
      `
    } < /style> </>
  )
}
