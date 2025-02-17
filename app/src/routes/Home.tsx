import React from 'react'
import { Link } from 'react-router-dom'
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "🐀 Encoder Rat Decoder Rat 🐀" },
    {
      name: "description",
      content: "Welcome to React Router!"
    },
  ];
}

const Home: React.FC = () => {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <ul>
        <li><Link to="/projects/gender-generator">Gender Generator</Link>: Novel interface for seeing how gender you are right now.</li>
        <li><Link to="/orfelia">The Orfelia</Link>: A utopian hazy queer night club experience set in 2053.</li>
      </ul>
      <h2 id="faq">FAQ</h2>
      <h3 id="who-are-you-">Who are you?</h3>
      <p>We are two rats shitposting. Encoder Rat Decoder Rat (E🐀D🐀) is creative technologists <Link to="https://dylanbox.com/">Dylan Box</Link> (they/them) and <Link to="https://mariakuz.github.io/">M Kuznetsov</Link> (they/them) who first met through queer leftbook. Their vision is to explore the rat techno future (a lens for radical digital explorations). Individually, M’s previous work has focused on designing and questioning alternative futures, such as their newsletter, The Finkedin Dispatch, and a zine on exploring drag influences for adversarial attacks on facial recognition. Dylan’s work has focused on building and supporting community-driven creative spaces in Detroit. They have worked developing branding and curriculum for the Mt. Elliott Makerspace and the Hype Teen Center, and the opening of two art galleries and studios, The Untitled Bottega and Riopelle Collective.</p>
      <h3 id="what-does-erdr-mean-">What does ERDR mean?</h3>
      <p>You know, one rat encodes, the other decodes. Rat neural interfaces strike a note in us all.</p>
      <h3 id="what-kind-of-work-do-you-make-have-made-and-want-to-make-">What kind of work do you make, have made, and want to make?</h3>
      <p>Our debut project <strong><Link to="/projects/gender-generator">Gender Generator</Link></strong> premiered at the MIT CAST Unfolding AI Symposium.</p>
      <p>Current Project: <strong><Link to="/orfelia">The Orfelia</Link></strong></p>
      <p>Past proposals: <strong>It’s a Jubilee, Archie</strong> A short film exploring a future of queer data abolition.</p>
      <p>Projects we’d like to work on:</p>
      <ul>
        <li>Attack Helicopter: the malware that drops gender columns from databases</li>
        <li>This gender does not exist</li>
        <li>Trans people naming list</li>
        <li>UI as art</li>
        <li>Are you a wave or a particle?</li>
        <li>AR app that overlays trans flags over American flags</li>
      </ul>
      <h3 id="how-can-i-work-with-you-">How can I work with you?</h3>
      <p>ERDR is open for technical and creative consultating specializing in the intersection of design, technology, futures, and gender. Do you want to incorporate deep conversations into your company, school, or non-profit? We&#39;re here for you! Contact <Link to="mailto:dylan@dylanbox.com">Dylan Box</Link> and let&#39;s start talking.</p>
    </>
  )
}

export default Home