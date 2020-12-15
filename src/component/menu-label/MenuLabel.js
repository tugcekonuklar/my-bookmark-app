import './menu-label.css'
const MenuLabel = (props) => {

    return (
        <div className="menu-label-container">
            <div className="menu-label">
                <div className="menu-label-icon">
                    {props.children}
                </div>
                <span>{props.title}</span>
            </div>
            <span className="menu-label-span">{props.count}</span>
        </div>
    )
}

export default MenuLabel;