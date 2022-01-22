import React, {Component} from 'react';
import AccountBalance from './AccountBalance';

class Debit extends Component {

    state = {
        total:14568.27
    };
    
    render() {
        const debitData = this.props.debitData
        

        return (
            <div>
                
                { debitData.map((debitItem) => (


                    <ul key={debitItem.id}>
                        <li>Description: {debitItem.description}</li> 

                        <li> 
                            
                            Amount: {debitItem.amount } <br />
                            Available Balance Now Is: {this.state.total = parseFloat(this.state.total).toFixed(4)  - debitItem.amount }

                        </li> 

                        <li>  Date: {debitItem.date}</li> 
                    </ul>
                    
                    
                )
                )
                
                }
                
                 <AccountBalance accountBalance={this.state.total}/>    
            </div>
            
        );
    }
}

export default Debit;