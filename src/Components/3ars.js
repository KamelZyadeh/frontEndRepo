function ser(){
    return(
        <div className={"abc"}>
            <input
                type={"radio"}
                id={"all"}
                name={"bttn"}
                checked={this.state.price === "all"}
                // onChange={this.handleRadioChange}
                onClick={this.props.fun}
            />
            <label htmlFor={"all"}> all</label>
        </div>
    )
}

export default ser