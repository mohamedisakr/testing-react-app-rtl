import { Container } from 'react-bootstrap'
import './App.css'
import { OrderDetailsProvider } from './contexts/OrderDetails'
import OrderEntry from './entry/OrderEntry'
// import ScoopOptions from './entry/ScoopOptions'
// import SummaryForm from './pages/summary/SummaryForm'

const App = () => {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  )
}

export default App
