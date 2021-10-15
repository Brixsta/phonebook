import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <div>
            <ul className={"list"}>
                {props.people.map((item, index)=>{
                    return (
                        <ListItem 
                            name={item.name}
                            number={item.number} 
                            key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default List;