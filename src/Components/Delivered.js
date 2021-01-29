import React from "react";
import { HiOutlineInboxIn } from "react-icons/hi";
import { GrLocationPin } from "react-icons/gr";
import { FiCheckSquare, FiMapPin, FiTruck } from "react-icons/fi";
import "./nav.css";
function Delivered() {
  return (
    <>
      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-year">{item.date}</div>
          <div className="timeline-icon">
            <HiOutlineInboxIn className="mb-1" />
          </div>
          <div className="inner-content">
            <h3 className="title">Packed</h3>
            <p className="description">
              Your product has been packed at <b>Delhi, India</b>.
            </p>
          </div>
        </a>
      </div>
      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-year">2019</div>
          <div className="timeline-icon">
            <FiTruck className="mb-1" />
          </div>
          <div className="inner-content">
            <h3 className="title">Shipped</h3>
            <p className="description">
              Your product have been shipped !!! It will reach you within 7
              working days 😊
            </p>
          </div>
        </a>
      </div>
      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-year">2019</div>
          <div className="timeline-icon">
            <FiMapPin className="mb-1 text-light" />
          </div>
          <div className="inner-content">
            <h3 className="title">Reached</h3>
            <p className="description">
              Your product has reached to your nearest hub.
            </p>
          </div>
        </a>
      </div>
      <div className="timeline">
        <a href="#" className="timeline-content">
          <div className="timeline-year">2019</div>
          <div className="timeline-icon">
            <FiCheckSquare className="mb-1" />
          </div>
          <div className="inner-content">
            <h3 className="title">Delivered</h3>
            <p className="description">
              Your product have been shipped !!! It will reach you within 7
              working days 😊
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Delivered;
