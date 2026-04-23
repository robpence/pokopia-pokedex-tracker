import './PokemonCard.css'
import placeholderImage from '../images/placeholder.png';

function PokemonCard({ pokemon, isCollected, onToggleCollected, viewMode }) {
  const handleToggle = () => {
    onToggleCollected(pokemon.PokedexId)
  }

  return (
    <div className={`pokemon-card ${isCollected ? 'collected' : ''} ${viewMode === 'list' ? 'list-item' : ''}`}>
      <div className="pokemon-image">
        <img 
          src={pokemon.Image} 
          alt={pokemon.Name}
          onError={(e) => {
            // Fallback to a placeholder if image doesn't exist
            e.target.onerror = null; // Prevent infinite loop if placeholder also fails
            e.target.src = placeholderImage;
          }}
        />
        {isCollected && (
          <div className="collected-badge">
            <span>✓</span>
          </div>
        )}
      </div>
      
      <div className="pokemon-info">
        {viewMode === 'list' ? (
          <>
            <div className="pokemon-name-section">
              <h3 className="pokemon-name">#{pokemon.PokedexId} {pokemon.Name}</h3>
            </div>
            <div className="pokemon-details">
              <div>
                <p className="pokemon-type">{pokemon.Location}</p>
              </div>
              <div className="habitat-section">
                <p className="habitat-label">Habitat(s):</p>
                {pokemon.Habitat && pokemon.Habitat.Habitat1 && (
                  <a className="pokemon-type" href={pokemon.Habitat.Habitat1.Link} target="_blank" rel="noopener noreferrer">{pokemon.Habitat.Habitat1.Name}</a>
                )}
                {pokemon.Habitat && pokemon.Habitat.Habitat2 && pokemon.Habitat.Habitat2 !== "N/A" && (
                  <a className="pokemon-type" href={pokemon.Habitat.Habitat2.Link} target="_blank" rel="noopener noreferrer">{pokemon.Habitat.Habitat2.Name}</a>
                )}
                {pokemon.Habitat && pokemon.Habitat.Habitat3 && pokemon.Habitat.Habitat3 !== "N/A" && (
                  <a className="pokemon-type" href={pokemon.Habitat.Habitat3.Link} target="_blank" rel="noopener noreferrer">{pokemon.Habitat.Habitat3.Name}</a>
                )}
              </div>
              <div>
              <button 
                  className={`collect-button ${isCollected ? 'collected' : ''}`}
                  onClick={handleToggle}
                  aria-label={`Mark ${pokemon.Name} as ${isCollected ? 'not collected' : 'collected'}`}
                >
                  {isCollected ? 'Mark as Not Collected' : 'Mark as Collected'}
              </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="pokemon-name">#{pokemon.PokedexId} {pokemon.Name}</h3>
            <p className="pokemon-type">{pokemon.Location}</p>
            <p>Habitat(s): </p>
            {pokemon.Habitat && pokemon.Habitat.Habitat1 && (
                <a className="pokemon-type" href={pokemon.Habitat.Habitat1.Link} target="_blank" rel="noopener noreferrer">{pokemon.Habitat.Habitat1.Name}</a>
            )}
            {pokemon.Habitat && pokemon.Habitat.Habitat2 && pokemon.Habitat.Habitat2 !== "N/A" && (
                <a className="pokemon-type" href={pokemon.Habitat.Habitat2.Link} target="_blank" rel="noopener noreferrer">{pokemon.Habitat.Habitat2.Name}</a>
            )}
            {pokemon.Habitat && pokemon.Habitat.Habitat3 && pokemon.Habitat.Habitat3 !== "N/A" && (
                <a className="pokemon-type" href={pokemon.Habitat.Habitat3.Link} target="_blank" rel="noopener noreferrer">{pokemon.Habitat.Habitat3.Name}</a>
            )}
            <button 
              className={`collect-button ${isCollected ? 'collected' : ''}`}
              onClick={handleToggle}
              aria-label={`Mark ${pokemon.Name} as ${isCollected ? 'not collected' : 'collected'}`}
            >
              {isCollected ? 'Mark as Not Collected' : 'Mark as Collected'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default PokemonCard