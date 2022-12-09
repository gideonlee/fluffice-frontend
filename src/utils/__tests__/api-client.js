import {setupServer} from 'msw/node'
import {rest} from 'msw'
import {client} from '../api-client'
const server = setupServer()

// Establish API mocking before all tests.
beforeAll(() => server.listen())

const apiURL = process.env.REACT_APP_API_URL

test('When data is provided in client, it defaults to post', async () => {
  const endpoint = 'request/catering'
  const data = {firstName: 'Giannis', lastName: 'Antetokounmpo'}
 
  // Define only one post request
  server.use(
    rest.post(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      let responseData = req.body
      return res(ctx.json({success: true, data: responseData}))
    })
  )

  // Attempt a client call, which should default to post
  const result = await client(endpoint, {data: data})

  expect(result).toEqual({success: true, data: data})
})

test('Rejects the promise', async () => {
  const testError = {message: 'Error rejection.'}
  const endpoint = 'error-endpoint'

  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.status(400), ctx.json(testError))
    })
  )

  const error = await client(endpoint).catch(e => e)

  expect(error).toEqual(testError)
})

test('allow for config overrides', async () => {
  const endpoint = 'override-endpoint'
  const mockResult = {success: true, message: 'Overrides'}
  let request

  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      request = req
      return res(ctx.json(mockResult))
    })
  )

  const result = await client(endpoint, {
    mode: 'cors', headers: {'Content-Type': 'fake-type'}
  })

  expect(result).toEqual(mockResult)
  expect(request.mode).toEqual('cors')
  expect(request.headers.get('Content-Type')).toEqual('fake-type')
})