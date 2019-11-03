/* globals $ */
import React from 'react';

import BoardCard from './BoardCard';

export default class BoardRows extends React.PureComponent {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log("my card ",this.props.board_name);
    console.log('I have been Called');
      return(
        <div className="mdl-grid mdl-grid--no-spacing">
          <BoardCard board_name={this.props.board_name}/>
        </div>
      );
  }
}
