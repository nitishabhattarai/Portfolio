import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Modal from "react-modal";

import Photo from "../../assets/images/Professional.jpg";
import "./Home.css";

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

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="home-page">
      <div className="container">
        <div className="intro-content">
          <p>Enthusiastic, Creative frontend developer is here!</p>
          <span>Get ready to turn your ideas into reality!</span>
          <br />
          <br />
          <button onClick={openModal}>Contact Me</button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="write your message" />
            </form>
            <button onClick={closeModal}>close</button>
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
