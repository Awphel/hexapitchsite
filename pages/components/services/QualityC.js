export default function Quality() {
  return (
    <>

<
    div id="quality" className="row about">
        <div className="col-12 section_one">
            <h1>Quality Compliance</h1>
            <p> We integrate quality management with supply chain management..
            </p>
        </div>
        <div id="sourcing" className="col-6">
            <h3>Sourcing</h3>
            <p className="Col_text_left">
                At Hexa, we manage the quality control of every product as well as the Quality Management Standards of the associated manufacturing environment, establishing a high level of regulatory compliance. And for those manufacturers that are not qualified for testing standards, we are here to help assist them through every step in the process of becoming certified to healthcare standards.
            </p>

        </div>
        
        
        
        <div id="payment" className="col-6">
            <h3></h3>
            <p className="Col_text_right">
                <i>"Quality is never an accident, it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice fo many alternatives"</i> William A.
            </p>
        </div>
    
    <
    /div>
    
    
     <
    style jsx global > {
      `
        .col-6 {
          height: inherit;
          padding: 7.5em 3em 0 5em;
      }
      
      .Col_text_left {
          font-size: .85em;
          line-height: 2em;
          padding-left: 1em;
          line-height: 2.5em;
          border-left: .3em solid #f2f2f2;
          }
      
      .Col_text_right {
            color: #888;
          font-size: .85em;
          line-height: 2em;
          padding-left: 1em;
          line-height: 2.5em;
          border-left: .3em solid #f2f2f2;
      }
      
      .about {
          height: inherit;
          margin-top: 2em;
          background-color: #fff;
          scroll-snap-align: start;
      }
      
      .col-6 h3 {
          margin-bottom: .65em;
          color: rgb(50,58,107);
          font-size: 1.5em;
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
