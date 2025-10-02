# FAU MLOps Course Landing Page

A professional landing page for Dr. Lee's Machine Learning Operations (MLOps) course at Florida Atlantic University, built with Next.js and adhering to the FAU brand identity guidelines.

## Features

- **FAU Brand Identity Compliant**: Uses official FAU color palette, typography hierarchy, and design principles
- **Modern Tech Stack**: Built with Next.js 14 and React 18
- **Responsive Design**: Mobile-first approach with clean, accessible layout
- **Professional Icons**: Uses Lucide React for modern, consistent iconography
- **Clean Architecture**: Follows FAU's 8pt spacing grid and layout principles

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with metadata
│   └── page.js            # MLOps landing page
├── styles/
│   └── globals.css        # FAU brand CSS variables and global styles
├── package.json
└── next.config.js
```

## FAU Brand Guidelines

This project follows the official FAU brand identity:

### Colors
- **FAU Blue** (#003366) - Primary brand color
- **FAU Red** (#CC0000) - Accent color
- **FAU Electric Blue** (#126BD9) - Interactive elements
- **FAU Dark Gray** (#4D4C55) - Body text

### Typography
- **Primary**: System fonts (Avenir fallback)
- **Secondary**: Georgia/Times (Superclarendon fallback)

### Design Principles
- 8pt spacing grid
- 1200px max content width
- Generous white space
- Clean, minimal aesthetic

## Customization

To modify the course content:
1. Edit `app/page.js` for content changes
2. Modify `styles/globals.css` for styling adjustments
3. Update `app/layout.js` for metadata changes

## License

Florida Atlantic University © 2025
