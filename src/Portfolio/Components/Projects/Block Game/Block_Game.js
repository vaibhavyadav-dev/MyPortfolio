import blockgameimg from "./blockgameimg.png"


export default function BlockGame(){


    return(
            <div className="projects_work">
            <a href="https://captaintron.github.io/BlockGame/" target="__blank"><img src={blockgameimg}></img></a>
            <div className="projects_info">
                <h4>Block Game</h4>
                <p>
                    This is Single Player Game build with HTML canvas.
                    In this project I've Implemented Javascript classes, Constructor, methods into function to handle
                    user input and generate result.
                    The Black Block Is controllable by user by UP and DOWN buttons and fire a ammo with SPACEBAR, which refills in 
                    every 5 seconds.
                </p>
                <p>
                    Tech Stack: Javascript, CSS, HTML.
                </p>
                <button><a href="https://github.com/CaptainTron/BlockGame" target="__blank"> Repo Link</a></button>
            </div>
            </div>
    )
}