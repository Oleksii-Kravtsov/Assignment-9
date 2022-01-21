import React, {Component} from 'react';

class Debit extends Component {
    
    render() {
        const debitData = this.props.debitData

        return (
            <div>
                
                { debitData.map((debitItem) => (
                    <ul key={debitItem.id}>
                        <li>Description: {debitItem.description}</li> 
                        <li>  Amount: {debitItem.amount}</li> 
                        <li>  Date: {debitItem.date}</li> 
                    </ul>
                )
                )}       
            </div>
            
        );
    }
}

export default Debit;