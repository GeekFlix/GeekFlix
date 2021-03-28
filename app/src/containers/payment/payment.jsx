import React from 'react'
import * as FaIcons from 'react-icons/ri';

import RegisterHeader from '../../components/registerHeader/registerHeader';


const payment = () => {
    return (
        <div className="paymentContainer">
        <RegisterHeader/>
            <div className="visa">
                {/* <div className="visaIcon">
                    <FaIcons.RiVisaLine/>
                </div> */}
                <div className="visaText">VISA/Mastercard Número</div>
                <input type="text" className="visaInput" maxLength="14" name="visa"/>
            </div>
            <div className="date">
                <div className="dateText">
                    Fecha de vencimiento (MM/AAAA)
                </div>
                <div className="date-field">
                    <div className="month">
                        <select name="Month" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>- Select One -</option>
                            <option value="january">01</option>
                            <option value="february">02</option>
                            <option value="march">03</option>
                            <option value="april">04</option>
                            <option value="may">05</option>
                            <option value="june">06</option>
                            <option value="july">07</option>
                            <option value="august">08</option>
                            <option value="september">09</option>
                            <option value="october">10</option>
                            <option value="november">11</option>
                            <option value="december">12</option>
                        </select>
                    </div>
                    <div className="year">
                        <select name="Year" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>- Select One -</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                            <option value="2035">2035</option>
                            <option value="2036">2036</option>
                            <option value="2037">2037</option>
                            <option value="2038">2038</option>
                            <option value="2039">2039</option>
                            <option value="2040">2040</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="cvv">
                <div className="cvvText">
                    cvv
                </div>
                <input type="text" className="cvvInput" maxLength="3" name="cvv"/>
            </div>
            <div className="cardName">
                <div className="nameText">
                    Nombre en la Tarjeta(máximo 30 caracteres) 
                </div>
                <input type="text" className="nameInput" maxLength="30" name="cardName"/>
            </div>
                        
            
        </div>
    )
}

export default payment
