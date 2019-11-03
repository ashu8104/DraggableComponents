import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListItem from './ListItem';


export default class Addlist extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.updateListName = this.updateListName.bind(this);
		this.populateList = this.populateList.bind(this);
		this.state ={ listName:'', listItem:[]}


	}
	updateListName(e){
		this.setState({listName: e.target.value});
	}
	handleClick(){
		var listName = this.state.listName;
		this.setState({
        listItem: [ ...this.state.listItem, listName]
      });
	}

	populateList(){
		if(this.state.listItem){
		var list =[];
		var listItem = this.state.listItem;
		console.log(listItem);
    
        for(let i=0; i< this.state.listItem.length; i++){
            list.push(<ListItem listItem={this.state.listItem[i]}/>);
            
          }
          return (
          	//console.log("Im boardRows ",boardRows);
            <div> 
            {list}
            </div>
        );
    }

	}
	render(){
		return(
			<div>
				<div className="my-container">
						<form>
					       <input placeholder="Enter List Name" id="add-list" value ={this.state.listName} type="text" className="validate" onChange={this.updateListName}/>
					    </form>
					    <a className="waves-effect waves-light btn-small card-layout" onClick ={this.handleClick}>Add list</a> 
	  			</div>
  			<div className="divider"></div>
  			<div className = "my-list"> Your Todo list </div>
  			<div className="divider"></div>
  			<div className ="row">
  			<div className ="col s3 m3">
  			{this.populateList()}
  			</div>
  			</div>
  			</div>
  			);
	}
}