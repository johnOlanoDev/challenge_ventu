import React from 'react'
import './dashboard.scss'
import { useState } from 'react'
import Receivables from '../../components/dashboard/Receivables'
import { UserDataChart } from '../../configs/dataChart'
import { images } from '../../constants'

const Dashboard = () => {

    const [receivablesChart] = useState({
        type: "bar",
        labels: UserDataChart.map((data) => data.year),
        datasets: [
            {
                label: "users Gained",
                data: UserDataChart.map((data) => data.userGain), 
                backgroundColor: ["#4DB6AC"],
                stack: 'Stack 0',
            },
            {
                label: "users Loser",
                data: UserDataChart.map((data) => data.userLost), 
                backgroundColor: ["#EBF3FA"],
                stack: 'Stack 0',
                padding: '10px',
            },
        ],
    })

    const [PayablesChart] = useState({
        type: "bar",
        labels: UserDataChart.map((data) => data.year),
        datasets: [
            {
                label: "users Gained",
                data: UserDataChart.map((data) => data.userGain), 
                backgroundColor: ["#F99746"],
                stack: 'Stack 0',
            },
            {
                label: "users Loser",
                data: UserDataChart.map((data) => data.userLost), 
                backgroundColor: ["#EBF3FA"],
                stack: 'Stack 0',
                padding: '10px',
            },
        ],
    })

    return (
        <div className="dashboard">
            <div className="dashboard__title">
                <div className="dashboard__title_text">Hi, Santiago.</div>
            </div>
            <div className="dashboard__set">
                <div className="dashboard__set_box-two">
                    <div className="data">
                        <div className="data__title">Account Balance</div>
                        <div className="data__mount">$4,250,000</div>
                        <a href='#' className="data__button">Cashout</a>
                    </div>
                    <a className="data" href='#'>
                        <div className="data__make">
                            <div className="data__make_icon">
                                <img src={images.icon_payment} alt="" />
                            </div>
                            <div className="data__make_text">Make New Payment</div>
                        </div>
                    </a>
                    <a className="data" href='#'>
                        <div className="data__make">
                            <div className="data__make_icon">
                                <img src={images.icon_invoice} alt="" />
                            </div>
                            <div className="data__make_text">Make New Invoice</div>
                        </div>
                    </a>
                </div>
                <div className="dashboard__set_box">
                    <div className="exchange">
                        <div className="exchange__title">Exchange Rate</div>
                        <div className="exchange__subtitle">Convert</div>
                        <input type="number" step="0.01" placeholder='$' required />
                        <div className="exchange__subtitle">5.00 Dólares Estadounidenses</div>
                        <div className="exchange__coins">
                            <div className="exchange__coins_input">
                                <input type="number" step="0.01" placeholder='USD - Dólar Estadounidense' required />
                                <input type="number" step="0.01" placeholder='USD - Dólar Estadounidense' required />
                            </div>
                            <a href='#' className="exchange__coins_button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
                                    <path d="M42.7239 21C42.7239 32.0082 33.422 41 21.8619 41C10.3019 41 1 32.0082 1 21C1 9.99184 10.3019 1 21.8619 1C33.422 1 42.7239 9.99184 42.7239 21Z" stroke="#3949AB"/>
                                    <path d="M24.79 28.875L24.79 15.8391L22.6899 17.8563C22.2324 18.2958 21.4913 18.2958 21.0338 17.8563C20.8043 17.6391 20.6909 17.3508 20.6909 17.0625C20.6909 16.7742 20.8052 16.4866 21.034 16.2673L25.1331 12.3298C25.5906 11.8903 26.3317 11.8903 26.7892 12.3298L30.8883 16.2673C31.3458 16.7067 31.3458 17.4186 30.8883 17.8581C30.4308 18.2975 29.6897 18.2975 29.2322 17.8581L27.1323 15.8391L27.1323 28.875C27.1323 29.4969 26.6086 30 25.9612 30C25.3137 30 24.79 29.4969 24.79 28.875ZM18.9341 13.125L18.9341 26.1574L21.0342 24.1402C21.4917 23.7007 22.2328 23.7007 22.6903 24.1402C23.1478 24.5796 23.1478 25.2915 22.6903 25.731L18.5912 29.6685C18.1337 30.1079 17.3925 30.1079 16.9351 29.6685L12.8359 25.731C12.6061 25.5141 12.4926 25.2258 12.4926 24.9375C12.4926 24.6492 12.607 24.3616 12.8358 24.1423C13.2932 23.7028 14.0344 23.7028 14.4919 24.1423L16.5918 26.1574L16.5918 13.125C16.5918 12.5031 17.1155 12 17.7629 12C18.4104 12 18.9341 12.5027 18.9341 13.125Z" fill="#3949AB"/>
                                </svg>
                            </a>
                        </div>
                        <div className="exchange__total">
                            <div className="exchange__total_mount">5 US = <span>4,96</span>3319 EU</div>
                            <div className="exchange__total_unit">1 USD = 0,938657 EUR   |    1 EUR = 1,06535 USD</div>
                        </div>
                    </div>
                </div>

                <div className="dashboard__set_box">
                    <div className="data">
                        <div className="data__title">Receivables</div>
                        <div className="data__mount">$4,250,000</div>
                        <a href='#' className="data__button">View All</a>
                    </div>
                    <Receivables chartData={receivablesChart}/>
                </div>
                <div className="dashboard__set_box">
                    <div className="data">
                        <div className="data__title">Payables</div>
                        <div className="data__mount">$4,250,000</div>
                        <a href='#' className="data__button">View All</a>
                    </div>
                    <Receivables chartData={PayablesChart}/>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard