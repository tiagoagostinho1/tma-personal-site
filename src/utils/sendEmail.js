import Axios from 'axios'

export function sendEmail(data) {
  const apiEndpoint =
    'https://tiagomiguelagostinho.outsystemscloud.com/Emailchecking_API'

  const axios = Axios.create({
    baseURL: apiEndpoint,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'x-token': '1dc355b9-582f-4b9e-8146-5b47067c3fda',
    },
  })

  const response = axios.post(
    '/rest/SendEmail/SendContactEmail',
    JSON.stringify(data)
  )
  console.log(response)
  return response
  /*
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
      'x-token': '1dc355b9-582f-4b9e-8146-5b47067c3fda',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.error(err)
    })
      */
}
