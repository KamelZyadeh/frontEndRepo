import {Component} from 'react';
import ser from './3ars'
class RadioBttn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: "all"
        };
        // this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    // handleRadioChange(event) {
    //     this.setState({
    //         price: event.target.value,
    //         fun:()=>{}
    //     });
    // }

    render() {
        return (
            <div>
                {
                this.state.loop.map((t, i) => (
                    <ser khara={t}/>
                ))
                }
            </div>
        );
    }
}
export default RadioBttn;