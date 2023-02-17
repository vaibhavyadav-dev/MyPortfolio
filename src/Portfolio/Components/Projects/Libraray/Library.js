import LibraryImg from "./LibraryImg.png"




export default function Library(){


    return(
            <div className="projects_work">
            <a href="https://lively-dune-0b6b72f00.2.azurestaticapps.net/#" target="__blank"><img src={LibraryImg}></img></a>
            <div className="projects_info">
                <p>
                    This Simple Library Managment Website.
                </p>
                <p>
                    This is My First Step to Open Source Contribution where I've learned to contribute into Open Source.<br></br>
                    Tech Stack: HTML, CSS, Javasacript.
                </p>
                <button><a href="https://github.com/samipak458/Simple-Library-Managment" target="__blank"> Repo Link</a></button>
            </div>
            </div>
    )
}