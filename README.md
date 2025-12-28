# Browser Extension Manager

A comprehensive tool for managing browser extensions across different browsers, providing a unified interface for installing, updating, and organizing your browser extensions.

## 📋 Overview

Browser Extension Manager is designed to help users and developers efficiently manage browser extensions across multiple browsers (Chrome, Firefox, Edge, Safari, etc.). This tool aims to simplify extension management with features like bulk operations, extension synchronization, and detailed extension information.

## ✨ Features

- **Multi-Browser Support**: Manage extensions across Chrome, Firefox, Edge, and other popular browsers
- **Extension Discovery**: Browse and search for extensions from official stores
- **Bulk Operations**: Install, update, or remove multiple extensions at once
- **Extension Profiles**: Create and switch between different sets of extensions
- **Sync Across Browsers**: Keep your extension lists synchronized across different browsers
- **Extension Analytics**: View detailed information about installed extensions
- **Backup & Restore**: Export and import your extension configurations
- **Security Scanning**: Check extensions for potential security issues
- **Update Notifications**: Get notified when extensions need updates

## 🏗️ Project Structure

```
browser-extension-manager/
├── src/                    # Source code
│   ├── api/               # API endpoints and external service integrations
│   ├── core/              # Core functionality and business logic
│   ├── models/            # Data models and schemas
│   ├── services/          # Service layer for browser interactions
│   ├── ui/                # User interface components
│   └── utils/             # Utility functions and helpers
├── tests/                 # Test files
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   └── e2e/              # End-to-end tests
├── docs/                  # Documentation
│   ├── api/              # API documentation
│   ├── guides/           # User and developer guides
│   └── architecture/     # Architecture documentation
├── config/                # Configuration files
├── scripts/               # Build and utility scripts
└── public/                # Static assets
```

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js / Fastify (TBD)
- **Language**: TypeScript
- **Database**: SQLite / PostgreSQL (TBD)
- **ORM**: Prisma / TypeORM (TBD)

### Frontend
- **Framework**: React / Vue.js (TBD)
- **Language**: TypeScript
- **Styling**: Tailwind CSS / Material-UI (TBD)
- **State Management**: Redux / Zustand (TBD)
- **Build Tool**: Vite / Webpack (TBD)

### Browser Integration
- **Chrome**: Chrome Extensions Manifest V3 API
- **Firefox**: WebExtensions API
- **Edge**: Edge Extensions API (Chromium-based)

### Development Tools
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest / Vitest
- **CI/CD**: GitHub Actions
- **Package Manager**: npm / yarn / pnpm (TBD)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm / yarn / pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/StavLevi1601/browser-extension-manager.git

# Navigate to project directory
cd browser-extension-manager

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations (once implemented)
npm run migrate

# Start development server
npm run dev
```

### Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=sqlite:./data.db

# API Keys (if needed)
CHROME_STORE_API_KEY=your_key_here
FIREFOX_API_KEY=your_key_here

# Server Configuration
PORT=3000
NODE_ENV=development
```

## 📖 Usage

### Basic Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Testing
npm run test            # Run all tests
npm run test:unit       # Run unit tests
npm run test:integration # Run integration tests
npm run test:e2e        # Run end-to-end tests

# Code Quality
npm run lint            # Run linter
npm run format          # Format code
npm run type-check      # TypeScript type checking
```

### API Usage (Once Implemented)

```javascript
// Example: List installed extensions
GET /api/extensions

// Example: Install an extension
POST /api/extensions/install
{
  "extensionId": "extension-id",
  "browser": "chrome"
}

// Example: Update all extensions
PUT /api/extensions/update-all
```

## 🧪 Development

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes
5. Write/update tests
6. Ensure all tests pass: `npm test`
7. Commit your changes: `git commit -m "Add my feature"`
8. Push to your fork: `git push origin feature/my-feature`
9. Create a Pull Request

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Write comments for complex logic
- Maintain consistent indentation (2 spaces)
- Run `npm run format` before committing

### Testing Guidelines

- Write unit tests for all new functions
- Maintain test coverage above 80%
- Include integration tests for API endpoints
- Add E2E tests for critical user flows

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Check existing issues or create a new one
2. Fork the repository
3. Create a feature branch
4. Make your changes with tests
5. Ensure all tests pass
6. Submit a pull request

Please read our contributing guidelines for detailed information on how to contribute to this project.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/StavLevi1601/browser-extension-manager)
- [Issue Tracker](https://github.com/StavLevi1601/browser-extension-manager/issues)

## 📧 Contact

For questions or suggestions, please [open an issue](https://github.com/StavLevi1601/browser-extension-manager/issues) or contact the maintainer.

## 🗺️ Roadmap

- [ ] Project setup and architecture
- [ ] Core browser integration
- [ ] Basic extension management features
- [ ] Web UI development
- [ ] Extension store integration
- [ ] Multi-browser synchronization
- [ ] Security scanning features
- [ ] Beta release
- [ ] Production release

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by various browser extension management tools
- Built with modern web technologies

---

**Note**: This project is currently in the planning/initial development phase. Features and structure may change as development progresses.
