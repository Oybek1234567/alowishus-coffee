import Best from "./section/best"
import Customers from "./section/customers"
import Explore from "./section/explore"
import Instant from "./section/instant"
import Orders from "./section/order"

const Main = () => {
  return (
    <main className="main">
      <Explore />
      <Orders />
      <Best />
      <Instant />
      <Customers />
    </main>
  )
}

export default Main
