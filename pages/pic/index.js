import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageList from './components/ImageList'
import SearchBar from './components/SearchBar'

const App = () => {
  const [images, setImages] = useState([])
  const [joke, setJoke] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const apiKey = process.env.NEXT_PUBLIC_PIXABAY_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!searchTerm) return

        const imageResponse = await axios.get('https://pixabay.com/api/', {
          params: {
            key: apiKey,
            q: searchTerm
          }
        })

        if (imageResponse.data.total === 0) {
          window.alert('画像が見つかりませんでした。')
          return
        }

        setImages(imageResponse.data.hits)

        const relatedJokeResponse = await axios.get(
          'https://official-joke-api.appspot.com/jokes/programming/random'
        )
        setJoke(relatedJokeResponse.data[0])
      } catch (error) {
        console.error('処理中にエラーが発生しました:', error)
        window.alert('処理中にエラーが発生しました。')
      }
    }

    fetchData()
  }, [searchTerm, apiKey])

  const handleSearchSubmit = term => {
    setSearchTerm(term)
  }

  return (
    <div className='ui container'>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageList images={images} maxImages={1} />
      {joke.setup && (
        <div className='joke'>
          <p>
            <h1>Setup:</h1> <h2>{joke.setup}</h2>
          </p>
          <p>
            <h1>Punchline:</h1> <h2>{joke.punchline}</h2>
          </p>
        </div>
      )}
    </div>
  )
}

export default App
