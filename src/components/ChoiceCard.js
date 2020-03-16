import React, { Component } from 'react';
class ChoiceCard extends Component {
    render() {
        return (
            <div className={`choice-card ${this.props.background}`}>
                <p className={this.props.color}>{this.props.name}</p>
                <img src={this.props.img}></img>
                <p className={this.props.color}>{this.props.winner ? "Winner" : "Loser"}</p>
            </div>

        )
    }
}

export default ChoiceCard;