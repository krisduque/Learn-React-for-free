import React, {Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount(){
        console.log(this.state)
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                        console.log(memes[0])
                let imgUrl = memes[0].url
                console.log(imgUrl)
                this.setState({
                    allMemeImgs: memes
                })
            })

    }
    
    handleSubmit(event){
        event.preventDefault()
        console.log("Clicked!") 
        let rand = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)]
        let imgUrl = rand.url
        console.log(rand)
        this.setState({
            randomImg: imgUrl
            })
        
    }
    
    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.topText} 
                        name="topText" 
                        placeholder="Top Text" 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        value={this.state.bottomText} 
                        name="bottomText" 
                        placeholder="Bottom Text" 
                        onChange={this.handleChange} 
                    />
                <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}


export default MemeGenerator

