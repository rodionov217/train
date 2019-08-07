import React from 'react'
import { withRouter } from 'react-router-dom'

export const ApiContext = React.createContext();

export class ApiService {
  fetchData = async (urlEntity, options = {method: 'GET'}) => {
    const res = await fetch(`https://netology-trainbooking.herokuapp.com${urlEntity}`, options);
    if (!res.ok) {
      throw new Error(`Could not fetch ${urlEntity}, status - ${res.status}`)
    } 
    return await res.json()
  }
  getCities = async (query) => {
    return await this.fetchData(`/routes/cities?name=${query}`)
  }
  getRoutes = async (params) => {
    console.log(params);
    return await this.fetchData(`/routes?from_city_id=${params.from.id}&to_city_id=${params.to.id}&date_depart=${params.date}${params.dateBack ? "&date_end=" + params.dateBack : ""}`)
  }
  getSeats = async (id) => {
    return await this.fetchData(`/routes/${id}/seats`)
  }
}
