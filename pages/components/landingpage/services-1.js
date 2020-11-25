export default function LandingServices() {
  return  (
    <>
    <
    div id="landingServices" className = "row Landing_Services" >
        <div className="col-12 sectionImage_container">
            <h1>An Integrated Service</h1>
            <div className="sectionIMAGE_services">
                <ul id="imageText">
                    <li><a href="/components/services/services/#supplyChain">Supply Chain Management</a></li>
                    <li><a href="/components/services/services/#quality">Quality Control</a></li>
                </ul>
            </div>

        <p className="mainText">
            We integrate quality management with supply chain management. A system where you only need to tell us what you need, and we take care of the rest for you. From sourcing the products, marketing, auditing, legal, payment processing, and logistics.<a href="#landingUS" className ="textLINK_MORE"><i> - Choose Hexa.</i></a>
        </p>
        <p>
            <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Make an Enquiry</a>
            <a href="/components/products/products" type="button" className ="btn primaryCTA" >View Products</a>
        </p>

        </div>
    </div>
    <
    style jsx global > {
      `
      .iconHolder {
            background-color: #f1f1f1;
            justify-content: center;
            border-radius: 50%;
            margin-bottom: 2em;
            margin-right: auto;
            margin-left: auto;
            padding: 1.5em;
            height: 7em;
            width: 7em;
        }

       #imageText {
           list-style-type: none;
           padding: 0;
       }

       #imageText li {
           float: left;
           margin-right: 10%;
           margin-left: 10%;
       }

       #imageText li a{
           width: 10em;
           display: block;
           margin-top:50%;
           font-size: .65em;
           font-weight: 600;
           text-align: center;
           color: rgb(50,58,107);
           text-decoration: none!important;

       }

       #imageText li a:hover {
           color: rgb(257,29,95);
       }

      .mainText {
          width: 50em;
          margin-left: auto;
          margin-right: auto;
      }

      .sectionIMAGE_services {
          background-image: url("/infinity_image.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          text-align: center;
          transition: .5s;
          padding-top: 3em;
          padding-left: .7em;
          margin-left: auto;
          margin-right: auto;
          margin-top: 2em;
          width: 25em;
          height: 15em;
      }

      .sectionIMAGE_services:hover {
          opacity: .7;
      }

      .primaryCTA {
        border: 1px solid rgb(50,58,107);
        padding: .5em 1.5em .5em 1.5em;
        text-transform: uppercase;
        margin: 2em 0 .3em 2em;
        color: rgb(50,58,107)!important;
        border-radius: 3em;
        transition: .5s;
        transition: .8s;
      }

      .secondaryCTA {
          color: #fff;
          border-radius: 3em;
          margin: 1.85em 0 .3em 0em;
          text-transform: uppercase;
          padding: .5em 1.5em .5em 1.5em;
          background-color: rgb(50,58,107);
          box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.35);
      }

      .primaryCTA:hover {
        color: #fff!important;
        background-color: rgb(50,58,107);
        box-shadow: none;
      }

      .secondaryCTA:hover {
        color: rgb(50,58,107);
        border: 1px solid rgb(50,58,107);
        background-color: #fff;
        text-decoration: none;
        box-shadow: none;
      }


      .textLINK_MORE {
        color: rgb(257,29,95);
        text-decoration: none;
        transition: .8s;
      }

      .textLINK_MORE:hover {
        color: rgb(50,58,107);
        text-decoration: none!important;
      }

      .Landing_Services h1 {
        font-variant-caps: all-small-caps;
        font-family: 'Open Sans';
        color: rgb(50,58,107);
        padding-bottom: 1em;
        line-height: .8em;
        font-weight: 550;
        font-size: 2em;
      }

      .section_head_intro {
          width: 50em;
          margin-left: auto;
          margin-right: auto;
          font-size: .8em;
          color: #888;
      }

      .Landing_Services {
        width: 100%!important;
        padding: 5em .5em 3em .5em;
        text-align: center;
        overflow-y: hidden;
        height: 120vh;
        left: 0;
        margin-left: 0;
        margin-right: 0;
        margin-top: 3em;
        overflow-x: hidden;
      }

@media only screen and (max-width: 1024px) {
        .sectionTitle {
          height: 6em!important;
          margin: 0;
        }
        .sectionImage_container {
          margin: 0;
        }
        .Landing_Services {
          margin-top: 0;
        }
        .mainText {
          width: auto;
        }
}
@media only screen and (max-width: 410px) {
        .Landing_Services {
          height:
        }
        .sectionIMAGE_services {
        
        }

}

      `
    } < /style>
    </>
  )
}
