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

      .intro h1 {
        font-family: 'Open Sans';
        color: #fff;
        padding-bottom: 1em;
        line-height: .7em;
        font-weight: 550;
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
        background: rgb(50,58,107);
        background: linear-gradient(61deg, rgba(50,58,107,1) 0%, rgba(72,194,200,1) 47%);
        min-width: 100%!important;
        position: static;
        height: 45vh;
        left: 0;
        top: 0%;
      }

      .intro {
        margin-top: 9%;
        margin-left: 0;
        font-size: 2em;
        text-align: center;
      }

      .textLINK_MORE {
        color: rgb(257,29,95);
        text-decoration: none;
        transition: .8s;
      }

      @media only screen and (max-width: 1024px) {
        .header {
          min-width: 100%!important;
          text-align: center;
          position: static;
          height: 30vh;
          left: 0;
          top: 0;
        }
      @media only screen and (max-width: 560px) {
        .intro h1 {
          font-size: 2em;
          margin-top: 8%;
        }
      }
      `
    } < /style> </ >
  )
}
