export default function ProductsHeader() {
  return ( <
    >
    <
    div className = "header" >
    <
    div className = "row" >
    <
    div className = "col-sm intro" >
    <
    h1 > Products < /h1 >

    <
    /
    div >
    <
    /
    div >

    <
    /div>

    <
    style jsx global > {
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
        color: rgb(50,58,107);
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
        background-image: url("/head_image_products.png");
        background-position: right;
        min-width: 100%!important;
        height: 45vh;
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
      `
    } < /style> </ >
  )
}
