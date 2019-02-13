import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            location:"",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({[name]: checked}) :
            this.setState({[name]: value}) 
    }
    
    render() {
        return (
            <main>
                <form>
                    <input
                        placeholder="First Name"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    <input 
                        placeholder="Last Name"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    <input
                        placeholder="Age"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChange}
                    />
                    <br />
                    
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male" 
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male 
                    </label> 
                    <br />
                    
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female" 
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />
                    
                    <label> Location </label>
                        <select 
                            value={this.state.location}
                            onChange={this.handleChange}
                            name="location"
                        >
                            <option value="">Please choose a location.</option>
                            <option value="San Jose">San Jose</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Daly City">Daly City</option>
                            <option value="Milpitas">Milpitas</option>
                            <option value="Fremont">Fremont</option>
                        </select>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan" 
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        />Vegan
                    </label> 
                    <br />
                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher" 
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                        />Kosher
                    </label> 
                    <br />
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree" 
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                        />Lactose Free
                    </label> 
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location} </p>
                <p>Your dietary restrictions: </p>
                <p>Vegan: {this.state.isVegan ? "Yes " : "No "} </p>
                <p>Kosher: {this.state.isKosher ? "Yes " : "No "} </p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes " : "No "} </p>
            </main>
        )
    }
}

export default App
