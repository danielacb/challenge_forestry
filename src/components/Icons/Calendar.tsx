import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function CalendarIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      stroke={colorValue[color]}
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M14.158 3.105V1m0 2.105v2.106m0-2.106H9.42M1.526 9.421v9.474c0 1.163.943 2.105 2.106 2.105h14.737a2.105 2.105 0 0 0 2.105-2.105V9.42H1.526ZM1.526 9.42V5.208c0-1.163.943-2.105 2.106-2.105h2.105M5.737 1v4.21M20.473 9.42V5.208a2.105 2.105 0 0 0-2.105-2.105h-.526" />
      </g>
    </svg>
  )
}
