import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()

  let errorMessage: string = ''
  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText
  } else {
    errorMessage = 'Unknown error'
  }
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}
