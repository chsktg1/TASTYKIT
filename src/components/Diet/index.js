import React, {Component} from 'react'
import './index.css'
import Header from '../Header'

const API_KEY = 'd0b5791c74fd49378b83e4b3d2135796' // Replace with your Spoonacular API key

class DietForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      recipes: [],
      isLoading: false,
      error: null,
      selectedRecipe: null,
      recipeDetails: null,
    }
  }

  handleRecipeClick = async recipeId => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch recipe details')
      }
      const ingredients = []
      const recipeDetails = await response.json()
      // console.log('data of one', JSON.stringify(recipeDetails))
      // const recipeDetails = {
      //   title: data.title,
      //   image: data.image,
      //   ingredients: data.extendedIngredients.map(ing => ing.originalString),
      //   instructions: data.analyzedInstructions,
      // }
      recipeDetails.extendedIngredients.forEach(a => {
        ingredients.push(a.nameClean)
      })
      recipeDetails.allIngredients = ingredients

      this.setState({recipeDetails, selectedRecipe: recipeId})
    } catch (error) {
      this.setState({error})
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {vegetarian, vegan, glutenFree, dairyFree} = this.state

    this.setState({isLoading: true})

    try {
      const queryParams = {
        apiKey: API_KEY,
        diet: [],
      }
      if (vegetarian) {
        queryParams.diet.push('vegetarian')
      }
      if (vegan) {
        queryParams.diet.push('vegan')
      }
      if (glutenFree) {
        queryParams.diet.push('gluten free')
      }
      if (dairyFree) {
        queryParams.diet.push('dairy free')
      }

      const queryString = new URLSearchParams(queryParams).toString()
      console.log('queryString', queryString)
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${queryString}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch recipes')
      }
      const data = await response.json()
      const recipes = data.results
      // console.log('recipes', recipes)
      this.setState({
        recipes,
        isLoading: false,
        selectedRecipe: null,
        recipeDetails: null,
      })
    } catch (error) {
      this.setState({error, isLoading: false})
    }
  }

  handleInputChange = event => {
    const {target} = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const {name} = target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const {
      vegetarian,
      vegan,
      glutenFree,
      dairyFree,
      recipes,
      isLoading,
      error,
      selectedRecipe,
      recipeDetails,
    } = this.state

    return (
      <div className="body">
        <Header />
        <div>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <label className="form-label">
              Vegetarian:
              <input
                className="form-checkbox"
                name="vegetarian"
                type="checkbox"
                checked={vegetarian}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form-label">
              Vegan:
              <input
                className="form-checkbox"
                name="vegan"
                type="checkbox"
                checked={vegan}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form-label">
              Gluten-free:
              <input
                className="form-checkbox"
                name="glutenFree"
                type="checkbox"
                checked={glutenFree}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form-label">
              Dairy-free:
              <input
                className="form-checkbox"
                name="dairyFree"
                type="checkbox"
                checked={dairyFree}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {isLoading && <p>Loading recipes...</p>}
          {error && <p>Failed to fetch recipes: {error.message}</p>}
          {recipes.length > 0 && (
            <ul>
              {recipes.map(recipe => (
                <li key={recipe.id}>
                  <button
                    className="recipeButton"
                    type="button"
                    onClick={() => this.handleRecipeClick(recipe.id)}
                  >
                    {recipe.title}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {selectedRecipe && (
            // <div>
            //   {recipeDetails.map(step => (
            //     <div key={step.number}>
            //       <h3>Step {step.number}</h3>
            //       <p>{step.step}</p>
            //       <h4>Ingredients:</h4>
            //       <ul>
            //         {step.ingredients.map(ingredient => (
            //           <li key={ingredient.id}>{ingredient.name}</li>
            //         ))}
            //       </ul>
            //       <h4>Equipment:</h4>
            //       <ul>
            //         {step.equipment.map(item => (
            //           <li key={item.id}>{item.name}</li>
            //         ))}
            //       </ul>
            //       {step.length && (
            //         <p>
            //           Cooking Time: {step.length.number} {step.length.unit}
            //         </p>
            //       )}
            //     </div>
            //   ))}
            // </div>

            <div>
              {/* {('{console.log(selectedRecipe)}', console.log(selectedRecipe))} */}
              <h2>{recipeDetails.title}</h2>
              <div className="imageDiv">
                <img
                  className="recipeImage"
                  src={recipeDetails.image}
                  alt={recipeDetails.title}
                />
              </div>

              <h3>Ingredients to use:</h3>
              <ol>
                {selectedRecipe &&
                  recipeDetails.allIngredients.map(e => <li>{e}</li>)}
              </ol>
              <ul>
                {/* {recipeDetails.analyzedInstructions.steps.map(ing => (
                <li key={ing}>{ing.step}</li>
              ))} */}
                {/* {console.log(
                'recipeDetails.analyzedInstructions.steps',
                JSON.stringify(recipeDetails.analyzedInstructions[0].steps),
              )} */}
                <h4>Procedure</h4>
                {recipeDetails.analyzedInstructions[0].steps.map(e => (
                  <>
                    <p className="recipe-para">
                      <span>{JSON.stringify(e.number)}</span> .{e.step}
                    </p>
                  </>
                ))}
              </ul>
              {/* <h3>Instructions:</h3>
            <p>{recipeDetails.instructions}</p> */}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default DietForm
