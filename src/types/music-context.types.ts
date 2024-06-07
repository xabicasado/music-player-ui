import type SongType from './song.types'

type RepeatModeType = 'no-repeat' | 'repeat' | 'repeat-all'

type MusicPlayerContextType = {
  songs: SongType[]
  currentSong: SongType | null
  repeatMode: RepeatModeType
  isPlaying: boolean
  isRandom: boolean
  nextSong: () => void
  previousSong: () => void
  changeCurrentSong: (song: SongType) => void
  togglePlaying: () => void
  toggleRandom: () => void
  changeRepeatMode: () => void
}

export { type MusicPlayerContextType, type RepeatModeType }
