import PokemonCard from './PokemonCard'
import './PokemonList.css'

function PokemonList({ pokemon, collectedPokemon, onToggleCollected, viewMode }) {
  return (
    <div className={`pokemon-list ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
      {pokemon.map(poke => (
        <PokemonCard
          key={poke.PokedexId}
          pokemon={poke}
          isCollected={collectedPokemon.has(poke.PokedexId)}
          onToggleCollected={onToggleCollected}
          viewMode={viewMode}
        />
      ))}
    </div>
  )
}

export default PokemonList