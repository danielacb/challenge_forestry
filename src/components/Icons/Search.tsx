import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function SearchIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill={colorValue[color]}
      stroke={colorValue[color]}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.293 16.807a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1 11.086a9.571 9.571 0 1 1 16.348 6.759l-.708-.707.708.707A9.571 9.571 0 0 1 1 11.086Zm9.571-7.572a7.571 7.571 0 1 0 5.361 12.918 7.571 7.571 0 0 0-5.361-12.918Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
