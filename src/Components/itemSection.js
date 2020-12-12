import React, {Component} from 'react';

class itemSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
        }
    }

    setBG = (background) => {
        return {
            backgroundSize: "cover",
            backgroundImage: "url(" + background.default + ")"
        }
    }

    render() {
        return(
            <div className={"itemSectionContainer"}>
                <div className={'itemImage'} style={this.setBG(this.state.item.icon)}/>
                <div>{this.state.item.titles}</div>
                {this.state.item.ext ?
                    <div className={'itemImage'} style={this.setBG(this.setBG.item.ext)}/>: ""
                }
            </div>
        )
    }
}

export default itemSection;