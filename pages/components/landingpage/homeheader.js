
export default function HomeHeader() {
  return (

    <
    div className = "header" >
    <
    div className = "row" >
    <
    div className = "col-sm intro" >
    <
    h1 > A NEW KIND OF < font color = "#48c2c8" > MEDICAL SUPPLY CHAIN </font>< /h1 >
    <
    p id = "introText" >
    The first platform that brings together global supplies, standerdised quality control, and logistics. <
    /p> <
    p className = "inlineCTA" >
    
    <
    a type = "button"
    className = "btn buyerbtn" href="https://form.typeform.com/to/Lg1lp2tq" data-mode="popup"  target="_blank" > Buyer < /a> 
    
    <
    a type = "button"
    className = "btn supplierbtn" href="#" > Supplier < /a>
    
    <
    a href = "#landingServices" className = "textLINK"> or learn more <i className="fas fa-angle-down" />< /a>
    <
    /
    p >
    
    {
      /*<div className="promo_ad">
                        <p>Covid-19 Testing kit<img src="/covid_testing.png" className="promo_ad_image" />
                        </p>
                      </div> */
    }

    <
    /div> <
    div className = "col-sm header_image" >

     <
    /div> < /
    div > 
    
    {/*
    <
    section className = "header-down-arrow" >
    <p className="scrollCue">scroll down</p>
    <a href="#section_one">
    <
    img src = "https://cssanimation.rocks/levelup/public/images/downarrow.png"
    width = "30" / ></a>
    <
    /section>
    */}

    <
    /div>
  )
}
