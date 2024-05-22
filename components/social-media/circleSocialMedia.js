import Link from 'next/link'
import * as RIcons from 'react-icons/ri'

const CircleSocialMedia = (props) => {
  const { name, destination, className, color, size } = props
  const Component = RIcons[name]
  return (
    <>
      {destination ? (
        <Link href={destination} className={className}>
          <Component size={size} color={color} />
        </Link>
      ) : (
        <Component className={className} size={size} color={color} />
      )}
    </>
  )
}
export default CircleSocialMedia
