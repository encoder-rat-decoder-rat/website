import React from 'react';
import VideoBackground from "../../components/VideoBackground";
import IMG_0438 from '../../images/nightAtTheOrfelia/IMG_0438.jpeg';
// ?width=1200height=630
import IMG_0438_social from '../../images/nightAtTheOrfelia/IMG_0438.jpeg';
import TextFilters from "../../components/TextFilters";
import "./Home.css"

import type { Route } from "./+types/Home";

export const meta: Route.MetaFunction = () => [
  { title: "A Night at The Orfelia" },
  { name: 'description', content: "The Orfelia is an interactive art and performance event series set in 2054 at the queer nightclub of your utopian dreams. The Orfelia is our ecstatic vision of a world that lies just within our grasp." },
  { name: "keywords", content: "queer, nightclub, utopian, dreams, art, performance, event, 2054, detroit, midwest" },
  { property:"og:image", content: IMG_0438_social}
]

const OrfeliaHome: React.FC = () => (
  <section id="orfelia-home">
    <TextFilters />
    <VideoBackground src={["https://player.vimeo.com/video/1038435582"]} aspectRatio={16/9}>
      <h1>
        Envisioning the future cannot be left to those in power.
      </h1>
    </VideoBackground>

    <div className="container">

      <h2 id="a-night-at-the-orfelia" className="highlighted-text">A Night at The Orfelia</h2>
      <p>The Orfelia is an interactive art and performance event series set in 2054 at the queer nightclub of your utopian dreams. The Orfelia is our estatic vision of a world that lies just within our grasp. On June 29th, 2024, two dozen artists, designers, and technologists (and a team of the most strapping volunteers) from across the Midwest assembled to make artwork and experiences to help bring this world into the present–and hopefully our future as well.</p>
      <p>Grab an embroidered hanky to flag kinks not-yet-possible, lounge in the glow green hues of the algae bioreactor and fondle a genetically engineered slug designed for DIY hormone treatment. The stage and dancefloors beckon: between pumping sets from DJs, build and fight in our robot fight club back the loading docks, or maybe cool down in the dirt at The Pit. We'll see you in the queer utopia–if you're ready to build it with us.</p>
      <p>Find us on <a href="https://instagram.com/theorfelia">Instagram</a> to keep on top of what we&#39;re working on.</p>

      <figure id="main-stage">
        <img src={IMG_0438} alt="IMG_0438" />
        <figcaption>The main stage at the Orfelia</figcaption>
      </figure>
    </div>
  </section>
)

export default OrfeliaHome;