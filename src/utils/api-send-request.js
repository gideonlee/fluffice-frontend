import {client} from 'utils/api-client'

async function requestCatering({form, captchaToken}) {
  return client('request/catering', {
    data: form, 
    captchaToken: captchaToken
  })
}

async function requestFundraising({form, captchaToken}) {
  return client('request/fundraising', {
    data: form, 
    captchaToken: captchaToken
  })
}

export {requestCatering, requestFundraising}