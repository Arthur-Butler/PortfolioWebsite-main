import React, { Component } from "react";
import "./App.css";
import { data } from "C:/Users/Arthu/OneDrive/Desktop/IT_Younglings/PortfolioWebsite-main/portfolio-site/src/services/data";
const name = data.name;
const occupation = data.occupation;
const description = data.description;
const pic = "images/" + data.image;
//var percentageElement = document.getElementById("percentage");
//var percentage = 0;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = { isClicked: false };
    this.percentageChange = this.percentageChange.bind(this);
    this.timeIntervals = this.timeIntervals.bind(this);
    this.state = { percentage: 0 };
  }

  percentageChange() {
    //var percentageElement=this.state.percentage;
    var percentages=0;
    percentages += parseInt(Math.random() * 10);
    if (percentages > 100) {
      percentages= 100;
    }
    this.setState({ percentage: percentages})
    this.timeIntervals();
  }

  timeIntervals() {
    setTimeout(this.percentageChange(), Math.random() * (1000 - 500) + 500);
  }

  handleBtnClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    //const percentage = this.state.percentage;
    const app = document.getElementsByClassName("App");
    if (isClicked) {
      app.classlist.add("hidden");
    }
    return (
      <div className="App" onLoad={this.timeIntervals}>
        <div className="page">
          <div id="container">
            <h1>:(</h1>
            <h2>
              Your PC ran into a very dedicated and hard working programmer's
              website.
            </h2>
            <h2>
              <span id="percentage"></span>% complete
            </h2>
            <div id="details">
              <div id="qr">
                <div id="image">
                  <img
                    src="https://qrcodechimp.s3.amazonaws.com/qr/PROD/61d820bab81ebe1e1e588db4/qr/61d820ccaa0b4151e3755296_t.png?v=79"
                    alt="QR Code"
                  />
                </div>
              </div>
              <div id="stopcode">
                <h4>
                  For more information about this issue and possible fixes,
                  visit
                  <br />
                  www.linkedin.com/in/arthur-butler-7721591a4
                </h4>
                <h5>
                  If you call an employer, give them this info:
                  <br />
                  Stop Code: 101 BACK-END ENGINEER FOUND
                </h5>
              </div>
            </div>
          </div>
        </div>
        <header className="Header">
          <button className="shadow" onClick={this.handleBtnClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8px"
              height="7px"
              viewBox="0 0 8 7"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
            >
              <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
            </svg>
          </button>
          <div className="typewriter">
            <div className="Name">
              <h1>Arthur Nyaniso Butler</h1>
            </div>
            <h2>Back-end Software Engineer</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
