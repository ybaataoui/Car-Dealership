import React from "react";

const ServiceCenter = () => {
  return (
    <div className="service-center content-area-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="inside-car service-car">
              <iframe
                src="https://www.youtube.com/watch?v=uE2dJWnPCT8"
                allowFullScreen
                title="Service Video"
              ></iframe>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="about-text">
              <h3>
                Our Services <span>Video</span>
              </h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armor-like back, and if he lifted his head a little
                he could...
              </p>
              <p className="mb-0">
                Morning, when Gregor Samsa woke from troubled dreams, he found
                himself transformed in his bed into a horrible vermin. He lay on
                his armor-like back...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenter;
