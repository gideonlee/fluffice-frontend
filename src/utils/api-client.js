const apiURL = process.env.REACT_APP_API_URL

async function client(
  endpoint,
  {data, token, captchaToken, headers: customHeaders, ...customConfig} = {},
  ) {
    if (captchaToken) {
      data.captchaToken = captchaToken
    }
    const config = {
      method: data ? 'POST' : 'GET',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': data ? 'application/json' : undefined,
        ...customHeaders,
      },
      ...customConfig,
    }
       
  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
