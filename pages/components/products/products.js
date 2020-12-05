import Head from 'next/head';
import React from 'react';
import ReactDOM from "react-dom";
import NevigationBar from '../nevigation/nevigation.js';
import Policy from "../privacy policy/policy.js";
import Footer from '../footer/footer.js';
import ProductsHeader from '../products/header.js';
import {
  connectToDatabase
} from "../../../util/mongodb";

export default function Products({
  ppeProductListings
}) {

  return ( <
    >
    <
    Head >
    <
    title > Hexa - Products < /title>
    <meta name= "viewport" content="width=device-width, initial-scale=1" /> <
    link rel = "icon"
    href = "/favicon.ico" / >
    //Bootstrap lightbox
    <
    link rel = "stylesheet"
    href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin = "anonymous" / >
     <
     link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" />
    //FONTAWESOME
    <
    script src = "https://kit.fontawesome.com/e191a0838c.js"
    crossOrigin = "anonymous" > < /script>

    <
    /Head>

    {
      /* Nevigation Starts */
    }
    <
    NevigationBar / >
    <
    ProductsHeader / >
    <
    div className = "row showcase_window" >
    <div className="tertiary_NAV">
    {/* Secondary Nevigation buttons */}
        <a onClick={() => togglePPE()} className="tertiaryButton">PPE<i className="fas fa-angle-down ml-2" /></a>
        <a onClick={() => mawaza()} className="tertiaryButton">MEDICAL</a>
        <a onClick={() => allProducts()} className="tertiaryButton ">PHARMACEUTICAL</a>
    </div>
    <div className="col-12">
    <ul id="ppeOptions" className="ppeOptions_CLOSED">
      <li className="optionsList">
        <a className="optionsLink" onClick={() => allProducts_1('Respiratory')} >
          Respiratory</a>
      </li>
      <li className="optionsList">
        <a className="optionsLink" onClick={() => allProducts_1('Face')} >
          Face
        </a>
      </li>
      <li className="optionsList">
        <a className="optionsLink" onClick={() => allProducts_2('Clothing')} >
          Clothing
        </a>
      </li>
      <li className="optionsList">
        <a className="optionsLink" onClick={() => allProducts_2('Hand')} >
        Hand
        </a>
      </li>
    </ul>
    </div>
    <div className="col-6 notifications">
      <h5 id="thehead"><b>Showing:</b> Random PPE Products </h5>
    </div>

    {/* This is the random product showcase */}
    <div id="RandomProducts" className="RandomProducts">
    {ppeProductListings.map(({Image, Description, Product, Quality}, i) => (

      <
      div key = {i} className = "product_holder" >
      <a href= {Image} >
      <
      img className = "product_thumbs"
      src = {
        Image
      } /
      >
      </a>
       <
      h5 > {
        Product
      } < /h5>

      <div className="product_details">
        <h6>Overview</h6><p><img src="/tag-solid.png" className="descrption_icons" /> {Quality}</p>
        <ul className = "overview_list">
          <li>{Description.line1}</li>
          <li>{Description.line2}</li>
          <li>{Description.line3}</li>
        </ul>
        <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Get It</a>
      </div>
      < /
      div >
    )
  )}
    </div>

    {/* Respirators showcase*/}
    <div id="Respirators" className="Respirators">
        {ppeProductListings.filter(item => item.Category === "Respiratory").map(({Image, Description, Product, Quality}, x) => (

          <
          div key = {x} className = "product_holder" >
          <a href= {Image} >
          <
          img className = "product_thumbs"
          src = {Image} />
          </a>
           <
          h5 > {
            Product
          } < /h5>
          <div className="product_details">
          <h6>Overview</h6><p><img src="/tag-solid.png" className="descrption_icons" /> {Quality}</p>
          <ul className = "overview_list">
            <li>{Description.line1}</li>
            <li>{Description.line2}</li>
            <li>{Description.line3}</li>
          </ul>
          <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Get It</a>
          </div>
          < /
          div >
        )
    )}
    </div>

    {/* Face showcase*/}
    <div id="Face" className="Face">
        {ppeProductListings.filter(item => item.Category === "Face").map(({Image, Description, Product, Quality}, y) => (

          <
          div key = {y} className = "product_holder" >
          <a href= {Image} >
          <
          img className = "product_thumbs"
          src = {
            Image
          } /
          >
          </a>
           <
          h5 > {
            Product
          } < /h5>
          <div className="product_details">
          <h6>Overview</h6><p><img src="/tag-solid.png" className="descrption_icons" /> {Quality}</p>
          <ul className = "overview_list">
            <li>{Description.line1}</li>
            <li>{Description.line2}</li>
            <li>{Description.line3}</li>
          </ul>
          <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Get It</a>
          </div>
          < /
          div >
        )
    )}
    </div>

    {/* Hand showcase*/}
    <div id="Hand" className="Hand">
        {ppeProductListings.filter(item => item.Category === "Hand").map(({Image, Description, Product, Quality}, z) => (

          <
          div key = {z} className = "product_holder" >
          <a href= {Image} >
          <
          img className = "product_thumbs"
          src = {
            Image
          } /
          >
          </a>
           <
          h5 > {
            Product
          } < /h5>
          <div className="product_details">
          <h6>Overview</h6><p><img src="/tag-solid.png" className="descrption_icons" /> {Quality}</p>
          <ul className = "overview_list">
            <li>{Description.line1}</li>
            <li>{Description.line2}</li>
            <li>{Description.line3}</li>
          </ul>
          <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Get It</a>
          </div>
          < /
          div >
        )
    )}
    </div>

    {/* Clothing showcase*/}
    <div id="Clothing" className="Clothing">
        {ppeProductListings.filter(item => item.Category === "Clothing").map(({Image, Description, Product, Quality}, u) => (

          <
          div key = {u} className = "product_holder" >
          <a href= {Image} >
          <
          img className = "product_thumbs"
          src = {
            Image
          } /
          >
          </a>
           <
          h5 > {
            Product
          } < /h5>
          <div className="product_details">
          <h6>Overview</h6><p><img src="/tag-solid.png" className="descrption_icons" /> {Quality}</p>
          <ul className = "overview_list">
            <li>{Description.line1}</li>
            <li>{Description.line2}</li>
            <li>{Description.line3}</li>
          </ul>
          <a href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" type="button" className ="btn secondaryCTA" >Get It</a>
          </div>
          < /
          div >
        )
    )}
    </div>

    < /
    div >
     <
    Footer / >
    <
    Policy / >

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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js"></script>

    <
    script type = "text/javascript"
    src = "/navbamorph.js" > < /script> <
    script type = "text/javascript" >
    window.onscroll = navmorph; <
    /script>

    <
    script type = "text/javasrcript"
    src = "/typeform.js" > < /script>

    <
    style jsx global > {
      `
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@100;300;400&display=swap');

        html,
        body {

          font-family: 'Open Sans', Oxygen, Ubuntu;
          margin: 0!important;
          padding: 0!important;
          overflow-x: hidden;
          letter-spacing: 0.2em;
          font-smooth: antialiased;
          scroll-behaviour: smooth;
          scroll-snap-type: mandatory;
          zoom: 100%;
          color: #222;
        }

        .secondaryCTA {

          color: rgb(50,58,107);
          border: 1px solid rgb(50,58,107);
          background-color: #fff;
            border-radius: 3em;
            margin: 1.85em 0 .3em 0em;
            text-transform: uppercase;
            padding: .5em 1.5em .5em 1.5em;
            box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.35);
        }

        .secondaryCTA:hover {
          color: #fff;
          background-color: rgb(50,58,107);
          text-decoration: none;
          box-shadow: none;
        }

        .RandomProducts {
          visibility: visible;
          transition: .2s;
        }

        .Respirators {
          visibility: hidden;
          transition: .2s;
          height: 0;

        }

        .Hand {
          visibility: collapse;
          transition: .2s;
          height: 0;
        }

        .Face {
          visibility: collapse;
          transition: .2s;
          height: 0;
        }

        .Clothing {
          visibility: collapse;
          transition: .2s;
          height: 0;
        }

        .tertiaryButton {
          margin: 0.5em 1.5em 0.5em 1.5em;
          backgroud-color: #fff!important;
          font-size: .80em;
          font-weight: 600;
          color: #323a6b;
        }

        .tertiaryButton:hover {
          color: #48c2c8!important;
          cursor: pointer;
        }
        .showcase_window {
            padding: 2em;
            height: auto;
            overflow-y: hidden;
            margin-bottom: 2em;
            text-align: center;
            background-color: #FFF;
        }

        .tertiary_NAV {
            width: 50%;
            height: 3em;
            padding: .5em;
            border-radius: 3em;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1.5em;
            background-color: #fff;
            border: .3em solid #323a6b;
            vertical-align: center;
            color: #222;
        }

        .descrption_icons {
            width: 1em;
            opacity: .5;
        }

        .product_holder {
          width: 20em;
          height: 40em;
          margin: 1em;
          overflow: hidden;
          transition: .5s;
          border-radius: .2em;
          background-color: #fff;
          padding-bottom: 2em;
          display: inline-block;
          box-shadow: 1px 1px 17px -2px rgba(0,0,0,0.20);
        }

        .product_holder p {
          margin-bottom: .5em;
          margin-top: 1.5em;
          padding: .5em;
          text-align: left;
          color: rgba(72,194,200,1)!important;
          border: 1px dotted #f1f1f1;
          border-radius: 1em;
        }

        .product_holder h5 {
          font-size: .85em;
        }

        .product_details {
          border-top: .35em solid rgba(72,194,200,1);
          border-radius: .2em;
          padding-top: 1em;
          text-align: left;
          margin-top: 2em;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }

        .overview_list {
          color: #222;
          font-size: .65em;
          padding-left: .95em;
          line-height: 2em;
        }

        .overview_list li {
          padding-top: 1.25em;
        }

        .product_details p {
          color: #323232;
          font-size: .65em;
        }

        .product_details h6 {
          font-size: .85em;
          font-weight: 600;
          color: #323a6b;
        }

        .product_thumbs {
          width: 8em;
          height: 8em;
          margin: 1em;
        }
        .product_thumbs:hover {
          filter: grayscale(100%);
        }

        #thehead {
          font-size: .85em;
        }

        .ppeOptions_CLOSED {
          list-style-type:none;
          visibility: hidden;
          height: 0;
        }

        .ppeOptions_OPEN{
          list-style-type:none;
          visibility: visible;
          height: auto;
        }

        .optionsList {
          display: inline-block;
          margin-right: 1.5em;
          font-size: .85em;
          color: #48c2c8;
          cursor: pointer;
        }

        .optionsList:hover {
          color: #333;
          text-decoration: underline;
        }

        .optionsLink {
          display: inline-block;
        }
        .notifications {
          border-bottom: 1px solid #c6c6c6;
          padding: .5em .5em .5em .5em;
          margin-bottom: 1em;
          margin-right: auto;
          margin-left: auto;
        }
        @media only screen and (max-width: 1024px) {
          .product_holder {
            width: 20em;
            height: 40em;
          }
        }
        @media only screen and (max-width: 768px) {
          .tertiaryButton {
            font-size: .6em;
          }
          .intro h1 {
            margin-top: 1em;
          }
        }
        @media only screen and (max-width: 540px) {
          .intro h1 {
            font-size: 1.5em;
            margin-top: 1.85em;
          }
          .tertiary_NAV {
            width: 90%;
          }
          .tertiaryButton {
            font-size: .45em;
          }
        }
      `
    } < /style>

    <
    />
  )
}



