import React from 'react'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = (props) => {
  return (
    <div>

      <Divisao num1={3} num2={2}/>
      <Multiplicacao num1={3} num2={2}/>
      <Adicao num1={3} num2={2}/>
      <Subtracao num1={3} num2={2}/>

      <PrecisoEstudar nome_tecnologia={'React com JavaScript'}/>
      
    </div>
  )
}

export default App