import React, { Component } from 'react';
import PropTypes from 'prop-types'
class son extends Component {
  state = {  }
  del(){this.props.deleteItem(this.props.index)}
  
  render() { 
    return ( 
    <div  onClick={this.del.bind(this)}>{typeof(this.props.content) }-----{this.props.content}</div>
     );
  }
}
son.propTypes={
  content:PropTypes.number,
}
 
export default son;
