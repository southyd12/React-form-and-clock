import React, {useContext} from 'react'
import { CarsContext } from './contexts/cars.context'

function AddCar() {
  const {fetchCars} = useContext(CarsContext);

  // const newCar = {
  //   name: 'Bugatti',
  //   bhp: 666,
  // }

  return (
    <button onClick={() => fetchCars()}>Load Cars</button>
  )
}

export default AddCar