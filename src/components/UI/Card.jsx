import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className // to get the class name set by us in custom component
    return <div className={classes}>{props.children}</div>
}

export default Card;