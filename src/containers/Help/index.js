import React from "react"
import "../Home/index.scss"
import { Link } from "react-router"

export default class HelpContainer extends React.PureComponent{
    constructor(props) {
        super(props)
}

render(){
    return (
        <div>
            <div className="helpImg">HELP PAGE</div>
        <div className="nav-left nav-menu">
        <Link
        className="nav-item is-tab is-active" 
        to={"/home"}>HOME</ Link>
        </div>
        </div>  
    )
}
}

    