import ClassBasedComponent from "./Components/ClassBasedComponent"
// import FunctionalComponent from "./Components/FunctionalComponent"

import Cards from "./Components/02-List-Practice/Cards"
import ChelsPlayers from "./Components/02-List-Practice/ChelsPlayers"
import ProductList from "./Components/02-Nested-Components/ProductList"
const chelseaPlayersList = ['Cole Palmer' , 'Enzo Fernandez' , 'Reece James']


const App = () => {

  return (
      <div className="mb-[1000px] text-2xl font-bold flex flex-col gap-4 bg-amber-100 w-full justify-center items-center text-center">
          
          {/* <FunctionalComponent /> */}

          <ProductList name='Rushikesh' city='Virar' listofChelseaPlayers={chelseaPlayersList} />

          <ChelsPlayers />
          <Cards />

          <ClassBasedComponent/>
      </div>
      
  )
}

export default App