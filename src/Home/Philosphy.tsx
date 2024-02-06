import Images from "../images/Images";
function Philosphy() {
  return (
    <div className="philosphy">
      <div className="container">
        <div className="row  rows">
          <div className="col-sm-6">
            <div className="Philosphy-details">
              <div className="headings">
                <h2>Our Philosophy of care.</h2>
              </div>
              <p>
                It's the aim of Munissa Kare to deliver a service of personal
                care and associated domestic services to meet the needs of
                dependent Service User in their own home environment. All
                individuals supported by, who work as an employee offer skilled
                care to enable people supported by us to achieve their optimum
                state of health and well-being. Individual choice and personal
                decision-making are the right of all Service Users and will be
                supported by all the people who work for Munissa Kare. The right
                of independence will be respected and encouraged for all Service
                Users. The individual uniqueness of the Service Users, staff and
                visitors will be recognised and these people will be treated
                with dignity and respect at all times. The individual
                requirement for privacy will be respected at all times and all
                information relating to individuals will be treated in a
                confidential manner. We very much recognise the individual need
                for personal fulfilment and aim to offer individualised
                programmes of meaningful activity to satisfy that needs of our
                Service Users and staff of Munissa Kare.
              </p>
              <h5>
                Munissa Kare Services is based on the Principle and Values that:
              </h5>
              <h5>
                Privacy:{" "}
                <span>
                  Your care worker recognises your right to be left
                  alone,undisturbed and free from intrusion and public
                  attention.
                </span>
              </h5>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={Images.games} alt="game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosphy;
