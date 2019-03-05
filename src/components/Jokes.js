import React, { Component } from 'react';
import jokesData from './jokesData'
import Joke from './Joke.js'

class Jokes extends Component {
    render() {
        
       /* const nums = [1,2,3,4,5,6]
        const doubled = nums.map(function(num) {
            return num * 2
        })
        console.log(doubled) */

       const jokeComponents = jokesData.map((joke)=>{ // dans un const car c'est un nouveau tableau
            return(
                <Joke key={joke.id} question={joke.question} answer={joke.answer}/>
            )
        })

        return (
            <div style={{ backgroundColor:"#888888"}}>
                <h1 style={{color: "red", backgroundColor:"black"}}>Answers and Questions</h1>
                {jokeComponents}
            </div>
        );
    }
}

export default Jokes;

/*              <Joke question="who is the first one" answer="Alice Cooper" />
                <Joke question="who is the second one" answer="Jimi hendrix and"/>
                <Joke answer="Axl Roses"/>
                <Joke answer="Brian Johnson"/>  */