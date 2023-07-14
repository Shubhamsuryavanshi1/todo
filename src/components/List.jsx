import ListItem from "./ListItem";
import classes from "./List.module.css"


const List = (props) => {
    return(
        
            <ul className={classes.list}>
                {props.items.map((list) => (
                    <ListItem 
                    key={list.id}
                    text={list.text}
                    like={list.like}
                    dislike={list.dislike}
                    />
                ))}
            </ul>
        
    )
}
export default List;