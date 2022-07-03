
import React, {Component} from 'react';

class Lifecycle extends Component {

        constructor(props) {
            super(props);
            console.log("constr ") ;
        }

         render() {
             console.log("render") ;
             return <div> This is the lifecycle of a comp</div>;
         }

        componentDidMount() { console.log("componentDidMount: ") ; }
        componentWillUnmount() {console.log("componentWillUnmount: ") ; }

    }

    export default Lifecycle ;
