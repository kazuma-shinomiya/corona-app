export type CountryDataType = {
  date: string
  newConfirmed: number
  totalConfirmed: number
  newRecovered: number
  totalRecovered: number
}

interface SingleCountriesDataType {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
}

export interface AllCountriesDataType extends Array<SingleCountriesDataType> {}

export type TopPageType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: CountryDataType,
  loading: boolean,
}

export type SelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>,
}

export type ResultsType = {
  countryData: CountryDataType,
  loading: boolean,
}

export interface WorldPageType {
  allCountriesData:  Array<SingleCountriesDataType>,
  loading: boolean,
}

export interface CardType {
  allCountriesData:  Array<SingleCountriesDataType>,
  loading: boolean,
}