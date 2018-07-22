import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Register.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            amount: '',
            tenure: '',
            errors: {}
        }
        this.formInputChange = this.formInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    formInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("going to submit");
        const { name, amount, tenure} = this.state;
        const errors = this.checkValidity(name, amount, tenure);
        if(Object.keys(errors).length > 0 ) {
            this.setState({errors});
        }
        else {
            fetch('api/register', {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({name,amount,tenure})
            }).then((a) => (a.json())).then((data)=> this.setState({loan:true,loanNumber:data.loanNumber,name:"",amount:"",tenure:""}))
        }
    }
    checkValidity(name,amount,tenure) {
        const errors = {};
        if(name == ""){
            errors["name"] = true;
        }
        if(amount == "" || amount != parseInt(amount, 10)) {
            errors["amount"] = true;
        }
        if(tenure == "" || tenure != parseInt(tenure, 10)) {
            errors["tenure"] = true;
        }
        return errors;
    }
    render() {
        const { name, amount, tenure, errors, loan, loanNumber } = this.state;
        return (
            <div className="register-block">
                {loan && <h4>your loan number: {loanNumber}</h4>}
                <form className="register-form" onSubmit={this.handleSubmit}>
                <h4>Enter details</h4>
                    <label>
                        Name:
                        <input type="text" onChange={this.formInputChange} value={name} name="name" />
                    </label>
                    {errors["name"] && <span>name should not be empty</span>}
                    <label>
                        Amount:
                        <input type="text" onChange={this.formInputChange} value={amount} name="amount" />
                    </label>
                    {errors["amount"] && <span>amount invalid</span>}
                    <label>
                        Tenure:
                        <input type="text" onChange={this.formInputChange} value={tenure} name="tenure" />
                    </label>
                    {errors["tenure"] && <span>tenure invalid</span>}
                    <button>Submit</button>
                    <button><Link to='/myLoan'>Pay your loan</Link></button>
                </form> 
            </div>
        )
    }
}
export default Register;