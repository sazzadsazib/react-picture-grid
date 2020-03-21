import * as React from 'react'

interface Props {}

const Button: React.FunctionComponent<Props> = () => (
  <button data-testid="button" className='test'>hello</button>
)

export default Button;
