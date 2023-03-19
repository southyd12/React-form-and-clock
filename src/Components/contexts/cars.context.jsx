import { createContext, useState, useCallback } from "react";

const API_ENDPOINT = 'https://carsapp2050.fly.dev/api/v1/cars'

export const CarsContext = createContext({
  cars: [],
})

export const CarsProvider = ({children}) => {
  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchCars = useCallback(async () => {
    if (loading || loaded || error) return;
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINT);
      if(!response.ok) throw response;
      const data = await response.json();
      setCars(data);
    } catch (err) {
      setError({
        message: err.message || err.statusText
      })
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  }, []);

  const addCar = useCallback((car) => {
    setCars([...cars, car]);
  }, [setCars, cars])

  return (
    <CarsContext.Provider value={{
      cars,
      addCar,
      loaded,
      loading,
      error,
      fetchCars,
    }}>
      {children}
    </CarsContext.Provider>
  );
}