import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import BarbellWeights from './BarbellWeights.js';

class PlatesSelect extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weight: this.props.useImperial ? 45 : 20
        }
    }

    componentWillMount() {
        this.setState({
           plates: this.props.useImperial ? [2.5, 5, 10, 25, 45] : [0.5, 1, 2.5, 5, 10, 15, 20, 25]
        });
    }

    increaseWeight(weight) {
       this.setState({
           weight: this.state.weight += weight
       });
    }

    render() {
        return (
            <section className="PlatesSelect">
                <h3>{ this.state.weight }</h3>
                <BarbellWeights useImperial={ false } weight={ this.state.weight }/>
                <ul className="plate-list">
                    {this.state.plates.map((plate, i) =>
                        <li key={i} className={ 'plate-' + (plate + '').replace('.', 'p') } onClick={ () => this.setState({ weight: this.state.weight += (plate * 2) }) }>{ plate }</li>
                    )}
                </ul>
            </section>
        );
    }
}

PlatesSelect.propTypes = {
    
};

export default PlatesSelect
