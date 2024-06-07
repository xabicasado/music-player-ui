import {
  PlayIcon,
  PauseIcon,
  NextIcon,
  PreviousIcon,
  RandomIcon,
  RepeatIcon,
} from './icons'

type IconType = 'play' | 'pause' | 'next' | 'previous' | 'random' | 'repeat'

type IconProps = {
  type: IconType
  primary?: boolean
  active?: boolean
}

type IconMap = {
  [key in IconType]: React.FC<{ colorStyle: string }>
}

export function Icon(props: IconProps) {
  const { primary = false, active = false, type } = props

  const icons: IconMap = {
    play: PlayIcon,
    pause: PauseIcon,
    next: NextIcon,
    previous: PreviousIcon,
    random: RandomIcon,
    repeat: RepeatIcon,
  }

  const IconComponent = icons[type]

  if (IconComponent === null) return null

  const colorStyle = primary
    ? 'fill-primary-dark'
    : active
      ? 'fill-secondary'
      : 'fill-primary-light hover:fill-white'

  return <IconComponent colorStyle={colorStyle} />
}
