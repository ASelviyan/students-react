import React, {Component} from 'react';

 class Score extends Component{
     render(){
         return(
             <>
                <p>{this.props.date}</p>
                <p>{this.props.score}</p>

             </>
         )
     }
 }

 export default Score