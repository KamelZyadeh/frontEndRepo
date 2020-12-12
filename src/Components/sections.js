import {Component} from 'react';
import itemSection from "./itemSection";

class sections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titles : this.props.titles,
            items : this.props.items,
        }
    }

    render() {
        console.log(this.state)
        return (
                <div className={"sections"}>
                    <div className={"sectionTitle"}>{this.state.titles}</div>
                    {this.state.items.map((item, i) => <itemSection key={i} item={item}/>)}
                </div>
            )
    }
}

export default sections;