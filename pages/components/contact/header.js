export default function ContactHeader() {
  return ( <
    >
    <
    div className = "header" >
    <
    div className = "row" >
    <
    div className = "col-sm intro" >
    <
    h1 > Contact us < /h1 > <
    span > < /span> <
    p className = "headingText" > Head Office(London, United Kingdom) < /p> <
    p > Ivybridge House, 1 Adam St < br / > London WC2N, Tel: +44 12 564 345 < /p>

    <
    hr className = "linebreak" / >

    <
    div className = "social" >
    <
    i className = "fab fa-linkedin-in fa-2x mr-4" / >
    <
    i className = "fab fa-twitter fa-2x mr-4" / >
    <
    i className = "fab fa-facebook-f fa-2x" / >
    <
    /div>

    <
    /
    div >
    <
    div className = "col-sm formHolder" >
    <
    form action = "https://formspree.io/f/myybnked"
    method = "POST" >
    <
    p > <
    label >
    Your email: <
    /label></p > <
    input type = "text"
    name = "_replyto"
    placeholder = " please enter your email" / >
    <
    p > <
    label >
    Your message: < /
    label > < /p> <
    textarea name = "message"
     >Write your message here... < /textarea>

    <
    p >
    <
    button type = "submit"
    className = "submitBtn" > Send < /button> < /
    p > < /
    form >

    <
    /div> < /
    div >

    <
    /div>

    <
    style jsx global > {
      `
      .formHolder {
        background-color: #fff;
        border-radius: .35em;
        float: right;
        margin-top: 8em;
        margin-right: 5em;
        padding: 2em;
      }

      .formHolder p {
        color: #95A5A6;
        font-size: .85em;
      }

      label {
        margin-top: 1.5em;
      }

      input {
        width: 30em;
        border-radius: 3em;
        border: .2em solid #323a6b;
        background-color: ;
      }

      textarea {
        width: 30em;
        border: .2em solid #323a6b;
        border-radius: .5em;
      }

      .submitBtn {
          background-color: #323a6b;
          border-radius: 3em;
          transition: .5s;
          margin-top: 2em;
          border: none;
          color: #fff;
          width: 8em;
      }
      .submitBtn:hover {
          color: #323A6B;
          background-color: #fff;
          border: 2px solid #323a6b;
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

      @media only screen and (max-width: 1125px) {
          .formHolder {
            width: 20%;
            margin-right: auto;
            margin-left: auto;
          }
          textarea, input {
            width: 95%;
          }
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
        .formHolder {
          width: 80%;
          margin-top: 1.5em;
          margin-left: auto;
          margin-right: auto;
        }
        textarea, input {
          width: 99.5%;
        }
      }

      `
    } < /style> </ >
  )
}
