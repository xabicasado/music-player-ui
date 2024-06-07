import SongList from './components/song-list/song-list'
import MusicBar from './components/music-bar/music-bar'

import { MusicPlayerProvider } from './contexts/music-player.context'

import songsMock from './mocks/songs.mock'

function App() {
  return (
    <MusicPlayerProvider songs={songsMock}>
      <main className="flex text-center place-items-center m-0 min-h-screen text-white">
        <section className="p-8 mx-auto my-0 rounded-md min-w-[500px] min-h-[400px] bg-primary-dark">
          <h1 className="text-5xl py-2">Music Player UI</h1>
          <SongList />
          <MusicBar />
        </section>
      </main>
    </MusicPlayerProvider>
  )
}

export default App
