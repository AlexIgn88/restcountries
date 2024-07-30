import { FC } from "react";
import { CountryCardProps } from '../types';

const CountryCard: FC<CountryCardProps> = ({ country, setCountry, countryDetail }) => {

    const currenciesObject = country?.currencies || {};
    let currenciesName = currenciesObject[Object.keys(currenciesObject)[0]]?.name;
    let currenciesSymbol = currenciesObject[Object.keys(currenciesObject)[0]]?.symbol;

    const languagesObject = country?.languages || {};
    let languages = Object.values(languagesObject).join(', ');

    return (
        <section
            className={countryDetail ? 'country-detail' : 'country'}
            onClick={() => countryDetail ? null : setCountry(country)}
        >
            {countryDetail && (
                <button
                    className="close-button"
                    onClick={() => setCountry(null)}
                >
                    Close
                </button>
            )}
            <h2>{country?.name?.common}</h2>
            <img
                className="country__flag"
                src={country?.flags?.svg || country?.flags?.png}
            ></img>
            <h4>capital: {country?.capital}</h4>
            {countryDetail && (
                <>
                    <div>continents: {country?.continents}</div>
                    <div>region: {country?.region}</div>
                    <div>population: {country?.population}</div>
                    <div>currencies: {currenciesName}, {currenciesSymbol}</div>
                    <div>languages: {languages}</div>
                    <div>
                        <a href={country?.maps?.googleMaps}>
                            Google Maps
                        </a>
                    </div>
                </>
            )}
        </section>
    )
}

export default CountryCard;