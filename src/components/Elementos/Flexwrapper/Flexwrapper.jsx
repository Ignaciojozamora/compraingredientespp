import "./flexwrapper.css"

function Flexwrapper (props) {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Flexwrapper;