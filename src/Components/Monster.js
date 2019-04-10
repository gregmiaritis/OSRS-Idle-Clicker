import React, { Component } from 'react';

class Monster extends Component {

	constructor(props) {
		super(props);

		this.onClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const element = document.getElementsByClassName('monster-image-wrap')[0];
		console.log(e.clientY, element.offsetTop);
		const Xcoord = e.clientX - element.offsetLeft - 24;
		const Ycoord = e.clientY - element.offsetTop - 178;

		this.props.clickMonster(this.props.currentMonster, Xcoord, Ycoord);
	}

	calculateHitpointsPercentage(currentHP, maxHP) {
		return currentHP / maxHP * 100 + "%";
	}

	render() {
		const currentMonster = this.props.currentMonster;

		return (
			<div className='monster-wrap'>
				<div className='monster-name-wrap'>
					<h1 className='monster-name'>{currentMonster.name} (Lv. {currentMonster.combatlevel})</h1>
				</div>
				<div className='monster-hitpoints'>
					<div className='monster-hitpoints_stats'>{currentMonster.current_hp}/{currentMonster.max_hp}</div>
					<div className='monster-current_hitpoints' style={{width: this.calculateHitpointsPercentage(currentMonster.current_hp, currentMonster.max_hp)}} ></div>
				</div>
				<div className='monster-background'>
					<div className='monster-image-wrap' onClick={this.onClick}>
						<div id='monster-hitsplats'></div>
						<img className='monster-image' src={currentMonster.img} alt={currentMonster.img} />
					</div>
				</div>
			</div>
		);
	}
}

export default Monster;