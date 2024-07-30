import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks/redux';
import { useAppSelector } from './hooks/redux';
import { fetchCountries } from './store/reducers/ActionCreators';
import CountryCard from '../src/components/CountryCard';


const App = () => {
  const dispatch = useAppDispatch();
  const { countries, isLoading, error } = useAppSelector(state => state.countryReducer);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    dispatch(fetchCountries())
  }, []);

  return (
    <main
      className="countries"
    >
      <h1>REST COUNTRIES</h1>
      {country && (
        <div
          className='country-wrapper'
        >
          <CountryCard
            country={country}
            setCountry={setCountry}
            countryDetail={true}
          />
        </div>)}
      {!country && <div className='countries__div'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {countries && countries.map((country) => (
          <CountryCard
            key={country?.name?.common}
            country={country}
            setCountry={setCountry}
            countryDetail={false}
          />
        ))}
      </div>}
    </main>
  );
}

export default App;
