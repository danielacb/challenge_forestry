import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function AlarmIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      stroke={colorValue[color]}
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M14.999 12h-5V7M3.001 2.5l2-1.5M17 2.5 15 1" />
        <path d="M10 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      </g>
    </svg>
  )
}
