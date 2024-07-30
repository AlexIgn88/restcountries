export interface CountryState {
    countries: Country[];
    isLoading: boolean;
    error: string;
}

export interface Country {
    flags: CountryFlagsType;
    name: CountryNameType;
    capital: Array<string>;
    [key: string]: any;
}

interface CountryFlagsType {
    png: string;
    svg: string;
    alt: string;
}

interface CountryNameType {
    common: string;
    official: string;
    nativeName: CountryNativeNameType;
}

interface CountryNativeNameType {
    [key: string]: {
        official: string;
        common: string;
    };
}

export interface CountryCardProps {
    country: Country;
    setCountry: any;
    countryDetail: boolean;
}