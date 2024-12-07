import React from "react";
import messsyLogo from "../../images/messsy-logo.svg";
import messsyBioreactor from "../../images/messsy-bioreactor.png";
import messsyEagle from "../../images/messsy-eagle.png";
import messsyMutualAid from "../../images/messsy-mutual-aid.png";
import messsyRobotFight from "../../images/messsy-robot-fight.jpeg";
import messsyYearning from "../../images/messsy-yearning.png";
import orfeliaHeaderImage from "../../images/orfelia-header-image.png";

const Messsy = () => (
  <>
    <div className="text-callout">
      <img
        src={orfeliaHeaderImage}
        alt="Stylized header image with the text 'Envisioning the future cannot be left to those in power. The future is not yet queer.' overlaid on a photo of a queer dance floor filled with colorful costumerd attendees"
      />
      <h1>
        <img src={messsyLogo} alt="Messsy by Orfelia" />
      </h1>
      <h2>November 18th</h2>
      In November, we hosted MESSSY, a preview our event series: a Night at the Orfelia. We invited artists to create a poster or preview of their work and share what they’re imagining 2053 will hold. MESSSY was an art show, a dance floor, and a gloopyhole into the future of queer nightlife (and the world around it).
    </div>
      
    <aside className="image-aside left">
      <img
        src={messsyEagle}
        alt="Late night set at the Eagle. Gallons DJs in front of a neon balloon lit backdrop to a crowed room of dancers."
      />
    </aside>

    <div className="text-callout">
      We had low expectations for this event that we were funding out of pocket. However, y'all showed up! All of those hours running ourselves ragged were worth it to see how people's eyes lit up in the space. We welcomed 500 attendees and received at least 150 reflections on preferred futures. Resident Advisor selected us as an RA Pick event, Pride Source listed us as "5 Queer Things You Can Do Right Now-ish," and over 400k people watched our Twink Mines reel on Instagram. Those numbers pale next to the comments and praise you made sure to tell us in person and online.
    </div>
      
    <aside className="image-aside right">
      <img
        src={messsyBioreactor}
        alt="Algae Bioreactor seating installation at MESSSY. A circular orange lounge seat is arranged around a center chamber overflowing with green foam has a collection of lit tubes that are suspended into the ceiling. Behind the seat, a collection of posters line the room behind it."
      />
    </aside>

    <div className="text-callout">
      Being in community with you is a blessing. We're very grateful to everyone who left us feedback on where we can grow. Thank you so much to all of the volunteers who helped us build out the set, and to everyone who came to envision our preferred futures. 
    </div>

    <aside className="image-aside left">
      <img
        src={messsyRobotFight}
        alt="Robots made for the Robot Riot fight. They are made of small wind-up and battery-powered devices decorated wildly with props and items."
      />
    </aside>

    <div className="text-callout">
      We and all 500 of you who stopped by - know that trans joy, trans technologies, and trans spaces exist in the future. 
      We'll make sure they do.
    </div>

    <aside className="image-aside right">
      <img
        src={messsyMutualAid}
        alt="Boxes of COVID-19 tests, fentanyl testing strips, narcan, and other public health giveaways at MESSSY"
      />
    </aside>

    <div className="text-callout">
      We are continuing to seek sponsorship, so if you or anyone you know would like to make an impact on queer Midwestern futures, please reach out. If this is what we could do with less than 10k, imagine what we can do with your help. Please visit us on <a href="https://opencollective.com/queer-futures-collective" target="_blank">Open Collective</a> to see our financials and contribute as well.
    </div>

    <aside className="image-aside left">
      <img
        src={messsyYearning}
        alt="A orange note card filled out by an attendee with the header 'In 2053, I want to see...'and the response in handwriting 'indigequeers, landback, netzero housing collectives, personsals in more languages, no borders, transit!!, name restoration (wawlyaalanong! etc.), 2 day worrk week."
      />
    </aside>
    
    <hr />

    <div className="container">
      <h2 id="press-release">Press Release</h2>
      <h2 id="-messsy-on-resident-advisor-https-ra-co-events-1781520-"><a href="https://ra.co/events/1781520">Messsy on Resident Advisor</a></h2>
      <h2 id="the-orfelia-presents-messsy-a-night-of-queer-nightlife-history-and-futures-in-detroit">The Orfelia Presents MESSSY – A Night of Queer Nightlife History and Futures in Detroit</h2>
      <p>Detroit, MI – Queer Futures Collective, the team behind the Orfelia project, is excited to announce MESSSY, an evening of dancing, art and reflection on the past and future of queer nightlife in Detroit. This event is in partnership with Detroit Sound Conservancy and Arts &amp; Scraps and set to take place in Detroit on November 18th.</p>
      <p>As the Orfelia project continues to gain momentum in advance of a larger spring event, we are eager to raise awareness and foster support for this innovative endeavor. MESSSY serves as a preview event that will showcase in-progress work, our inspirations, and introduce new people to the world of the Orfelia.</p>
      
      <hr />

      <p><strong>Event Highlights</strong></p>
      <p>MESSSY is an art show featuring artifacts from the future (artist imaginations of the future of queer nightlife). Attendees will have the opportunity to dance and socialize, thanks to electrifying DJ sets. The feature work will highlight historical clubs, depictions of the future and reflection on what their future of nightlife might look like, connecting the past and the future.</p>
      <p>The Queer Futures Collective artists will be present to share their work and opportunities for involvement. For more information about MESSSY and the Orfelia project, follow us on Instagram at <a href="https://www.instagram.com/theorfelia/">@theorfelia</a> or visit us at <a href="https://rat.computer/orfelia">https://rat.computer/orfelia</a>.</p>
      <h3 id="about-orfelia">About Orfelia</h3>
      <p>The Orfelia project aims to catalyze action by blending speculative futures, technology, and nightlife to reflect on how we actually feel when presented with our utopian desires.
      Artist duo Encoder Rat Decoder Rat has assembled the Queer Futures Collective to stage a portal into this possible future and share what in today&#39;s world leaves them aching for something different. QFC is a community of creative queer futurists spanning Detroit, Chicago, and Minneapolis and a variety of media, from fiber art to generative design.</p>
      <p>For media inquiries or sponsorship opportunities, please contact:</p>
      <p>Dylan Box and M Kuznetsov
        <a href="mailto:hello@rat.computer">hello@rat.computer</a>
      </p>
    </div>
  </>
)

export default Messsy;