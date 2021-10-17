import React from 'react';
import PhoneNumber from './PhoneNumber';


class ListItem extends React.Component {

    constructor () {
        super();
        this.state = {
            phoneNumber: false
        }
    }

    


    render () {
        // toggle visibility of phone number
        const togglePhoneNumber = () => {
            this.setState({phoneNumber: !this.state.phoneNumber});
        }
        

        const firstLetter = this.props.name.slice(0,1);
        return (
            <div>
                <li 
                onMouseEnter={()=>{togglePhoneNumber()}}
                onMouseLeave={()=>{togglePhoneNumber()}}
                className={"list-item"}>
                    {this.state.phoneNumber && <PhoneNumber number={this.props.number}/>}
                    {!this.state.phoneNumber && firstLetter.toUpperCase() + this.props.name.slice(1)}
                </li>
            </div>
        )
    }
    
}

export default ListItem;