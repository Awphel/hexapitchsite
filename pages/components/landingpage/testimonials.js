export default function LandingTestimonials() {
  return  (
    <>
    <
    div id="testimonials" className = "row Landing_testimonials" >
      <div className="col-12">
        <h1>Testimonials<font color = "#48c2c8" ></font></h1>
        <img src="/dude.png" className="testiIMAGE" />
        <h6>Dr.Blake Hunter</h6>
            <p className="TESTtext"><i><font size = "1em" >“</font>I was relying on a single supplier for my insulin at our medical centre
    which meant that supplier was charging us whatever they liked. It
    was incredibly stressful for us and for our patients. Even though we’re
    in a rural district I’m now able to choose not only the supplier but also
    the price we pay. Thank you Hexa!”</i>.
        </p>

<a className="btn secondaryCTA" href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" > Make an enquiry </a>
      </div>
     </div>

     <
    style jsx global > {
      `

      .testiIMAGE {
          width: 8em;
          margin-bottom: 2em;
          margin-top: 2.65em;
          border-radius: 5em;
      }

      .TESTtext {
        width: 55em;
        color: #888;
        font-size: .8em;
        margin-left: auto;
        margin-right: auto;
    }

    .Landing_testimonials {
        width: 100%!important;
        padding: 8em .5em 3em .5em;
        text-align: center;
        height: 110vh;
        left: 0;
        margin-left: 0;
        margin-right: 0;
        margin-top: 3em;
        overflow-x: hidden;
      }

      .Landing_testimonials h1 {
        font-variant-caps: all-small-caps;
        font-family: 'Open Sans';
        color: rgb(50,58,107);
        margin-bottom: .5em;
        padding-bottom: 0;
        line-height: .8em;
        font-weight: 550;
        font-size: 2em;
      }

       `
    } < /style>
 </>
  )
}``
