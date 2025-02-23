import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    //input: 'http://localhost:3333/docs/json',
    input: 'https://nlw-connect-server.onrender.com/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      //baseUrl: 'http://localhost:3333',
      baseUrl: 'nlw-connect-server.onrender.com',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
