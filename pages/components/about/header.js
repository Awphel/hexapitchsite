export default function AboutHeader() {
  return (
    <>
    <
    div className = "header" >
    <
    div className = "row" >
    <
    div className = "col-sm intro" >
    <
    h1 > About Us< /h1 >

    <h3> We're passionate</h3>
    <p>  about redressing the imbalance in the medical supply chain.</p>

    {/* Secondary Nevigation buttons */}
    <p className="secondaryNAV">
    <ul className="breadcrumbs">
        <li className="breadcrumbs_list"><a href="#we_exist" className="secondaryNAV-LINKS">Our Story</a></li>
        <li className="breadcrumbs_list"><a href="#vision" className="secondaryNAV-LINKS">Vision</a></li>
        <li className="breadcrumbs_list"><a href="#Theteam" className="secondaryNAV-LINKS">Team</a></li>
    </ul>
    </p>
     < /
    div >
    < /
    div >

    {/* Scroll Down Cue **/}
    <
    section className = "header-down-arrow" >
    <p className="scrollCue">scroll down</p>
    <a href="#we_exist">
    <
    img src = "https://cssanimation.rocks/levelup/public/images/downarrow.png"
    width = "30" className="scrollCueArrow" / ></a>
    <
    /section>

    <
    /div>

    <
    style jsx global> {
      `

      .breadcrumbs {
          color: #fff;
          margin: 0;
          padding: 0;

      }

      .breadcrumbs_list {
          float: left;
          margin: 1em;
      }

      .secondaryNAV {
          margin-top: 5em;
          font-size: .8em;
      }

      .secondaryNAV-LINKS {
          transition: .5s;
          padding-left: .5em;
          padding-right: .5em;
          color: #fff;
      }

      .secondaryNAV-LINKS:hover {
          color: #48c2c8;
          font-size: 1.2em;
          text-decoration: none!important;
      }

      .scrollCue {
          color: #fff;
          font-size: .85em;
      }

      .scrollCueArrow {
        filter: invert(100%);
      }

      h1 {
        font-family: 'Open Sans';
        color: #fff;
        margin-bottom: .150em;
        padding-bottom: 0;
        line-height: .7em;
        font-weight: 550;
        font-size: 3em;
      }

      h3 {
          margin-bottom: .5em;
          margin-top: 2em;
          color: #fff;
      }

      h4 {
        margin-bottom: 2em;
        word-spacing: .15em;
        font-size: .765em;
        color: #808080;
      }

      p {
        line-height: 1.65em;
        word-spacing: .15em;
      }

      .intro p {
        color: #fff;
      }

      .secondary_icons {
        margin-right: .5em;
        margin-left: .3em;
        color: rgb(50,58,107);
        width: 1em;
      }

      .textLINK:hover {
        color: rgb(50,58,107);
        text-decoration: none!important;
      }

      .header {
        background-image: url("/head_image.png");
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

      .header-down-arrow {
      animation: pulse 2s 3s ease-out infinite;
      position: absolute;
        bottom: 5vh;
        left: 0;
        right: 0;
      text-align: center;
      z-index: 10;
      }

      .header-down-arrow img {
      animation: fade-slide-up 1s 1s ease-out forwards;
      opacity: 0;
      }

      /* Animations */

      @keyframes fade-slide-down {
      0% {
      opacity: 0;
      transform: translateY(-4rem);
      }
      100% {
      opacity: 1;
      transform: none;
      }
      }

      @keyframes fade-slide-up {
      0% {
      opacity: 0;
      transform: translateY(4rem);
      }
      100% {
      opacity: 1;
      transform: none;
      }
      }

      @keyframes pop-in {
      0% {
      opacity: 0;
      transform: translateY(-4rem) scale(.8);
      }
      100% {
      opacity: 1;
      transform: none;
      }
      }

      @keyframes pulse {
      0% {
      opacity: 1;
      transform: none;
      }
      50% {
      opacity: .8;
      transform: scale(.8);
      }
      100% {
      opacity: 1;
      transform: none;
      }
      }

      @media only screen and (max-width: 1024px) {
        .header {
          background: rgb(50,58,107);
          background: linear-gradient(61deg, rgba(50,58,107,1) 0%, rgba(72,194,200,1) 47%);
        }
      }
      @media only screen and (max-width: 560px) {
          .intro {
            text-align: center;
            padding: 2em;
            margin-left: auto;
            margin-right: auto;
          }
          .secondaryNAV {
            margin-left: 20%;
            margin-right: auto;
            text-align: center;
          }
          .header-down-arrow {
            visibility: hidden;
          }

      }
      `
    } < /style> </>
  )
}
