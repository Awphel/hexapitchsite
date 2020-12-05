export default function Vision() {
  return (
  <>
  <div id="vision" className="row">
    <div className="col-sm vision">
        <div className="iconHolder">
            <i className="fas fa-binoculars fa-4x" />
        </div>
        <h5>Our Mission</h5>
        <p>Always to keep quality control, fair pricing and customer care at the heart of the Hexa Medical Solutions service. Upholding the trust of the healthcare professionals and the communities around the world, who count on us.
        </p>

    </div>
    <div className="col-sm ethics">
        <div className="iconHolder">
            <i className="fas fa-balance-scale fa-4x" />
        </div>
        <h5>Our Ethics</h5>
        <p>Always to keep quality control, fair pricing and customer care at the heart of the Hexa Medical Solutions service. Upholding the trust of the healthcare professionals and the communities around the world, who count on us.
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
            height: 7.5em;
            width: 7.5em;
        }

        .fas {
            color: #48C2C8;

        }

        .vision, .ethics {
            height: auto;
            margin-top: 2em;
            text-align: center;
            background-color: #fff;
        }

          `
    } < /style> < / >
  )
}