//Function for fetching data from mongodb PPE Product list
export async function getServerSideProps() {
  const {
            db
          } = await connectToDatabase();
  const ppeProductListings = await db
      .collection("newProductListings")
      .find()
      .limit(20)
      .toArray();
      return {
            props: {
              ppeProductListings: JSON.parse(JSON.stringify(ppeProductListings)),
    },
  };
}

//This function toggles the PPE menu
export function togglePPE() {
  var ppeNevigation = document.getElementById("ppeOptions");
  if(ppeNevigation.className === 'ppeOptions_CLOSED'){
      ppeNevigation.className = 'ppeOptions_OPEN';
    } else {
      ppeNevigation.className = 'ppeOptions_CLOSED';
    }
}

//Toggles between PPE gategories
export function allProducts_1(wanted) {

global.$productCategory = "";
var div1 = document.getElementById("RandomProducts");
var div2 = document.getElementById("Respirators");
var div3 = document.getElementById("Face");
var div4 = document.getElementById("Hand");
var div5 = document.getElementById("Clothing");
var section = document.getElementById("thehead");
var ppeNevigation = document.getElementById("ppeOptions");


if(wanted == 'Respiratory'){
      var productCategory = wanted;
      section.innerHTML = "<b>Showing:</b> Respirators & Face Masks";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: hidden; height: 0;"
      div4.style.cssText += "visibility: hidden; height: 0;"
      div5.style.cssText += "visibility: hidden; height: 0;"
      div2.style.cssText += "visibility: visible; height: auto;"
  }
    else if (wanted == 'Face'){
      var productCategory = wanted;
      section.innerHTML = "<b>Showing:</b> Visors & Faceshields ";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: visible; height: auto;"
      div4.style.cssText += "visibility: hidden; height: 0;"
      div5.style.cssText += "visibility: hidden; height: 0;"
      div2.style.cssText += "visibility: hidden; height: 0;"
    }
}

//Toggles between PPE gategories
export function allProducts_2(wanted) {

global.$productCategory = "";
var div1 = document.getElementById("RandomProducts");
var div2 = document.getElementById("Respirators");
var div3 = document.getElementById("Face");
var div4 = document.getElementById("Hand");
var div5 = document.getElementById("Clothing");
var section = document.getElementById("thehead");
var ppeNevigation = document.getElementById("ppeOptions");


if(wanted == 'Clothing'){
      var productCategory = wanted;
      section.innerHTML = "<b>Showing:</b> Protective Clothing ";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: hidden; height: 0;"
      div4.style.cssText += "visibility: hidden; height: 0;"
      div5.style.cssText += "visibility: visible; height: auto;"
      div2.style.cssText += "visibility: hidden; height: 0;"
  }
    else if (wanted == 'Hand'){
      var productCategory = wanted;
      section.innerHTML = "<b>Showing:</b> Hand Protection ";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: hidden; height: 0;"
      div4.style.cssText += "visibility: visible; height: auto;"
      div5.style.cssText += "visibility: hidden; height: 0;"
      div2.style.cssText += "visibility: hidden; height: 0;"
    }
}
