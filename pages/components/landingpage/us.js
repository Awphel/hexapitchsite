import Link from 'next/link';
export default function LandingUS () {
  return  (
    <>
    <
    div id="landingUS" className = "row Landing_us" >
      <div className="col-12 inner_container">
        <h1>From start to finish</h1>
        <div className="row">
        <div className="col usText">
            <p className="Text">Even before the pandemic, getting access to reliable medical
                supplies was unpredictable and unfairly dependent on where
                in the world you were placing your order. The team at <b>Hexa
                MEDICAL SOLUTIONS</b> are passionate about redressing this
                imbalance.
            </p>
            <p className="Text">
                Our ambition is to bring transparency and fairness to the
                medical supply chain from start to finish. - <a href="#testimonials" className="textLINK_MORE"><i>We put your needs first!</i></a>
            </p>
            <p>
            <a type="button" href="/components/about/about-us" className ="btn secondaryCTA">Get to Know Us</a>
                <a href="#" type="button" className ="btn primaryCTA" href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" >Make an Enquiry</a>
            </p>
        </div>
        <div className="col">
            <img src="/doctor.png" className="sectionIMAGE"/>
        </div>
        </div>
      </div>
      <div className="col-12 affiliates">
          <h1>SOME OF OUR TRUSTED AFFILIATES</h1>
          <img src="/uk2a.jpg" className="affiliate_logo" />
          <img src="/uk1.jpg" className="affiliate_logo" />
          <img src="/uk1.png" className="affiliate_logo" />
          <img src="/aus.png" className="affiliate_logo" />
          <img src="/usa1.png" className="affiliate_logo" />
      </div>
     </div>

     <
    style jsx global > {
      `
      .usText {
          text-align: left;
          padding: 2.5em 10em 0 0.5em;
          margin-left: .5em;
      }

      .Landing_us {
          background: linear-gradient(180deg, rgba(72,194,200, .1) 0%, rgba(237,29,95,0) 100%);
          width: 100%!important;
          text-align: left;
          height: auto;
          margin: 0;
      }

      .inner_container {
        padding-top: 6.5em;
        padding-left: 5em;
      }

      .affiliates {
        height: auto;
        padding: 1.5em;
        margin-top: 6em;
        margin-bottom: 4em;
        margin-left: 0;
        margin-right: 0;
        width: 100%!important;
        text-align: center;
        background-color: #f0f0f1;
      }
      .affiliate_logo {
        display: inline-block;
        width: 10em;
        opacity: .6;
        margin-top: 2.5em;
        marin-right: 3em;
        margin-left: 3em;
      }
      .Landing_us h1 {
          font-size: 2em;
          color:rgb(50,58,107);
          font-weight: 550;
          font-family: 'Open Sans';
          font-variant-caps: all-small-caps;
      }

      .Text {
          border-left: .3em solid #f2f2f2;
          padding-left: 1em;
      }

      .sectionIMAGE{
          width: 18em;
          margin-top: .5em;
          margin-left: 2.5em;
      }

@media only screen and (max-width: 1024px) {
          .usText {
            padding-right: 1em;
          }
          .Landing_us {
            padding-left: .5em;
            padding-left: .5em;
            height: auto;
          }
          .primaryCTA, .secondaryCTA {
            float: left;
            margin-left: .5em;
            width: 100%;
          }
}

@media only screen and (max-width: 411px) {
            .affiliates {
              visibility: hidden;
              margin: 0;
            }
            .Landing_us {
              height: 170vh;
              margin-bottom: 0;
            }
            .inner_container {
              padding-left: 0;
              text-align: center;
            }
            .usText {
              text-align: center;
            }

}
       `
    } < /style>
 </>
  )
}``
