import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class BarbellWeights extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weight: 0
        }
    }

    componentWillMount() {
        this.setState({
           weight: this.props.weight 
        });
    }

    calcWeights(weight, isImperial) { 
        let weights = [],
            barbellWeight,
            available;

        if (isImperial) {
            available = [2.5, 5, 10, 25, 45].reverse();
            
            barbellWeight = 45;
        } else {
            available = [2.5, 5, 10, 20, 25].reverse();
            
            barbellWeight = 20;
        }

        weight = weight - barbellWeight;

        if (!weight || weight < 5) {
            console.warn('Invalid input.');
            
            return [];
        }

        available.forEach((e) => {
            while(weight && (weight / 2)  >= e) {
                weight = weight - (e * 2);
                weights.push(e);
            }
        });

        return weights
    }

    render() {
        // const { todo, completeTodo, deleteTodo } = this.props;

        let element,
            plates = this.calcWeights(this.props.weight);

        element = (
            <ul className="plate-list">
                {plates.map((plate, i) =>
                    <li key={i} className={ 'plate-' + (plate + '').replace('.', 'p') }>{ plate }</li>
                )}
            </ul>
        );

        return (
            element
        );
    }
}

BarbellWeights.propTypes = {
    
};

export default BarbellWeights
