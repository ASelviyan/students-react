import React, {Component} from "react";
import Student from './Student'

class Roster extends Component {
    render() {
        return(
            <>
               {this.props.students.map((student, index) => (
                    <Student 
                     key={`Student-${index}`}
                     info={student} 
                     scores={student.scores}
                    />
                ))}
            </>
        )
    }
}

export default Roster