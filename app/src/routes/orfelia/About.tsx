import React from "react";
import AboutStylesheet from "./About.css?url"; 
import type { Route } from "./+types/about";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: AboutStylesheet },
];

const NightAtTheOrfelia: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1>About</h1>
        <p>The Orfelia is a nightclub in Detroit from 2054. For one night, we turned a three room warehouse into a space to discover and reflect on our preferred futures through interactive exhibits such as genetically-modified slugs, singing plastic-decomposing mycelium, and headlines from the future.</p>
        <p>With over 140 volunteers,  two dozen Midwestern artists, creatives, and performers imagining trans technologies, putting this together was our love letter to trans visioning and care work. We wanted to imagine the future through art and also be the future of nightlife we'd like to see.</p>
      </div>
      <div className="container">
        <h2 id="our-principles" className="highlighted-text">Our Principles</h2>
        <div id="our-principles-container">
          <div className="principle 1">
            queerness is an act of ongoing revolution
          </div>
          <div className="principle connector">+</div>
          <div className="principle 2">
            envisioning the future is too important to leave to those in power
          </div>
          <div className="principle connector">=</div>
          <div className="principle 3">
            we must envision queer joy in the future so we can achieve it
          </div>
        </div>
      </div>
      <div className="container">
        <h2 id="our-artists" className="highlighted-text">Our Artists</h2>
        <ul className="artist-list">
          <li>
            <h3>Adrian Choy & Joseph Sipka</h3>
            <h4>Robot Riot & Puralink</h4>
            <p>Explore how you can upcycle yesterday’s garbage to today’s robot companions. Create a robot companion to love to to fight in our arena and empathetically connect with other guests through Puralink brain implants.</p>
            <p>Adrian Choy is a filthy robot boy and organizer of Robot Riot, a Chicago-based robot fight club.</p>
          </li>
          <li>
            <h3>Ashley E’Laine</h3>
            <h4>Intrapersonal Wear</h4>
            <p>These accessories and body modifications are meant to give a kind of generative agency to the wearer- an ability to experience discomfort or comfort on one’s own terms, and to create an intimate experience between material and skin- from external touch and internal processing, to literally sustaining growth by sprouting one’s own modification (dermal expansion).</p>
            <p>Ashley is one of the original twinks of the infamous Salt Lick rave mine. He is a seasoned freak exploring texture and body-modification with accessories and tactile experience.</p>
          </li>
          <li>
            <h3>Aaron Egan</h3>
            <h4>Automat</h4>
            <p>The Salt Lick Aspic-Mat provides high-quality gelatinized meals and snacks for the discerning consumer. Meeting the desires for both chef-prepared delicacies and ready-to-eat products, aspics are a return to form for the culinary world, and a chance for the culinary artist to hold forth a more constructed piece. Aspics seek full utilization of products, allow for highlighting of locally-cultivated or hand-crafted items, and offer opportunities for electrolytic enhancement and other modifications to provide healthier food for the salt mine rave-goer.</p>
            <p>Fine dining chef Aaron Egan is also a seasoned actor and performer.</p>
          </li>
          <li>
            <h3>Eseosa Edebiri</h3>
            <h4>Body in the Clouds</h4>
            <p>Your heads are in the clouds and you wouldn't want it another way! You've partied hardy and it's time to rest!</p>
            <p>A printmaker and performer, Eseosa will be creating spaces and tools designed to create community care and support.</p>
          </li>
          <li>
            <h3>Runa</h3>
            <h4>Ghost Portal</h4>
            <p>This is a portal of rebirthed runes, accompanied by a boat of fir, engraved with mesolithic symbols. Runes of love, spiral of rejuvenation</p>
            <p>Runa is a runic reimaginer who thrives in sigil work.</p>
          </li>
          <li>
            <h3>HiJiN(X)</h3>
            <h4>Softonic cuddle club</h4>
            <p>a project about feeling soft touches, making space to be gentle and admire each other. We are reclaiming queer soft touches as not act for others but solely for ourselves, reclaiming touch as an act of care and expression of yearnings.</p>
            <p>HiJiN(X) (they/them) is an anti-binary Corean immigrant cultural worker driven by their disconnection and connection with the diaspora created by US imperialism and colonization. Born in Corea, they currently reside in Waawiyatanong (also known as Turtle Island or Detroit). They are a trauma informed visual problem solver and agitator who is driven by trans rage, and their hope to build community together and through beautiful queer liberatory connections.</p>
          </li>
          <li>
            <h3>Kylon Chiang & Rachel Arredondo</h3>
            <h4>Doll Haus</h4>
            <p>Trans healthcare as a weird, playful boutique experience</p>
            <p>Kylon is an artist and designer seeking to infuse the everyday with more humor and absurdity.</p>
            <p>Rachel Arredondo (she/her) is a designer and futurist trying to make every day life more playful and weird.</p>
          </li>
          <li>
            <h3>Levi Moos</h3>
            <h4>WRITHE!</h4>
            <p>Writhe! Is the publication of record for 2054’s wormplay community. Ecosexual kinks are IN and you can join by writing and reading personals, advice, and articles about the erotic pleasures of soil, androgyny, growth, wiggling, and the cycles of life and death in our biomes. You can also play in any body of soil you see fit. Outdoors and indoors, Saint Paul to Detroit, the vermicular possibilities are endless. Writhe! will produce an indoor soil play space known as The Pit at the Orfelia, June 29th, 2054. Whether you are a long term compost fiend or just cultivating curiosity, we hope you are able to come play with us!</p>
            <p>Levi Moos is a printmaker and zine artist, examining our relation to the natural world and dedicated to blurring the lines between man made and natural ecological spaces</p>
          </li>
          <li>
            <h3>Levon Kafafian Լեւոն Գաֆաֆեան</h3>
            <h4>Eternal Flame հավերժական կրակ</h4>
            <p>A spirit emerges from the world of Azadistan to upend old marital ideals, encouraging abundant oceanic communal love. In Armenian with English translation feed. </p>
            <p>Levon Kafafian is a weaver working the narrative threads of costume, artifact, ritual and installation into stories about possible worlds and potential futures.</p>
          </li>
          <li>
            <h3>Lyz Luidens</h3>
            <h4>Spare Parts Play Area</h4>
            <p>Build your ideal trans body out of detachable limbs, cybernetic eyes, bioluminescent skin implants, an ACTUAL social battery, using a variety of trash and technology.  In 2054, the exploration of gender transition, expression, euphoria, and fuckery has expanded in all directions. Body mods aren't boring anymore - they're absurd, silly, and queer.</p>
            <p>Lyz Luidens is a printmaker and social worker</p>
          </li>
          <li>
            <h3>Lindsay Skvarek, Nick Szydlo, & Sean Monaghan</h3>
            <h4>Saprotrophic commune</h4>
            <p>Rising global temperatures in the 2030’s created a beneficial climate for fungi to reproduce, greatly increasing the already abundant biodiversity. Scientists quickly began to realize the benefits of these fungus’s greatly malleable genetic pool and began selectively breeding fungi which all had a trait that enables them to break down and convert plastic to energy. In this process, scientists began to uncover another closely related trait: The output of this extra energy to create sound and light. This began one of the most popular interdisciplinary collaborations between art/science in the 2040’s, with artists, scientists and hobbyists selectively breeding musical funguses, funded  by carbon offset/plastic reduction initiatives. This artistic and scientific breakthrough represented a major cultural and ideological shift as well as a new interest in mycology as a DIY hobby.</p>
            <p>Nick Szydlo is an interdimensional tinkerer, junk craftsman and transdisciplinary artist.</p>
            <p>Sean is a Detroit-based electronic producer and synth player. Building with the medium of sound, Sean performs live mixings and creates multidimensional soundscapes, and will be creating responsive soundscapes designed to mimic the colonies of fungi coexisting within Ofelia</p>
            <p>Lindsay Skvarek is a ceramics and fibers artist. Her work is primarily sculptural and incorporates mixed media elements through the use of beauty supplies and mirrors. Her sculptures embody her experience as a transgender woman capturing her feeling of dysphoria and incompleteness as well as vanity and self obsession.</p>
          </li>
          <li>
            <h3>Carta Monir</h3>
            <h4>Privacy Screen</h4>
            <p>A custom curated goonshow. In a gay utopia, sex and erotic imagery would be freely accessible to those who wanted to engage with them.</p>
            <p>Printmaker, cartoonist, and erotic artist Carta Monir will be exploring sexuality in 2053, by investigating queer pleasure within nightclubs and queer spaces.</p>
          </li>
          <li>
            <h3>Jessica Krcmarik</h3>
            <h4>Vending Machine of the Future</h4>
            <p>Peek inside and purchase a souvenir of your night in 2054. Some things might fit right in at your home, and others? Might have to wait 30 years before they're cool again.</p>
            <p>Jessica is a designer and illustrator who's been thinking about the quotidian future.</p>
          </li>
        </ul>
      </div>
      <div className="container">
        <h2 id="our-djs" className="highlighted-text">Our DJs and Musicians</h2>
        <p>Our DJs were curated and chosen by Sapphyree and Auntie Chanel</p>
        <ul className="dj-list">
          <li>
            <h3>Sapphyree</h3>
            <p>Sapphyree’s preferred 2054 is quееr and аfrofuturist as fuck. Sapphyree (they/she) is a Detroit-based dj, event curator, and graphic designer with strong roots in the city’s queer electronic dance music scene. As co-founder of the Pillow Princess party series, they have an ongoing mission of creating safe, inviting spaces for the BIPOC queer community. The DJ delivers a potent blend of tough love, as their sonic affairs traverse the realms of thunderous techno, enthralling electro, and decadent dance tracks that compel your body to move in sync. As much as they are enjoying every moment of the night, know that they devote their love strictly to the dancers.</p>
          </li>
          <li>
            <h3>Auntie Chanel</h3>
            <p>In her vision for 2054, universal living wages would empower quееr artists to fully devote themselves to pursuing and investing in their dreams, free from the burden of having to monetize every skill for mere survival.</p>
            <p>Auntie Chanel is a DJ, event coordinator, graphic designer and founder of the new Detroit party series, Siren. As a Blаck femme, her voice and cultural work has been instrumental in the restructure happening within the queer dance scene. She has curated and collaborated on numerous events that uplift, empower and provide alternative income for BIPOC and quееr people. As a commander of the dance floor, her mixing selections are a blend of uptempo house, femme centric rap ballads, vogue battle beats, hard techno, electro, and ghetto tech.</p>
          </li>
          <li>
            <h3>Ty Jones</h3>
            <p>By 2054, we might be able to have a rave in space..Ty Jones is a Black non-binary DJ and producer pushing the boundaries of electronic music in Detroit. Their sound is a unique blend of genres, drawing on Vogue House Techno and Dance Music. Jones's productions are known for serving her signature kinky-kunty aesthetics. </p>
          </li>
          <li>
            <h3>Savannah G</h3>
            <p>Savannah G is a Midwest native permanently residing in Detroit. Her style is an eclectic harmony of R&B, Hip Hop, Soul, as well as Disco and House music from all eras unified through an affinity for local and underrepresented voices. Her discerning litmus test is unequivocal sincerity, sensuality, and honesty in relation to one’s sense of self. As a gаy trаns woman, salient themes of the LGBTQ+ movements are intrinsically woven into her message of music as a deeply sacred and communal therapeutic vessel. Whether it be uptempo anthemic Disco or raw and delicate outsider R&B, her desire is not one of obscurity or exclusivity but of acceptance through transformation and tenderness.</p>
            @Sav_G_ 
          </li>
          
          <li>
            <h3>Duck Trash</h3>
            <p>Duck Trash is a quееr midwest techno & electro DJ who believes in the healing powers of the dancefloor. They illustrate the full range of human emotion in each otherworldly heavy dance mix. They are passionate about the quееr roots of rave culture and strive to ensure that raves remain a space of quееr liberation.</p>
          </li>
          <li>
            <h3>Cherriel</h3>
            <p>Cherriel’s 2054 envisions advancements in biohacking, liberation, technosleaze,  global embodiment of sonder, colorful polycarbonate panel structures, an amalgam of Tsutomu Nihei's aesthetics meets Xenofeminism and affordable teledildonics. Within the depths of Detroit's queer underground scene, Cherriel's presence embodies the feminine journey both physically and virtually. Inspired by end-of-world freedom exhales, sound design of PS2 era survival horror and JRPGs, digital hardcore, industrial undertones, as well as avant-garde no wave and electroclash, she weaves together a myriad of influences into a sonic tapestry. Cherriel's sonichemy beckons listeners to explore uncharted territories of electronic exploration as she channels her sound spells to summon catharsis on the dancefloor.</p>
            mixtressofchaos
          </li>
          <li>
            <h3>Ashton Swinton</h3>
            <p>Ashton Swinton is what you might call a Detroit player. Born and raised in the city,  some of his earliest musical memories are listening to ghetto tech records in his basement. Always expect heavy vocals, acid and all the аss shaking beats imaginable.</p>
            @yungmachomom
          </li>
        </ul>
      </div>
    </>
  );
}

export default NightAtTheOrfelia;