import React, {useState, useEffect} from 'react'

export default function AboutMe(){

    const [Emoji, setEmoji] = useState("");
    let Emojis = ["😎","🤪","☕","💻","🎯","🤟","🚀","🤑"]
    let i = 0;
    useEffect(() => {
      const interval = setInterval(() => {
        if(i==Emojis.length)
        i = 0;
        setEmoji(Emojis[i]);
        i++
      }, 1500);
      return () => clearInterval(interval);
    }, []);


    return (
        <div className="About_Me">
            <div>
            <div className="aboutme_Heading">
                <h2> ABOUT ME {Emoji}
            </h2>
            </div>
            <div className="aboutme_para">
                <p>Here You Will find More Information About Me Regarding Technology and Programming</p>
            </div>

        {/* Here it will contain two sides boxes  */}
        <div className="side_containers">
            {/* This one for Left Side boxes  */}
        <div className="Left_side_containers">
        <h2>Get To Know Me: </h2>
        <article>
            lroem is shda fsaf ajfas f fasjfdasidf asdf asdfjas dfasjdfas dfasjfdasjf
            asfdjasfjasdif safjsa fasjfdasidfasf afjasfj 
            dfashdf afha sfas'dfas
            fdf fjdfjasdfjaskdfjafafs
            fsafdhsajfaifja sfafdja fasjfdasidffa fjdfjasdfjaskdfjafafsaf fhasfjsafjas
            fas fsajfjasdfajsfjf
            dfsjdfosajfslafas'dfasjfdasjffasjfafjasfjasf a
            sfsa faofjfsaf
            safsafjsafojsafsanfskadf
            safsoiafjsadjfas'ldfas
            fsadhf asdjasjdlsajsoi jsaofj osadjfsad fsoadjfs jfsfj soadfj sadfjoasfjsaoi fj
            saf asdofjsafijsaf sajf safd sajfj safjsaof safjasfdjasfjafjejsjf sadfjoasfjsaoi
            my name is vaibhav yadav and today I'm building my portfolio website and now i've nothing to say.
        </article>
        <button className="ContactmeBtn">Contact Me</button>
        </div>
        {/* This one for Right Side Boxes */}
        <div className="Right_side_containers">
        <h2>My Skills: </h2>
        
        {/* Skill box goes here */}
        <div className="BOX_containers">

        <div className="BOX">HTML</div>
        <div className="BOX">CSS</div>
        <div className="BOX">Bootstrap</div>
        <div className="BOX">Javascript</div>
        <div className="BOX">Python</div>
        <div className="BOX">Git</div>
        <div className="BOX">GitHub</div>
        <div className="BOX">React JS</div>
        <div className="BOX">Node JS</div>
        <div className="BOX">REST APIs</div>
        <div className="BOX">Express JS</div>
        <div className="BOX">Terminal</div>
        <div className="BOX">SQL Basics</div>

        </div>
        </div>
        </div>



            </div>
        </div>
    )
}