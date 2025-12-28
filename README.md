<<<<<<< HEAD
# browser-extension-manager
browser-extension-manager
=======
# Browser Extension Manager

A modern React-based web application for managing browser extensions with an intuitive interface. Built with TypeScript, Material-UI, and Vite for optimal performance and developer experience.

## Features

- 🔌 **Extension Management**: View, enable/disable, and remove browser extensions
- 🎨 **Modern UI**: Clean, responsive design using Material-UI components
- 🌗 **Dark/Light Mode**: Toggle between light and dark themes
- 🔍 **Filtering**: Filter extensions by status (all, active, inactive)
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **React 19.2** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Material-UI (MUI) 7.3** - Comprehensive React component library
- **Emotion** - CSS-in-JS styling solution
- **React Router 7.9** - Client-side routing
- **Vite 7.2** - Next generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd browser-extension-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ExtensionCard/   # Extension card component
│   ├── ExtensionHeader/ # Header component
│   └── ExtensitonList/  # Extension list component
├── data/               # Static data and mock data
├── hooks/              # Custom React hooks
├── layout/             # Layout components
├── pages/              # Page components
│   ├── Home/           # Home page
│   └── About/          # About page
├── theme/              # Material-UI theme configuration
├── types/              # TypeScript type definitions
└── util/               # Utility functions
```

## Key Components

### ExtensionCard
Individual extension cards displaying:
- Extension icon and name
- Description
- Enable/disable toggle
- Remove button

### ExtensionHeader
Main header with:
- Title and branding
- Theme toggle (light/dark mode)

### ExtensionList
List management with:
- Filter options (all, active, inactive)
- Extension count display

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

### Code Style

This project uses ESLint for maintaining code quality. The configuration includes:
- TypeScript support
- React-specific rules
- Modern JavaScript standards

### Building for Production

```bash
npm run build
```

This will create an optimized build in the `dist` folder.

## License

This project is private and not currently open source.

---

Built with ❤️ using React, TypeScript, and Material-UI
