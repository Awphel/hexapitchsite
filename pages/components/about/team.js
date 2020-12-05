export default function Team() {
  return (
  <>
    <div id="Theteam" className="row team_section">
        <div className="col-12">
            <h1>Meat the Team</h1>
            <p> We are a growing team of medical and engineering professionals based in the UK.</p>
            <div className="teamImages">
               <div className="imageCard">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFeP2uxVc0xTQ/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=x163iB4QaxyWs6BVleAtNdAx_l8hyqSN19YQ0ZfDR_0" className="teamMate" />
                <h6>Farhaan</h6>
               </div>
               <div className="imageCard">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHhmgHPhy5V_Q/profile-displayphoto-shrink_200_200/0/1598973771373?e=1611792000&v=beta&t=HRJZV7B0Ue5QS5Gv20RCA3uHe5JpNahOxJr22tUbR7g" className="teamMate" />
                <h6>Chahat</h6>
               </div>
               <div className="imageCard">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQH0Q1hbXFDAMg/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=OL7Nn71JWoqThpeXPg6Qoj-chhh_3feX_fQzcfBiuGk" className="teamMate" />
                <h6>Lovey</h6>
               </div>
               <div className="imageCard">
                <img src="/mate-4.png" className="teamMate" />
                <h6>Flo</h6>
               </div>
            </div>
            <p>< font color = "#48C2C8" >Join us</font> - let's change the world!</p>
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
          font-variant-caps: all-small-caps;
          color: rgb(50,58,107);
          margin-bottom: .5em;
          font-size: 3em;
      }

        .teamImages {
            height: 40vh;
            margin-top: 5em;
            margin-bottom: 3.5em;
        }

        .teamMate {
          filter: grayscale(100%);
          border-radius: 50%;
          transition: .3s;
          width: 7.5em;
        }

        .teamMate:hover {
          filter: grayscale(0);
        }

        .imageCard {
            display: inline-block;
            background-clor: none;
            border-radius: .2em;
            padding: 1em;
            margin: 1em;
            width: 10em;
            height: 12em;
        }

        .imageCard:hover {
            box-shadow: 0px 0px 7px 3px rgba(86,86,86,0.3);
            transition: .5s;
        }
          `
    } < /style> < / >
  )
}
