import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import reducerActions from '../store/actions';

class Payment extends Component {
    constructor(props) {
        super(props)
        this.onClickPay = this.onClickPay.bind(this);
    }
    componentDidMount() {
        window.fetch('/api/myLoan').then((a) => (a.json())).then(data => this.props.actions.dataRecieve(data));
    }
    onClickPay = () => {
        this.props.actions.pay();
    }
    render() {
        const { myLoan } = this.props;
        console.log(myLoan)
        return (
            <div className="payment-block">
                <h4 className="name">Hello {myLoan.name}</h4>
                <h4 className="loannumnber">Loan Number:{myLoan.loanNumber}</h4>
                <h4 className="amount">Total:{myLoan.loanAmount}</h4>
                <h4 className="weeks">Weeks Left:{myLoan.weeksLeft}</h4>
                <h4 className="amountLeft">Amount Left:{myLoan.amountLeft}</h4>
                <button onClick={this.onClickPay}>PAY</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        myLoan: state.myLoan,
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(reducerActions, dispatch)
});
Payment.defaultProps = {
    myLoan:{
        loanAmount:0,
        name:"",
        loannumnber:0,
        weeksLeft:0,
        amountLeft:0
    }
}
Payment.propTypes = {
    myLoan : PropTypes.shape({
        loanNumber: PropTypes.number,
        name:PropTypes.string,
        amountLeft:PropTypes.number,
        weeksLeft:PropTypes.number,
        loanAmount:PropTypes.number,

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
