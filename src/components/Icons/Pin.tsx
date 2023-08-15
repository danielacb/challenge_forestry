import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function PinIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={colorValue[color]}
      {...props}
    >
      <path
        strokeWidth={2}
        d="M19.852 9.852C19.852 14.19 12 21.631 12 21.631S4.147 14.189 4.147 9.852a7.852 7.852 0 1 1 15.705 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10.834a.982.982 0 1 0 0-1.963.982.982 0 0 0 0 1.963Z"
      />
    </svg>
  )
}
