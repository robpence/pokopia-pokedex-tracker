# Pokopia Pokédex Tracker

A React application for tracking your Pokémon collection in Pokopia. Mark Pokémon as collected or not collected and view your progress with an intuitive interface.

## Features

- 📋 **Complete Pokédex**: View all available Pokémon in Pokopia
- ✅ **Collection Tracking**: Mark Pokémon as collected or not collected
- 🔍 **Search & Filter**: Search by name and filter by collection status
- 📊 **Progress Tracking**: Visual progress bar and completion statistics
- 💾 **Persistent Storage**: Your collection status is saved locally
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pokopia-pokedex-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`

### Production
Build the production version:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **View Pokémon**: Browse through all available Pokémon in the list
2. **Mark as Collected**: Click "Mark as Collected" on any Pokémon card
3. **Search**: Use the search bar to find specific Pokémon by name
4. **Filter**: Use filter buttons to view all, collected, or uncollected Pokémon
5. **Track Progress**: View your collection progress in the header statistics

## Customization

### Adding Pokémon Data
To add your own Pokopia Pokémon data, edit the `POKOPIA_POKEMON` array in `src/App.jsx`. Each Pokémon should have:
- `id`: Unique identifier
- `name`: Pokémon name
- `type`: Type information (e.g., "Fire/Flying")
- `image`: Path to Pokémon image

### Styling
The application uses CSS modules. Main style files:
- `src/App.css` - Main application styles
- `src/components/*.css` - Individual component styles

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **LocalStorage** - Data persistence

## Project Structure

```
src/
├── components/
│   ├── PokemonCard.jsx     # Individual Pokémon card component
│   ├── PokemonCard.css     # Card styling
│   ├── PokemonList.jsx     # Grid of all Pokémon
│   ├── PokemonList.css     # List styling
│   ├── SearchBar.jsx       # Search and filter component
│   └── SearchBar.css       # Search bar styling
├── App.jsx                 # Main application component
├── App.css                 # Main application styles
├── main.jsx               # React application entry point
└── index.css              # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).