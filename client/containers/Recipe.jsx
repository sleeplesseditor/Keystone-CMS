import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipesFetchData } from '../actions/actions.js';
import _ from 'lodash';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.renderRecipe = this.renderRecipe.bind(this)
    }

    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/recipe/?list';
        setTimeout(() => { this.props.fetchRecipe(API_URL); }, 1000);
    }

    renderRecipe() {
        return _.map(this.props.recipes, recipe => {
            const img = recipe.image ? recipe.image.filename : '';
            function createMarkupForIngredients() {
                if (recipe.ingredientList) {
                    return {
                        __html: recipe.ingredientList,
                    };
                } else {
                    return;
                }
            };
            function createMarkupForInstructions() {
                if (recipe.cookingInstructions) {
                    return {
                        __html: recipe.cookingInstructions,
                    };
                } else {
                    return;
                }
            };
            if (recipe.state = "published") {
                return (
                    <div key={recipe._id}>
                        <h1>{recipe.name}</h1>
                        <img style={{ width: '300px', height: '300px' }} src={img} />
                        <h2>Ingredient List</h2>
                        <div dangerouslySetInnerHTML={createMarkupForIngredients()} />
                        <h2> Cooking Instructions </h2>
                        <div dangerouslySetInnerHTML={createMarkupForInstructions()} />
                    </div>
                );
            }
        });
    }
    render() {
        if (this.props.loading) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }
        return (
            <div>
                {this.renderRecipe()}
            </div>
        );
    };
};

function mapStateToProps(state, ownProps) {
    return {
        recipes: state.recipes,
        loading: state.loadRecipes,
    };
}

const mapDispatchToProps = dispatch => ({
    fetchRecipe: (url) => dispatch(recipesFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);