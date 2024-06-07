/* eslint-disable multiline-ternary */

import './music-bar.css'
import { Icon } from '../icon'
import { useMusicPlayerContext } from '../../contexts/music-player.context'

function MusicBar() {
  const {
    currentSong,
    isPlaying,
    isRandom,
    repeatMode,
    togglePlaying,
    previousSong,
    nextSong,
    changeRepeatMode,
    toggleRandom,
  } = useMusicPlayerContext()

  return (
    <section className="my-2 px-6 py-2 border border-primary rounded-sm min-h-32">
      <h3>
        {currentSong != null ? currentSong?.title : 'Currently playing...'}
      </h3>
      <p className="text-primary-light min-h-6">
        {currentSong != null ? currentSong?.author : ''}
      </p>

      <button className="btn" aria-label="random" onClick={toggleRandom}>
        <Icon type="random" active={isRandom} />
      </button>
      <button className="btn" aria-label="previous" onClick={previousSong}>
        <Icon type="previous" />
      </button>
      <button
        className="btn btn-primary"
        aria-label={!isPlaying ? 'play' : 'pause'}
        onClick={togglePlaying}
      >
        {!isPlaying ? (
          <Icon type="play" primary />
        ) : (
          <Icon type="pause" primary />
        )}
      </button>
      <button className="btn" aria-label="next" onClick={nextSong}>
        <Icon type="next" />
      </button>
      <button className="btn" aria-label="repeat" onClick={changeRepeatMode}>
        <Icon type="repeat" active={repeatMode !== 'no-repeat'} />
      </button>
    </section>
  )
}

export default MusicBar
