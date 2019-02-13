import React, {Component} from "react"

// class Header extends Component{
//     render(){
//         return(
//             <h3>This is a header!</h3>
//         )
//     }
// }

function Header(){
    return(
        <header>
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?" />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header