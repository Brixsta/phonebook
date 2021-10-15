import React from 'react';

const ListItem = (props)=> {
    const firstLetter = props.name.slice(0,1)
    return (
        <div>
            <li className={"list-item"}>{firstLetter.toUpperCase() + props.name.slice(1)}</li>
        </div>
    )
}

export default ListItem;