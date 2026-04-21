import './SearchBar.css'

function SearchBar({ searchTerm, setSearchTerm, filterType, setFilterType, locationFilter, setLocationFilter, viewMode, setViewMode }) {
  const locations = ['all', 'Withered Wasteland', 'Bleak Beach', 'Rocky Ridges', 'Sparkling Skylands', 'Palette Town', 'Any']
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Pokémon by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      
      <div className="filter-section">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filterType === 'collected' ? 'active' : ''}`}
            onClick={() => setFilterType('collected')}
          >
            Collected
          </button>
          <button 
            className={`filter-btn ${filterType === 'uncollected' ? 'active' : ''}`}
            onClick={() => setFilterType('uncollected')}
          >
            Not Collected
          </button>
        </div>
        
        <div className="location-filter">
          <label htmlFor="location-select" className="filter-label">Filter by Location:</label>
          <select 
            id="location-select"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="location-select"
          >
            {locations.map(location => (
              <option key={location} value={location}>
                {location === 'all' ? 'All Locations' : location}
              </option>
            ))}
          </select>
        </div>
        
        <div className="view-toggle">
          <label className="filter-label">View Mode:</label>
          <div className="view-buttons">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <span className="view-icon">⊞</span> Grid
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <span className="view-icon">☰</span> List
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar