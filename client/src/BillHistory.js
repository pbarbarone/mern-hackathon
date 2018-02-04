import React, {Component} from 'react';

class Billhistory extends Component {
    render(){
        const allBills = this.props.bills.map(bill => {
            return <BillList rent={bill.rent} utilities={bill.utilities} date={bill.dueDate} />
        })
            return(
                <div className="bill-container">
                    <div className="bill-list">
                        <ul>
                            <li className="bill-grid-header">
                                <span>Rent</span>
                                <span>Utilities</span>
                                <span>Date</span>
                            </li>
                        </ul>
                    </div>
                    <div className="past-bills">
                        <ul>
                            {allBills}
                        </ul>
                    </div>
                </div>
            )
    }
}

class BillList extends Component {
    render(){
        const rawDate = new Date(this.props.date);
        const date = rawDate.getMonth() + 1 + '/' + rawDate.getDate()  + '/' + rawDate.getFullYear();
        return(
            <li className="bill-list-history">
                <span>${this.props.rent}</span>
                <span>${this.props.utilities}</span>
                <span>{date}</span>
            </li>
        )
    }
}

export default Billhistory;