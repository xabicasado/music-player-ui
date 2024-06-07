import { createContext, useState, useContext } from 'react'
import type SongType from '../types/song.types'
import {
  type MusicPlayerContextType,
  type RepeatModeType,
} from '../types/music-context.types'

const repeatModes: RepeatModeType[] = ['no-repeat', 'repeat', 'repeat-all']

const MusicPlayerContext = createContext<MusicPlayerContextType>({
  songs: [],
  currentSong: null,
  isPlaying: false,
  isRandom: false,
  repeatMode: repeatModes[0],
  togglePlaying: () => {},
  nextSong: () => {},
  previousSong: () => {},
  changeCurrentSong: () => {},
  toggleRandom: () => {},
  changeRepeatMode: () => {},
})

type MusicPlayerProviderPropsType = {
  children: React.ReactNode
  songs: SongType[]
}

const MusicPlayerProvider = (props: MusicPlayerProviderPropsType) => {
  const { songs, children } = props

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<SongType | null>(null)
  const [repeatMode, setRepeatMode] = useState<RepeatModeType>(repeatModes[0])
  const [isRandom, setIsRandom] = useState<boolean>(false)

  const togglePlaying = () => {
    if (currentSong === null) setCurrentSong(songs[0])

    setIsPlaying(!isPlaying)
  }

  const changeCurrentSong = (song: SongType) => {
    setCurrentSong(song)
  }

  const toggleRandom = () => {
    setIsRandom((current) => {
      // No "special" repeat modes when random mode is active
      if (!current) setRepeatMode(repeatModes[0])

      return !current
    })
  }

  const changeRepeatMode = () => {
    if (isRandom) return

    const currentRepeatModeIndex = repeatModes.indexOf(repeatMode)
    const nextRepeatModeIndex =
      (currentRepeatModeIndex + 1) % repeatModes.length

    setRepeatMode(repeatModes[nextRepeatModeIndex])
  }

  const getsRandomSong = () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong?.id ?? -1
    )

    // Don't repeat a song if there's more than one song on the playlist
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * songs.length)
    } while (songs.length > 1 && randomIndex === currentSongIndex)

    return songs[randomIndex]
  }

  const previousSong = () => {
    setCurrentSong((current) => {
      const currentSongIndex = songs.findIndex(
        (song) => song.id === current?.id ?? -1
      )

      if (isRandom) return getsRandomSong()

      if (repeatMode === repeatModes[1]) return songs[currentSongIndex]

      const previousSongIndex =
        currentSongIndex - 1 >= 0
          ? currentSongIndex - 1
          : repeatMode === repeatModes[2]
            ? songs.length - 1
            : currentSongIndex

      return songs[previousSongIndex]
    })

    if (!isPlaying) togglePlaying()
  }

  const nextSong = () => {
    setCurrentSong((current) => {
      const currentSongIndex = songs.findIndex(
        (song) => song.id === current?.id ?? -1
      )

      if (isRandom) return getsRandomSong()

      if (repeatMode === repeatModes[1]) return songs[currentSongIndex]

      const nextSongIndex =
        currentSongIndex + 1 < songs.length
          ? currentSongIndex + 1
          : repeatMode === repeatModes[2]
            ? 0
            : currentSongIndex

      return songs[nextSongIndex]
    })

    if (!isPlaying) togglePlaying()
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        songs,
        currentSong,
        isPlaying,
        isRandom,
        toggleRandom,
        repeatMode,
        togglePlaying,
        previousSong,
        nextSong,
        changeCurrentSong,
        changeRepeatMode,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}

const useMusicPlayerContext = () => useContext(MusicPlayerContext)

export { MusicPlayerProvider, useMusicPlayerContext }
