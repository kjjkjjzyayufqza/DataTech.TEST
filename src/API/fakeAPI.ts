import axios, { AxiosResponse } from 'axios'
import { UserResponse, getUserListFilter } from '../Model'

const fakeAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 20000
})

export function getUserList (
  args?: getUserListFilter
): Promise<AxiosResponse<UserResponse[]>> {
  return fakeAPI.get('https://jsonplaceholder.typicode.com/users', {
    params: args
  })
}

export function getUserById (
  id: string
): Promise<AxiosResponse<UserResponse>> {
  return fakeAPI.get('https://jsonplaceholder.typicode.com/users/' + id)
}
