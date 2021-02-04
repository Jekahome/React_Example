import React  from 'react';

/*
export default function About() {
    return <div>I am About!</div>
}
*/

class About extends React.Component {
    render() {
        return (
            <div  style={{backgroundColor:"grey"}}>
                <h3>I am About!</h3>
            </div>

        );
    }
}

export default About;