import React, {Component} from 'react'
import Score from './Score.jsx'

class Student extends Component {
    render(){
        console.log(this.props.info.scores)
        return (
            <>
                <h1>{this.props.info.name}</h1>
                <p>{this.props.info.bio}</p>
                {this.props.scores.map((score, index) => {
                    return <Score 
                     key={`Score-${index}`}
                    date={score.date} 
                    score={score.score}

                    />
                })}
            </>
        )
    }
}

export default Student