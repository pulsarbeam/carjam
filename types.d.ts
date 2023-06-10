import { MouseEventHandler } from 'react'

export interface ButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}

export interface SearchManuProps {
  manu: string
  setManu: (manu: string) => void
  
}
