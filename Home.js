import React from 'react';
import Navbar from './Navbar';
import TodoItems from './TodoItems';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state= { flag:false, inputValue:'', board_name:[], count:0};
		this.handleClick = this.handleClick.bind(this);
		this.handleCreateClick = this.handleCreateClick.bind(this);
		this.handleState = this.handleState.bind(this);
		// this.populateOnBoardElement = this.populateOnBoardElement.bind(this);
		// this.renderBoardCard = this.renderBoardCard.bind(this);

	}
	handleClick(){
		this.setState({flag:true});

	}
	handleCreateClick(){
		var element = this.state.inputValue;
		var key = this.state.count;
		this.setState({
        board_name: [ ...this.state.board_name, element]
      });
    
  }
	handleState(e){
		this.setState({inputValue : e.target.value});
	}



	render()
		{
			return(
			<div>
				<div className="row">
		    		<div className="col s12 m3">
			      		<div className="card blue-grey darken-1 board-card">
				        	<div className="card-content white-text">
				          		<span className="card-title">Boards</span>
				          		<p>Please enter the name of the card</p>
	        					<div className="input-field col s6 margin-5">
		        					<form>
		        						<label for="board_name">Board Name</label>
		          						<input value={this.state.inputValue} id="board_name" type="text" className="validate" onChange ={this.handleState} />
		        					</form>
		        					<a className="waves-effect waves-light btn-small" onClick ={this.handleCreateClick}>CREATE</a>
				        		</div>
				       		</div>
				       	</div>
				    </div>
				</div>
				<TodoItems board_name={this.state.board_name} inputValue={this.state.inputValue}/>
			</div>
			);
		}
		

}