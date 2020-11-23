export default function Team() {
  return (
  <>
    <div id="Theteam" className="row team_section">
        <div className="col-12">
            <h1>Meat the <font color = "#48c2c8" >Team</font></h1>
            <p> We are a growing team of medical and engineering professionals based in the UK.</p>
            <div className="teamImages">
               <div className="imageCard">
                <img src="/mate-1.png" className="teamMate" />
                <h6>Jane</h6>
               </div>
               <div className="imageCard">
                <img src="/mate-2.png" className="teamMate" />
                <h6>Fred</h6>
               </div>
               <div className="imageCard">
                <img src="/mate-3.png" className="teamMate" />
                <h6>Reymond</h6>
               </div>
               <div className="imageCard">
                <img src="/mate-4.png" className="teamMate" />
                <h6>Flo</h6>
               </div>
            </div>
            <p>< font color = "#ed1d5f" >Join us</font> - let's change the world!</p>
        </div>
    </div>
  
  
   <
    style jsx global > {
      `
        h6 {
            color: #6f7c80;
            margin-top: .5em;
        }
        .team_section {
            height: 100vh;
            text-align: center;
            padding-top: 6.65em;
            background: linear-gradient(180deg, rgba(72,194,200, .1) 0%, rgba(237,29,95,0) 100%);
        }
        
        .team_section h1 {
          color: rgb(50,58,107);
          font-size: 3em;
          margin-bottom: .5em;
      }
        
        .teamImages {
            height: 40vh;
            margin-top: 5em;
            margin-bottom: 3.5em;
        }
        
        .imageCard {
            display: inline-block;
            background-clor: none;
            border-radius: .2em;
            margin: 1em;
            width: 10em;
            height: 10em;
        }   
        
        .imageCard:hover {
            box-shadow: 0px 0px 7px 3px rgba(86,86,86,0.3);
            transition: .5s;
        }
          `
    } < /style> < / >
  )
}
