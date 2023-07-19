import React, { useState, useEffect } from 'react'

export default function AboutMe() {

    const [Emoji, setEmoji] = useState("");
    let Emojis = ["😎", "🤪", "☕", "💻", "🎯", "🤟", "🚀", "🤑"]
    let i = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            if (i == Emojis.length)
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
                            Hii, My name Is <span className='spwords'>Vaibhav Yadav</span>. I'm Currently Pursuing my B.Tech (Information Technology) 2021-2025 from Madan Mohan Malviya University of Technology, Gorakhpur.<br />
                            I recently completed my MERN stack Development Internship with COM.BOT (formarly WA Team Inbox), here I've gained hand on Experience of different APIs with their Authorization while working on Saas with Actions and Triggers.<br /> I've also done my Frontend Development Internship from Mynadezhda Consultancy Services Pvt. Ltd where I was Involved in development of different modules of a ERP software that can handle 2k-5k users at a time. Both of these are <span className='spwords'> paid Internships</span>.<br />
                            These Internships, and projects combined with my real-world experience, problem-solving abilities, collaborative mindset, and commitment to continuous learning, make me a strong candidate. I am excited about the opportunity to contribute my skills and knowledge to the team and drive the success of future projects.<br />
                            The Will to Create something <span className='spwords'>Innovative</span> excites me the most, it keeps me motivated to try and build something
                            that has potential to impact society.
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

                        <div>
                            <p>Apart From Web-Development, I'm also interested in DBMS, Networking, OOPs, Cybersecurity, Cloud Computing and <span className='spwords'> DSA (Data Structure and Algorithm).</span> </p>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}