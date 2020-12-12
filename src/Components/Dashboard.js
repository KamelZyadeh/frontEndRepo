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
                    </section>
                </div>
            </div>
        )
    }
}
export default Dashboard;