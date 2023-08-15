import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function YoutubeIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      viewBox="0 0 24 25"
      stroke={colorValue[color]}
      fill="none"
      {...props}
    >
      <g strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.001 12.33-3.5 2v-4l3.5 2Z"
        />
        <path d="M2 13.036V11.62c0-2.896 0-4.343.905-5.275.906-.931 2.332-.972 5.183-1.052 1.35-.039 2.73-.066 3.912-.066 1.181 0 2.561.027 3.912.066 2.851.08 4.277.12 5.182 1.052.906.932.906 2.38.906 5.274v1.416c0 2.895 0 4.343-.905 5.274-.906.931-2.331.972-5.183 1.053-1.35.038-2.73.065-3.912.065-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.379 2 15.93 2 13.036Z" />
      </g>
    </svg>
  )
}
