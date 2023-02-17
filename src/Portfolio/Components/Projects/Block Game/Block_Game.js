import blockgameimg from "./blockgameimg.png"


export default function BlockGame(){


    return(
            <div className="projects_work">
            <a href="https://captaintron.github.io/BlockGame/" target="__blank"><img src={blockgameimg}></img></a>
            <div className="projects_info">
                <p>In This Project I've Implemented Classes, Constructor, Events into function.</p>
                <p>
                    Tech Stack: Javascript, CSS, HTML.
                </p>
                <button><a href="https://github.com/CaptainTron/BlockGame" target="__blank"> Repo Link</a></button>
            </div>
            </div>
    )
}