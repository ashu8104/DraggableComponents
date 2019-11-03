import React from 'react';
import BoardRows from './BoardRows';

export default class TodoItems extends React.Component{
	constructor(props){
		super(props);
		this.populateOnBoardElement = this.populateOnBoardElement.bind(this);
	}
	populateOnBoardElement(){
		var boardRows = [];
		var board_name = this.props.board_name;
    
        for(let i=0; i< this.props.board_name.length; i++){
            boardRows.push(<BoardRows board_name={this.props.board_name[i]}/>);
            
          }
          return (
          	//console.log("Im boardRows ",boardRows);
            <div> 
            {boardRows}
            </div>
        );


	}

	render(){
		if(this.props.board_name.length>0){
		return(
			
			<div className="row">
	    		<div className="col s2 m3">
			          		{this.populateOnBoardElement()}
			          	</div>
			        </div>		
			    );
			}else{
				return(<div></div>)
			}
	}

}
