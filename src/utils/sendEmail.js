export function sendEmail(data) {
  console.log(data)

  const apiEndpoint =
    'https://tiagomiguelagostinho.outsystemscloud.com/Emailchecking_API/rest/SendEmail/SendContactEmail'

  fetch(process.env.EMAIL_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8',
      'x-token': process.env.EMAIL_TOKEN,
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
}
