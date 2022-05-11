import './App.css'
import Dashboard from './pages/Dashboard'
import Supplier from './pages/Supplier'
import Distributors from './pages/Distributors'
import Diocese from './pages/Diocese'
import { Routes, Route } from 'react-router-dom'
import LayoutNav from './components/LayoutNav'
import Product from './pages/Product'
// import Customers2 from './pages/Customers2'
import Customer3 from './pages/Customer3'
import DistributorInvoiceMaster from './pages/DistributorInvoiceMaster'
import VatMaster from './pages/VatMaster'
import DistributorsPaymentMaster from './pages/DistributorsPaymentMaster'
import DistributorsPaymentAllocation from './pages/DistributorsPaymentAllocation'
import DistributorsInvoiceTxn from './pages/DistributorsInvoiceTxn'
// import Customersnew from './pages/Customers/Customersnew'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutNav />}>
          <Route index element={<Dashboard />} />
          <Route path='/distributors' element={<Distributors />} />
          <Route path='/customers' element={<Customer3 />} />
          <Route path='/diocese' element={<Diocese />} />
          <Route path='/suppliers' element={<Supplier />} />
          <Route path='/products' element={<Product />} />
          <Route path='/distributorsinvoicemaster' element={<DistributorInvoiceMaster />} />
          <Route path='/distributorsinvoicetxn' element={<DistributorsInvoiceTxn />} />
          <Route path='/distributorspaymentallocation' element={<DistributorsPaymentAllocation />} />
          <Route path='/distributorspaymentmaster' element={<DistributorsPaymentMaster />} />
          <Route path='/vatmaster' element={<VatMaster />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
