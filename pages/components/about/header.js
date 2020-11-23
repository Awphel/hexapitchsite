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
    h1 > About< font color = "#48c2c8" > Us< /font>< /h1 >
    
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
    <a href="#section_one">
    <
    img src = "https://cssanimation.rocks/levelup/public/images/downarrow.png"
    width = "30" / ></a>
    <
    /section>
    
    <
    /div>

    <
    style jsx global> {
      `
      
      .breadcrumbs {
          color: #888;
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
          color: #48c2c8;
          display: block;
      }
      
      .secondaryNAV-LINKS:hover {
          color: grey;
          font-size: 1.2em;
          text-decoration: none!important;
      }
      
      .scrollCue {
          color: #6f7c80;
          font-size: .85em;
      }
    
      h1 {
        font-family: 'Open Sans';
        color: rgb(50,58,107);
        margin-bottom: .150em;
        padding-bottom: 0;
        line-height: .7em;
        font-weight: 550;
        font-size: 3em;
      }
      
      h3 {
          margin-bottom: .5em;
          margin-top: 2em;
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
        background-image: url("/head_image_about.png");
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
      .header_image {
        align-content: center;
        text-align: center;
        margin-top: 8%;
      }
      
      .textLINK_MORE {
        color: rgb(257,29,95);
        text-decoration: none;
        transition: .8s;
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
