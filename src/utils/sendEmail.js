import Axios from 'axios'

export function sendEmail(data) {
  const apiEndpoint =
    'https://tiagomiguelagostinho.outsystemscloud.com/Emailchecking_API'

  const axios = Axios.create({
    baseURL: apiEndpoint,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'x-token': process.env.NEXT_PUBLIC_EMAIL_TOKEN,
    },
  })

  const response = axios.post(
    '/rest/SendEmail/SendContactEmail',
    JSON.stringify(data)
  )
  return response
}
