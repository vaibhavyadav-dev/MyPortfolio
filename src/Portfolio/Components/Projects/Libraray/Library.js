import LibraryImg from "./LibraryImg.png"




export default function Library(){
    


    return(
            <div className="projects_work">
            <a href="https://lively-dune-0b6b72f00.2.azurestaticapps.net/#" target="__blank"><img src={LibraryImg}></img></a>
            <div className="projects_info">
                <h4>Library Managment</h4>
                <p>
                    This Library Managment Website. Here I've Used Javascript Methods to takes input from user and display on the books shelves.
                    I've contributed to this project during Hacktoberfest 2022. 
                </p>
                <p>
                    Tech Stack: HTML, CSS, Javasacript.
                </p>
                <button><a href="https://github.com/samipak458/Simple-Library-Managment" target="__blank"> Repo Link</a></button>
            </div>
            </div>
    )
}