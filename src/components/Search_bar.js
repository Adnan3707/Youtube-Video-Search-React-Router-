import React from "react"
class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state= {
         term:"Controlled Component " 
         }    
    }
    render(){
        return (
        <div className="search-bar">
            <input 
            value={this.state.term}
             onChange={event => this.onInputChange(event.target.value)}/>
            value of input is : {this.state.term}
        </div>
            )
    }
    onInputChange(term){
        console.log(term)
       this.setState( {term : term})
        this.props.onSearchChange(term)
    }
}

export default SearchBar