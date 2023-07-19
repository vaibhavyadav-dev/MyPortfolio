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
        <div id='AboutME' className="About_Me">
            <div>
            <div className="aboutme_Heading">
                <h3> ABOUT ME {Emoji}
            </h3>
            </div>
            <div className="aboutme_para">
                <p>Here You Will Find More Information About Me</p>
            </div>

        {/* Here it will contain two sides boxes  */}
        <div className="side_containers">
            
            {/* This one for Left Side boxes  */}
        <div className="Left_side_containers">
        <h3>Know Me: </h3>
        <article>
            Hi My name Is <span className='spwords'>Vaibhav Yadav</span> .
            Currently I'm a Front End Developer, soon I will be a <span className='spwords'>Full Stack Developer</span> .
            I'm Fast and Self Learner, Learned Web Development by myself through Google, Community, Youtube, Stackoverflow, Blogs.
            I've build Majority of Projects during my learnings and now I'm ready with my skills to work for organization
            .<br></br>
            The Will to Create something <span className='spwords'>Innovative</span> excites me the most, it keeps me motivated to try and build something
            that has the potential to impact society.
            I loves how the World Work With <span className='spwords'>Codes</span> and to explore them.
        </article>
        <a href='mailto:21vaibhav11@gmail.com'><button className="ContactmeBtn">Contact Me</button></a>
        </div>
        {/* This one for Right Side Boxes */}
        <div className="Right_side_containers">
        <h3>My Skills: </h3>
        
        {/* Skill box goes here */}
        <div className="BOX_containers">

        <div className="BOX">HTML</div>
        <div className="BOX">CSS</div>
        <div className="BOX">Bootstrap</div>
        <div className="BOX">Javascript</div>
        <div className="BOX">Linux</div>
        <div className="BOX">Git</div>
        <div className="BOX">GitHub</div>
        <div className="BOX">React JS</div>
        <div className="BOX">Node JS</div>
        <div className="BOX">Express JS</div>
        <div className="BOX">APIs</div>
        <div className="BOX">Terminal</div>
        <div className="BOX">SQL Basics</div>
        <div className="BOX">AWS</div>
        <div className="BOX">MongoDB</div>
        <div className="BOX">Firebase</div>
        
        </div>
        </div>
        </div>



            </div>
        </div>
    )
}