import { SVGProps, useState } from 'react'

type Props = {
  size?: '48' | '40' | '36' | '24'
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function ArrowIcon({
  size = '24',
  color = 'black',
  ...props
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={isHovered ? colorValue[color] : 'transparent'}
      stroke={colorValue[color]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <path strokeWidth={1.7} d="M.996 11.552h12.146" />
      <path
        style={{ opacity: isHovered ? 1 : 0, transition: `0.4s` }}
        strokeWidth={1.7}
        d="m21.424 13.108-6.192 4.112c-1.096.728-2.562-.058-2.562-1.375V7.623c0-1.317 1.466-2.103 2.562-1.375l6.192 4.111a1.65 1.65 0 0 1 0 2.75Z"
      />
      <path
        strokeWidth={1.7}
        d="m21.424 13.108-6.192 4.112c-1.096.728-2.562-.058-2.562-1.375V7.623c0-1.317 1.466-2.103 2.562-1.375l6.192 4.111a1.65 1.65 0 0 1 0 2.75Z"
      />
    </svg>
  )
}
