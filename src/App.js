import React, {useState} from 'react';

import ReturnForm from './components/ReturnForm'
import ProductList from './components/ProductList'
import Refund from './components/Refund'
import Notification from './components/Notification'
import Title from './components/Title'

function App() {
  const [productList, setReturnableProducts] = useState([])
  const [refund, setRefund] = useState(0)
  const [notification, setNotification] = useState(null)

  return (
    <main className="App">
      <Title/>
      <ReturnForm 
        setReturnableProducts={setReturnableProducts}
        setRefund={setRefund}
        setNotification={setNotification}/>
      <Notification notification={notification}/>
      <ProductList productList={productList}/>
      <Refund refund={refund}/>
    </main>
  );
}

export default App;
