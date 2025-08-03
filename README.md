# Portfolio Website

A simple, modern portfolio website built with React and TypeScript that displays images in a beautiful responsive grid layout.

## Features

- 🎨 Modern, clean design with gradient header
- 📱 Fully responsive grid layout
- 🖼️ Hover effects on portfolio items
- ⚡ Fast loading with lazy image loading
- 🎯 Single page application
- 📐 CSS Grid for perfect alignment

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Adding Your Own Images

1. **Replace the sample images**: Edit the `portfolioItems` array in `src/App.tsx`
2. **Use your own images**: Replace the Unsplash URLs with your own image URLs or local images
3. **Add more items**: Simply add more objects to the `portfolioItems` array

### Example of adding your own portfolio item:

```typescript
{
  id: 7,
  title: "My Project",
  description: "Description of your project",
  imageUrl: "/path/to/your/image.jpg", // or external URL
  category: "Your Category"
}
```

### Styling Customization

- **Colors**: Modify the CSS variables and gradient colors in `src/App.css`
- **Layout**: Adjust the grid settings in the `.portfolio-grid` class
- **Typography**: Update font sizes and weights in the CSS classes
- **Animations**: Modify transition effects and hover states

### Adding Local Images

1. Place your images in the `public` folder
2. Reference them in the `imageUrl` field like: `"/your-image.jpg"`

## Project Structure

```
src/
├── App.tsx          # Main component with portfolio data
├── App.css          # Portfolio styling
├── index.tsx        # App entry point
└── index.css        # Global styles

public/
├── index.html       # HTML template
└── [your-images]    # Add your images here
```

## Technologies Used

- React 19
- TypeScript
- CSS Grid
- Modern CSS features (Flexbox, Grid, Transitions)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
