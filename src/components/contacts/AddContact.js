import React, {Component} from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
class AddContact extends Component {
    state = {
        name:'',
        email:'',
        phone:'',
        errors:{}

    };

    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        //check for the errors

        if(name===""){
            this.setState({name: 'Name is required'})
            return;
        }
        if(email===""){
            this.setState({email: 'Email is required'})
            return;
        }
        if(phone===""){
            this.setState({phone: "Phone is required"})
            return;
        }

        const newContacts = {
            id: uuid(),
            name,   /*using ES6 , it's like name:name  */
            email,
            phone
        };

        dispatch({type:'ADD_CONTACT', payload: newContacts});


        //clear state
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })

        this.props.history.push('/')
        
    }
    render(){
        const {name, email, phone, errors} = this.state;
        return(
            <Consumer> 
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        
                        <TextInputGroup 
                            label ="Name"
                            name ="name"
                            placeholder = "Enter Name"
                            value= {name}
                            onChange= {this.onChange}
                            error= {errors.names}
                        />

                        <TextInputGroup 
                            label ="Email"
                            name ="email"
                            type="email"
                            placeholder = "Enter Email"
                            value= {email}
                            onChange= {this.onChange}
                            error= {errors.email}
                        />

                        
                        <TextInputGroup 
                            label ="Phone"
                            name ="phone"
                            placeholder = "Enter Phone"
                            value= {phone}
                            onChange= {this.onChange}
                            error = {errors.phone}
                        />

                        <input 
                        type="submit" 
                        value="Add Contact"
                        className="btn btn-light btn-block"
                        />
                    </form>

                </div>
                
            </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default AddContact;