import GitnGitHub from "./Blogs_Container/GitandGithub/GitandGithub"
import WebExtesion from "./Blogs_Container/WebExtension/WebExtension"
export default function Blogs(){



    return(
        <div className="Myblogs">
            <div className="Myblogs_heading">
                <h2>MY BLOGS</h2>
                <p>This Section Contains List Of Blogs I've Written So Far..</p>
            </div>
            <div className="Myblogs_section">
                <GitnGitHub/>
                <WebExtesion/>
            </div>
            <div className="Explore_Blogs">
                <a href="https://develop4you.hashnode.dev/" target="__blank">Explore 🚀 My Blogs</a>
            </div>
            
        </div>
    )
}