import { List } from "./list.js"
import "./style.css"
export class Example extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 0,
            number: 1,
        }
        this.submit = false;
    }
    render(){
        return(
            <div>
                <h2>
                    From <input type="text" onChange={e => this.stateChange(0,e)}/>
                    To <input type="text" onChange={e => this.stateChange(1,e)}/>
                    Choose <input type="text" onChange={e => this.stateChange(2,e)}/>
                </h2>
                <h2>
                    {"From "+this.state.min+" to "+this.state.max+" choose "+this.state.number + " number(s)."}
                </h2>
                <button onClick={() => this.submitValue()}>submit</button>
                {this.submit && <List var={this.state}/>}
            </div>
        );
    }
    stateChange(index,e){
        this.submit = false;
        if(index == 0){
            this.setState({min: parseInt(e.target.value)});
        }
        else if(index == 1){
            this.setState({max: parseInt(e.target.value)});
        }
        else{
            this.setState({number: parseInt(e.target.value)})
        }
    }
    submitValue(){
        if(this.state.number > 0){
            this.submit = true;
            this.forceUpdate();
        }
    }
}

ReactDOM.render(<Example/>,
    document.getElementById("example"));