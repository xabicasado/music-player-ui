import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

import songsMock from '../mocks/songs.mock'

describe('<App />', () => {
  it('should render the music player with a songs list', () => {
    render(<App />)

    const musicPlayerTitle = screen.getByText('Music Player UI')
    expect(musicPlayerTitle).toBeInTheDocument()

    const songListItems = screen.queryAllByRole('listitem')
    expect(songListItems.length).toBe(songsMock.length)
  })

  it('should toggle play/pause when play button is clicked', async () => {
    render(<App />)

    const playPauseButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playPauseButton)
    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument()

    await userEvent.click(playPauseButton)
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument()
  })

  it('should change current song and show it on UI when a song is clicked', async () => {
    render(<App />)

    const currentSongTitle = screen.getByText('Currently playing...')
    expect(currentSongTitle).toBeInTheDocument()

    const currentSongItem = screen.getByText(
      /21st century schizoid man - King Crimson/i
    )
    expect(currentSongItem).toHaveStyle({
      color: 'rgb(179 179 179 / var(--tw-text-opacity))',
    })

    const playButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playButton)

    const newSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(newSongTitle).toEqual(songsMock[0].title)

    expect(currentSongItem).toHaveStyle({
      color: 'rgb(29 185 84 / var(--tw-text-opacity))',
    })
  })

  it('should remain in the same song when previous button is clicked on the first song', async () => {
    render(<App />)

    const playButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playButton)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent

    const previousButton = screen.getByRole('button', { name: /previous/i })
    await userEvent.click(previousButton)

    const newSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(newSongTitle).toEqual(currentSongTitle)
  })

  it('should change to previous song when previous button is clicked on the first song if repeat-all mode is selected', async () => {
    render(<App />)

    const playButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playButton)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent

    const repeatButton = screen.getByRole('button', { name: /repeat/i })
    await userEvent.click(repeatButton)
    await userEvent.click(repeatButton)

    const previousButton = screen.getByRole('button', { name: /previous/i })
    await userEvent.click(previousButton)

    const newSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(newSongTitle).not.toEqual(currentSongTitle)
  })

  it('should change to next song when next button is clicked', async () => {
    render(<App />)

    const playButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playButton)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent

    const nextButton = screen.getByRole('button', { name: /next/i })
    await userEvent.click(nextButton)

    const newSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(newSongTitle).not.toEqual(currentSongTitle)
  })

  it('should remain in the same song when next button is clicked on the last song', async () => {
    render(<App />)

    const lastSongItem = screen.getByText(
      /Dancing with the Moonlit knight - Genesis/i
    )
    await userEvent.click(lastSongItem)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent
    expect(currentSongTitle).toEqual(songsMock[songsMock.length - 1].title)

    const nextButton = screen.getByRole('button', { name: /next/i })
    await userEvent.click(nextButton)

    const newSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(newSongTitle).toEqual(currentSongTitle)
  })

  it('should change to next song when next button is clicked on the last song if repeat-all mode is selected', async () => {
    render(<App />)

    const lastSongItem = screen.getByText(
      /Dancing with the Moonlit knight - Genesis/i
    )
    await userEvent.click(lastSongItem)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent
    expect(currentSongTitle).toEqual(songsMock[songsMock.length - 1].title)

    const repeatButton = screen.getByRole('button', { name: /repeat/i })
    await userEvent.click(repeatButton)
    await userEvent.click(repeatButton)

    const nextButton = screen.getByRole('button', { name: /next/i })
    await userEvent.click(nextButton)

    const newSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(newSongTitle).not.toEqual(currentSongTitle)
  })

  it('should remain in the same song when previous or next buttons are clicked if repeat mode is selected', async () => {
    render(<App />)

    const playButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playButton)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent

    const repeatButton = screen.getByRole('button', { name: /repeat/i })
    await userEvent.click(repeatButton)

    const previousButton = screen.getByRole('button', { name: /previous/i })
    await userEvent.click(previousButton)

    const previousSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent
    expect(previousSongTitle).toEqual(currentSongTitle)

    const nextButton = screen.getByRole('button', { name: /next/i })
    await userEvent.click(nextButton)

    const nextSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(nextSongTitle).toEqual(currentSongTitle)
  })

  it('should change to a different random song when next button is clicked if random mode is selected', async () => {
    render(<App />)

    const playButton = screen.getByRole('button', { name: /play/i })
    await userEvent.click(playButton)

    const currentSongTitle = screen.getByRole('heading', {
      level: 3,
    }).textContent

    const randomButton = screen.getByRole('button', { name: /random/i })
    await userEvent.click(randomButton)

    const nextButton = screen.getByRole('button', { name: /next/i })
    await userEvent.click(nextButton)

    const nextSongTitle = screen.getByRole('heading', { level: 3 }).textContent
    expect(nextSongTitle).not.toEqual(currentSongTitle)
  })
})
