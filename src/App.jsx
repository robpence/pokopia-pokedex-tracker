import { useState, useEffect } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import pokemonData from './data/PokemonData.json'

// localStorage key constant
const STORAGE_KEY = 'pokopia-collected'

// Helper functions for localStorage operations
const saveCollectedToStorage = (collectedSet) => {
  try {
    const dataToSave = [...collectedSet]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
    return true
  } catch (error) {
    console.error('Error saving collected Pokemon to localStorage:', error)
    return false
  }
}

const loadCollectedFromStorage = () => {
  // console.log("Trying to load from localStorage with key:", STORAGE_KEY);
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    // console.log(saved);
    if (saved) {
      const parsedData = JSON.parse(saved)
      // Validate that the data is an array of numbers
      if (Array.isArray(parsedData) && parsedData.every(id => typeof id === 'number')) {
        return new Set(parsedData)
      } else {
        console.warn('Invalid data in localStorage, starting fresh')
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  } catch (error) {
    console.error('Error loading collected Pokemon from localStorage:', error)
    localStorage.removeItem(STORAGE_KEY)
  }
  return new Set()
}

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [collectedPokemon, setCollectedPokemon] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  // Load Pokemon data from JSON file
  useEffect(() => {
    setPokemonList(pokemonData)
  }, [])

  // Load collected Pokemon from localStorage on app start
  useEffect(() => {
    const loadedCollection = loadCollectedFromStorage()
    //console.log(loadedCollection);
    setCollectedPokemon(loadedCollection)
    // console.log("collectedPokemon after set: ", collectedPokemon);
  }, [])

  // Save collected Pokemon to localStorage whenever it changes
  useEffect(() => {
    // console.log("Use effect triggered with collectedPokemon: ", collectedPokemon);
    if (collectedPokemon.size > 0 || localStorage.getItem(STORAGE_KEY)) {
      saveCollectedToStorage(collectedPokemon)
    }
    // console.log("Updating collected pokemon: ", collectedPokemon);
  }, [collectedPokemon])

  const toggleCollected = (pokemonId) => {
    const newCollected = new Set(collectedPokemon)
    if (newCollected.has(pokemonId)) {
      newCollected.delete(pokemonId)
    } else {
      newCollected.add(pokemonId)
    }
    setCollectedPokemon(newCollected)
  }

  // Additional utility functions for collection management
  // const clearAllCollected = () => {
  //   setCollectedPokemon(new Set())
  //   localStorage.removeItem(STORAGE_KEY)
  // }

  // const exportCollection = () => {
  //   const data = {
  //     timestamp: new Date().toISOString(),
  //     collected: [...collectedPokemon],
  //     total: pokemonList.length
  //   }
  //   const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  //   const url = URL.createObjectURL(blob)
  //   const a = document.createElement('a')
  //   a.href = url
  //   a.download = `pokopia-collection-${new Date().toISOString().split('T')[0]}.json`
  //   document.body.appendChild(a)
  //   a.click()
  //   document.body.removeChild(a)
  //   URL.revokeObjectURL(url)
  // }

  // const importCollection = (file) => {
  //   const reader = new FileReader()
  //   reader.onload = (e) => {
  //     try {
  //       const data = JSON.parse(e.target.result)
  //       if (data.collected && Array.isArray(data.collected)) {
  //         setCollectedPokemon(new Set(data.collected))
  //       }
  //     } catch (error) {
  //       console.error('Error importing collection:', error)
  //     }
  //   }
  //   reader.readAsText(file)
  // }

  const filteredPokemon = pokemonList.filter(pokemon => {
    const matchesSearch = pokemon.Name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || 
                         (filterType === 'collected' && collectedPokemon.has(pokemon.PokedexId)) ||
                         (filterType === 'uncollected' && !collectedPokemon.has(pokemon.PokedexId))
    const matchesLocation = locationFilter === 'all' || pokemon.Location === locationFilter
    return matchesSearch && matchesFilter && matchesLocation
  })

  const collectedCount = collectedPokemon.size
  const totalCount = pokemonList.length
  const completionPercentage = Math.round((collectedCount / totalCount) * 100)

  return (
    <div className="App">
      <header className="app-header">
        <h1>Pokopia Pokédex Tracker</h1>
        <div className="progress-stats">
          <div className="stat">
            <span className="stat-number">{collectedCount}</span>
            <span className="stat-label">Collected</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalCount}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completionPercentage}%</span>
            <span className="stat-label">Complete</span>
          </div>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </header>

      <main className="app-main">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        
        <PokemonList 
          pokemon={filteredPokemon}
          collectedPokemon={collectedPokemon}
          onToggleCollected={toggleCollected}
          viewMode={viewMode}
        />
        
        {filteredPokemon.length === 0 && (
          <div className="no-results">
            <p>No Pokémon found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App