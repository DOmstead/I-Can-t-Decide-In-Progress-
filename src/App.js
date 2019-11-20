import React from 'react';
import './App.css';
import RecipeComp from './Recipe.js';
import CuisineWheel from './CuisineWheel';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {startingPage: true, CuisineWheel:false, RecipeComp:false, cuisine: "", newRecipe:false}
  }

  updateCuisine = (food) => {
    this.setState({cuisine: food });
    // console.log(`updateCuisine ran and got ${food}`)
    // console.log(this.state.cuisine)
  }

  recipeToggle = () => {
    this.setState(prevState => ({RecipeComp: !prevState.RecipeComp}))
  }

  cuisineWheelToggle = () => {
    this.setState(prevState => ({CuisineWheel: !prevState.CuisineWheel}))
  }

  newRecipeToggle = () => {
    this.setState( prevState => ({newRecipe: !prevState.newRecipe}))
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div id= "homeContainer">
          <button class= "home" id= "home" onClick = {() => this.setState({startingPage: true, CuisineWheel:false, RecipeComp:false, cuisine: "", newRecipe:false})}>I Can't Decide Home</button>
          </div>
          { this.state.startingPage &&
          <div>
            <h1> I Can't Decide!</h1>
            <h3> An app to help you choose.</h3>
            <p> Select an option below. </p>
            <button onClick = {() => {this.setState(prevState => ({CuisineWheel: !prevState.CuisineWheel, startingPage: !prevState.startingPage}))}}>I can't Decide what to cook! </button>
            {/* <button>Help me choose from a custom list(WIP)</button> */}
            {/* <button onClick = {() => console.log(this.state)}>Check State</button> */}
          </div>
          }
          {this.state.CuisineWheel && <CuisineWheel changeCuisine={this.updateCuisine} />}
          {this.state.RecipeComp && <RecipeComp cuisine ={this.state.cuisine}/>}
          {/* {this.state.cuisine !== "" && <button onClick = {this.recipeToggle}>{`${this.state.cuisine} sounds delicious! Show me my recipe!`}</button>} */}
          {this.state.cuisine !== "" && !this.state.newRecipe && <button onClick = {() => {this.recipeToggle(); this.cuisineWheelToggle(); this.newRecipeToggle()}}>{`${this.state.cuisine} sounds delicious! Show me my recipe!`}</button>}
          {this.state.cuisine !== "" && this.state.newRecipe && <button onClick = {() => {this.cuisineWheelToggle(); this.recipeToggle(); this.setState({cuisine:""}); this.newRecipeToggle() }} >{`Let's Try Again`}</button>}
          {/* <button onClick = {() => console.log(this.state)}>Check State</button> */}
        </header>
      </div>
    );
  };
}

export default App;


