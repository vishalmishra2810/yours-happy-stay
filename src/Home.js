import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

//card photos
import card1 from "./images/card1.webp";
import card2 from "./images/card2.webp";
import card3 from "./images/card3.webp";
import card4 from "./images/card4.webp";
import card5 from "./images/card5.jpg";
import card6 from "./images/card6.webp";

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={card1}
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src={card2}
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src={card3}
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src={card4}
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src={card5}
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src={card6}
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
