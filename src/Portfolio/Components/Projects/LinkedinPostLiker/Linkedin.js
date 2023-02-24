import Linkedinimg from "./Linkedinimg.png"




export default function LinkedinPandC(){
    


    return(
            <div className="projects_work">
            <a href="https://develop4you.hashnode.dev/creating-advance-web-extension" target="__blank"><img src={Linkedinimg}></img></a>
            <div className="projects_info">
                <h4>Advance Web Extension - Linkedin Liker And Commenter</h4>
                <p>
                    This Is My Advance Web  Extension that takes number of Post and Comment Count as input and automatically likes and post "CFBR" on Entered number of Likes and Post.
                </p>
                <p>
                    Tech Stack: Javascript.
                </p>
                <button><a href="https://github.com/CaptainTron/Linkedin-Post-Liker-and-Commenter" target="__blank"> Repo Link</a></button>
            </div>
            </div>
    )
}