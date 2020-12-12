import{Component} from 'react';
import './sections';
import './Dashboard.css';
import './radioBttn';
class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            abc : [
                {
                    type: "input", price: "10$",
                },
                {
                    type: "input", price: "100$"
                }
            ],
            sections : [
                {
                    title : "Category",
                    items : [
                        {id : 1, icon:"", name:"kl"}
                    ]
                },
                {
                    title: "test",
                    items: [
                        {id : 2, icon: "", name: "test"},
                        {id: 3, icon: "", name: "test1"}
                    ]
                }
            ]

        }
    }
    render(){
        return(
            <div className={"pageCords"}>
                <div className={"VuesaxEcommerceDashboard"}>
                    <div className={"VerticalMenu"}>
                    </div>
                    <section className={"Dashboard"}>
                        <div className={"topDiv"}>
                            <div className={"Navbar"}>
                            </div>
                            <div className={"breadCrumbs"}>
                                {/*<aside className={"settings"}>*/}
                                {/*    <img className="ovals" src={ovals}/>*/}
                                {/*</aside>*/}
                                {/*<img className="oval" src={oval}/>*/}
                            </div>
                        </div>

                        <section className={"SubscribersCardAndFilters"}>
                            <div className={"Fealter"}>
                                <h1 className={"filters"}>Filters</h1>
                            </div>
                            <div className={"subscribersCard"}>
                                <aside className={"SCInnerElements"}>
                                    <span className={"multiRange"}>
                                        <p className={"multiRangeText"}>Multi Range</p>
                                        {/*<span className={"firstOption"} ontoggle={true}>*/}
                                        {/*    <input type="radio" id={"10$"} name={"bttn"} checked={"checked"}/>*/}
                                        {/*    <label htmlFor={"10$"}> 10$</label>*/}
                                        {/*</span>*/}
                                        {/*<span className={"firstOption"}>*/}
                                        {/*    <input type={"radio"} id={"to100$"} name={"bttn"} checked={"checked"}/>*/}
                                        {/*    <label htmlFor={"to100$"}> 10-100$</label>*/}
                                        {/*</span>*/}
                                        {/*<span className={"firstOption"}>*/}
                                        {/*    <input type={"radio"} id={"frm100to500$"} name={"bttn"} checked={"checked"}/>*/}
                                        {/*    <label htmlFor={"frm100to500$"}> 100-500$</label>*/}
                                        {/*</span>*/}
                                        {/*<span className={"firstOption"}>*/}
                                        {/*    <input type={"radio"} id={"500$"} name={"bttn"} checked={"checked"}/>*/}
                                        {/*    <label htmlFor={"500$"}> 500$</label>*/}
                                        {/*</span>*/}
                                        {/*<span className={"firstOption"} >*/}
                                        {/*    <input type={"radio"} id={"all"} name={"bttn"} checked={"checked"}/>*/}
                                        {/*    <label htmlFor={"all"}> all</label>*/}
                                        {/*</span>*/}
                                        {this.state.abc.map((t, i) => <input value={t.price} type={"radio"} />)}
                                    </span>
                                    <div className={"Slider"}>
                                        <aside className={"topPart"}>
                                            <span className={"a"}>
                                                <p className={"slid"}>Slider</p>
                                                <p className={"from2To4098"}>1.99 - 4098</p>
                                            </span>
                                            <aside className={"slider"}>
                                                <input className={"rangeSlider"} type={"range"} min={1.99} max={4098} value={3600}/>
                                            </aside>
                                        </aside>
                                    </div>
                                    <div className={"dashboardBlock"}>
                                        {this.state.sections.map((s, i) => <section key={i} items={s.items} title={s.title}/>)}
                                    </div>
                                </aside>
                            </div>
                        </section>
                        {/*    <div className={"Results"}>*/}
                        {/*        <p className={"resultText"}>7618 results found in 5ms</p>*/}
                        {/*    </div>*/}
                        {/*<select className={"DefaultDD"}>*/}
                        {/*    <option value={"default"}>def</option>*/}
                        {/*    <option value={"A"}>A</option>*/}
                        {/*    <option value={"B"}>B</option>*/}
                        {/*</select>*/}
                        {/*<div className={"GridView"}>*/}
                        {/*    <div className={"grid"}>*/}
                        {/*        <div className={"Rectangle"}></div>*/}
                        {/*        <div className={"Rectangle1"}></div>*/}
                        {/*        <div className={"Rectangle2"}></div>*/}
                        {/*        <div className={"Rectangle3"}></div>*/}
                        {/*    </div>*/}
                        {/*    <div className={"AlgoliaSearch"}></div>*/}
                        {/*</div>*/}
                        {/*<div className={"ListView"}>*/}
                        {/*    <div className={"list"}>*/}
                        {/*        <div className={"path"}></div>*/}
                        {/*        <div className={"path1"}></div>*/}
                        {/*        <div className={"path2"}></div>*/}
                        {/*    </div>*/}
                        {/*    <div className={"AlgoliaSearch"}></div>*/}
                        {/*</div>*/}
                    </section>
                </div>
            </div>
        )
    }
}
export default Dashboard;