import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function FacebookIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none"
      stroke={colorValue[color]}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 6.883v8.89a5.556 5.556 0 0 1-5.556 5.555H6.556A5.556 5.556 0 0 1 1 15.772V6.883a5.556 5.556 0 0 1 5.556-5.555h8.888A5.556 5.556 0 0 1 21 6.883Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.89 21.327v-10c0-2.43.555-4.445 4.444-4.445M7.666 12.437h6.667"
      />
    </svg>
  )
}
