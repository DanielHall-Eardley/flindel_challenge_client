import React, {useState} from 'react';
import styles from './ReturnForm.module.css';

const ReturnForm = ({setRefund, setReturnableProducts, setNotification}) => {
  const [id, setIdInput] = useState('')

  /*Make an api request to check
  which products of a transaction can be returned and
  what the total refund will be*/
  const checkProductReturn = async event => {
    event.preventDefault()

    //Clear any data displayed from previous request
    setNotification(null)
    setReturnableProducts([])
    setRefund(0)

    const headers = {
      'Content-Type': 'application/json'
    }
    
    const body = JSON.stringify({id})
    
    const res = await fetch('http://localhost:5000/api/transaction/return', {
      headers,
      body,
      method: 'POST'
    })

    const response = await res.json()

    //Check for error and update state accordingly 
    if (response.error) {
      setNotification(response.error)
    } else {
      setRefund(response.refund)
      setReturnableProducts(response.products)
    }
  }

  return (
    <form onSubmit={checkProductReturn} className={styles.form}>
      <input 
        type="text" 
        aria-label="transaction id" 
        placeholder="Enter transaction id"
        value={id}
        onChange={event => setIdInput(event.target.value)}/>
      <button>Submit</button>
    </form>
  )
}

export default ReturnForm