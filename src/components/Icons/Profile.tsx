import { SVGProps } from 'react'

type Props = {
  color?: 'black' | 'white'
} & SVGProps<SVGSVGElement>

export default function ProfileIcon({ color = 'black', ...props }: Props) {
  const colorValue = {
    black: 'var(--black)',
    white: 'var(--white)',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={colorValue[color]}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 1.514c-6.075 0-11 4.925-11 11s4.925 11 11 11a10.978 10.978 0 0 0 8.524-4.046A10.955 10.955 0 0 0 23 12.514c0-6.075-4.925-11-11-11Zm7.59 15.84a9 9 0 1 0-15.178 0 9.243 9.243 0 0 1 1.165-.785c1.39-.794 3.492-1.555 6.424-1.555 2.931 0 5.034.76 6.423 1.555.472.27.858.541 1.165.785ZM5.667 18.91A8.971 8.971 0 0 0 12 21.514c2.47 0 4.706-.994 6.332-2.604a7.263 7.263 0 0 0-.9-.605c-1.101-.629-2.863-1.291-5.431-1.291-2.569 0-4.33.662-5.431 1.291-.372.212-.67.422-.902.605Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8.002 9.514a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
