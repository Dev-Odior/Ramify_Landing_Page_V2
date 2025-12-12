import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const addToSheet = async (props: any): Promise<any> => {
  const backendUrl = 'https://ramify-backend.onrender.com/v1/landing-page/waitlist'
  const formData = new FormData()

  // Manually append key-value pairs to formData
  Object.entries(props).forEach(([key, value]) => {
    formData.append(key, `${value}`)
  })

  const phone = formData.get('phone')
  const email = formData.get('email')

  const res = await axios.post<any>(backendUrl, {
    phone,
    email,
  })

  return res.data.data
}

export const useAddToSheet = () => {
  return useMutation({
    mutationFn: addToSheet,
  })
}
