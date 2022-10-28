import React, {useState} from 'react'
import '../receivables/receivables.scss'
import stateSpan from '../../constants/states'
import dueDate from '../../constants/dues'

function Receivables() {
    
    const dataReceivables = [
        { id: 1, name: "Client Name", paymentStatus: "Completed", status : "Delivered", date : "10/06/21", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Missing" } },
        { id: 2, name: "Client Name", paymentStatus: "Completed", status : "Delivered", date : "10/06/22", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Regular" } },
        { id: 3, name: "Client Name", paymentStatus: "Processing", status : "Missing", date : "10/06/23", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Missing" } },
        { id: 4, name: "Client Name", paymentStatus: "Completed", status : "Missing", date : "10/06/24", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Regular" } },
        { id: 5, name: "Client Name", paymentStatus: "Completed", status : "Delivered", date : "10/06/25", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Regular" } },
        { id: 6, name: "Client Name", paymentStatus: "Missing", status : "Processing", date : "10/06/26", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Processing" } },
        { id: 7, name: "Client Name", paymentStatus: "Missing", status : "Processing", date : "10/06/27", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Missing" } },
        { id: 8, name: "Client Name", paymentStatus: "Processing", status : "Delivered", date : "10/06/28", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Processing" } },
        { id: 9, name: "Client Name", paymentStatus: "Completed", status : "Processing", date : "10/06/29", amount : "$120000", typePayment : "Credit Card", payed: "3/10", paymentsDueDate : { expired : "Jun 9", status: "Missing" } },
    ]

    const [data, setData] = useState(dataReceivables)

    return (
        <div className='receivables'>
            <div className='receivables__content'>
                <div className='receivables__content_header main__content_header'>
                    <div className="box">
                        <div className="box__title">Receivables</div>
                        <div className="box__input">
                            <input type="text" name='search' placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className='receivables__content_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Payment Name</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Type of Payment</th>
                                <th>Installments Payed</th>
                                <th>Payments Due</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(element => {
                                return (
                                    <tr>
                                        <td>{element.name}</td>
                                        <td>{stateSpan(element.paymentStatus)}</td>
                                        <td>{stateSpan(element.status)}</td>
                                        <td>{element.date}</td>
                                        <td>{element.amount}</td>
                                        <td>{element.typePayment}</td>
                                        <td>{element.payed}</td>
                                        <td>{dueDate(element.paymentsDueDate.status, element.paymentsDueDate.expired)}</td>
                                        <td>
                                            <a href="#">Request</a>
                                            <a href="#">Credit</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Receivables