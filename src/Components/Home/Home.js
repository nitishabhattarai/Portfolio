import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Modal from "react-modal";

import "./Home.css";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="home-page">
      <div className="container">
        <div className="intro-content">
          <p>Enthusiastic, Creative frontend developer is here!</p>
          <span>Get ready to turn your ideas into reality!</span>
          <br />
          <br />
          <a
            className="find"
            href="https://www.linkedin.com/in/nitisha-bhattarai-45ab2619a/"
            target="_blank"
          >
            {" "}
            Find Me
          </a>
          {/* <button onClick={openModal}>Contact Me</button> */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <form className="modal-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" />
              <div className="message">
                <textarea placeholder="write your message" rows={4} />
              </div>
            </form>
            <button onClick={handleSubmit} className="submit-btn">
              Submit
            </button>

            <button onClick={closeModal} className="close-btn">
              close
            </button>
          </Modal>
        </div>
        {/* <div className="mid-page">
          <Carousel
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            transitionTime={2}
            verticalSwipe={"standard"}
          >
            <div>
              <span>HELLO! I'M</span>
              <span className="name">NITISHA BHATTARAI</span>
              <span className="name">A WEB DEVELOPER</span>
            </div>
            <div>
              <span className="name">BASED ON KATHMANDU</span>
            </div>
          </Carousel>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
