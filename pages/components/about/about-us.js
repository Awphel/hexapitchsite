import Head from 'next/head';
import NevigationBar from '../nevigation/nevigation.js';
import Policy from "../privacy policy/policy.js";
import Footer from '../footer/footer.js';
import AboutHeader from '../about/header.js';
import WhyweExist from '../about/whyweExist.js';
import Vision from '../about/vision.js';
import Team from '../about/team.js';

export default function AboutUS() {
  return (
  <>
    <
    Head >
    <
    title > Hexa < /title>
    <meta name= "viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="." /> <
    link rel = "icon"
    href = "/favicon.ico" / >
    //Bootstrap CSS
    <
    link rel = "stylesheet"
    href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin = "anonymous" / >
    //FONTAWESOME
    <
    script src = "https://kit.fontawesome.com/e191a0838c.js"
    crossOrigin = "anonymous" > < /script>

    <
    /Head>

    {/* Nevigation Starts */}
        <
        NevigationBar />
        <
        AboutHeader / >
        <
        WhyweExist />
        <
        Vision />
        <
        Team />
        <
        Footer />
        <
        Policy />
    <

    script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossOrigin = "anonymous" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossOrigin = "anonymous" > < /script> <
    script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossOrigin = "anonymous" > < /script>

    <
    script type = "text/javascript"
    src = "/navbamorph.js" > < /script> <
    script type = "text/javascript" >
    window.onscroll = navmorph; <
    /script>


    <
    script type = "text/javasrcript"
    src ="/typeform.js" ></script>

    <
    style jsx global > {
      `
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@100;300;400&display=swap');

        html,
        body {
          font-family: 'Open Sans', 'Sans-Serif', Ubuntu;
          margin: 0!important;
          padding: 0!important;
          overflow-x: hidden;
          letter-spacing: 0.2em;
          font-smooth: antialiased;
          scroll-behaviour: smooth;
          scroll-snap-type: mandatory;
          zoom: 100%;
        }

        .container {
            margin: 0!important;
            width: 100%!important;
            display: flex-box;
            padding: 0!important;
        }

      `
    } < /style>

     </>
  )
}
