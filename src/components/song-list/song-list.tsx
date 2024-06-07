import type SongType from '../../types/song.types'
import { useMusicPlayerContext } from '../../contexts/music-player.context'

function SongList() {
  const { songs, isPlaying, togglePlaying, currentSong, changeCurrentSong } =
    useMusicPlayerContext()

  const handleClick = (song: SongType) => {
    if (!isPlaying) togglePlaying()

    changeCurrentSong(song)
  }

  return (
    <section className="my-2 border border-primary rounded-sm px-6 py-2 text-start">
      <ul className="list-none">
        {songs?.map((song, index) => (
          <li
            key={index}
            className={
              song === currentSong
                ? 'cursor-pointer font-semibold text-secondary'
                : 'cursor-pointer text-primary-light'
            }
            onClick={() => {
              handleClick(song)
            }}
          >
            {song.title} - {song.author}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SongList
