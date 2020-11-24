export default function ServicesHeader() {
  return (
    <>
    <
    div className = "header" >
    <
    div className = "row" >
    <
    div className = "col-sm intro" >
    <
    h1 > Our Services< /h1 >

    <h3> We're commited</h3>
    <p> From start to finish - we put your needs first!</p>

    {/* Secondary Nevigation buttons */}
    <p className="secondaryNAV">
    <ul className="breadcrumbs">
        <li className="breadcrumbs_list"><a href="#sourcing" className="secondaryNAV-LINKS">Sourcing</a></li>
        <li className="breadcrumbs_list"><a href="#marketing" className="secondaryNAV-LINKS">Marketing</a></li>
        <li className="breadcrumbs_list"><a href="#auditing" className="secondaryNAV-LINKS">Auditing</a></li>
        <li className="breadcrumbs_list"><a href="#legal" className="secondaryNAV-LINKS">Legal</a></li>
        <li className="breadcrumbs_list"><a href="#payment" className="secondaryNAV-LINKS">Payment Processing</a></li>
        <li className="breadcrumbs_list"><a href="#logistics" className="secondaryNAV-LINKS">Logistics</a></li>
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
    <a href="#supplyChain">
    <
    img src = "https://cssanimation.rocks/levelup/public/images/downarrow.png"
    width = "30" className="scrollCueArrow"/ ></a>
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

      .scrollCue {
          color: #fff;
          font-size: .85em;
      }

      .scrollCueArrow {
        filter: invert(100%);
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

      h1 {
        font-family: 'Open Sans';
        color: #fff;
        margin-bottom: .150em;
        padding-bottom: 0;
        line-height: .7em;
        font-weight: 550;
        font-size: 3em;
      }

      .intro p {
        color: #fff;
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


      .secondary_icons {
        margin-right: .5em;
        margin-left: .3em;
        color: rgb(50,58,107);
        width: 1em;
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

      `
    } < /style> </>
  )
}
