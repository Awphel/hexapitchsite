export default function WhyweExist() {
  return (
    <>

<
    div id="we_exist" className="row about">
        <div className="col-12 section_one">
            <h1>Why we exist!</h1>
            <p> Hexa Medical Solutions is committed to restoring trust and
                efficiency in the medical supply chain.
            </p>
        </div>
        <div className="col-6">
            <h3>We get it</h3>
            <p className="Col_text_left">We provide more than just a service, we understand your frustrations.</p>
            <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Make an Enquiry</a>
        </div>
        <div className="col-6">
            <p className="Col_text_right">Having experienced the difficulties involved in sourcing reliable medical equimpnet in different parts of the world - first hand - we're here to help you source the equipment you need, at the grade you require and at the price that works for your budget. <a href="/components/services/services" className ="textLINK_MORE"><i>See our services</i></a>.</p>
        </div>

    <
    /div>


     <
    style jsx global > {
      `
        .col-6 {
          height: inherit;
          padding: 4.5em 5em;
      }

      .Col_text_left {
          font-size: 1.5em;
          font-weight: 500;
          color: rgb(50,58,107);
      }

      .Col_text_right {
          font-size: 1em;
          line-height: 2em;
          padding-left: 1em;
          line-height: 2.5em;
          border-left: .3em solid #f2f2f2;
      }

      .about {
          height: 100vh;
          margin-top: 0em;
          background-color: #fff;
          scroll-snap-align: start;
      }

        .section_one {
            height: 40vh;
            color: #fff;
            padding-top: 7.5em;
            align-content: center;
            text-align: center;
            background-color: rgb(50,58,107);
    }

    .section_one h1 {
          color: #fff;
          font-size: 3em;
          margin-bottom: .5em;
          font-variant-caps: all-small-caps;
      }

      .col-6 h3 {
          margin-bottom: .65em;
          font-size: 1.5em;
          color: #48c2c8;
          margin-top: 0;
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

      .secondaryCTA:hover {
        color: #fff;
        background-color: #48c2c8;
        text-decoration: none;
        box-shadow: none;
      }
   `
    } < /style> </>
  )
}
