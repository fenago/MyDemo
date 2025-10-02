> # FAU Developer Style Guide & Implementation
> 
> **Author**: Manus AI
> **Date**: October 2, 2025
> 
> ## 1. Introduction
> 
> This document provides actionable code and implementation guidance for developers using the FAU brand identity. It is designed to be used with tools like Windsurf, Cursor, or any standard web development environment. The goal is to translate the brand specifications into reusable, clean, and maintainable code.
> 
> ## 2. CSS Custom Properties (Variables)
> 
> To ensure consistency and easy maintenance, all brand colors and typographic settings should be defined as CSS custom properties in the `:root` of your project's main stylesheet.
> 
> ```css
> /* :root {
>   /* ==========================================================================
>      1. FAU COLOR PALETTE
>      ========================================================================== */
> 
>   /* -- Primary Colors -- */
>   --fau-blue: #003366;
>   --fau-red: #CC0000;
>   --fau-dark-gray: #4D4C55;
>   --fau-gray: #CCCCCC;
> 
>   /* -- Extended Colors -- */
>   --fau-electric-blue: #126BD9;
>   --fau-stone: #7A97AB;
>   --fau-sky-blue: #D9ECFF;
>   --fau-sand: #D4B98B;
> 
>   /* -- Neutral & Utility Colors -- */
>   --white: #FFFFFF;
>   --border-light: #EAEAEA;
>   --text-body: var(--fau-dark-gray);
>   --text-link: var(--fau-electric-blue);
>   --background-body: var(--white);
> 
>   /* ==========================================================================
>      2. FAU TYPOGRAPHY
>      ========================================================================== */
> 
>   /* -- Font Families -- */
>   --font-primary: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
>   --font-secondary: "Superclarendon", "Palatino Linotype", "Book Antiqua", Palatino, serif;
> 
>   /* -- Font Weights -- */
>   --fw-light: 300;
>   --fw-book: 400;
>   --fw-roman: 500;
>   --fw-heavy: 700; /* Mapped to bold for web */
>   --fw-black: 900;
> 
>   /* -- Typographic Scale (rem) -- */
>   --fs-h1: 2.5rem;
>   --fs-h2: 2.0rem;
>   --fs-h3: 1.5rem;
>   --fs-h4: 1.25rem;
>   --fs-body: 1.0rem;
>   --fs-small: 0.875rem;
> 
>   /* ==========================================================================
>      3. SPACING & LAYOUT (8pt Grid)
>      ========================================================================== */
> 
>   --space-1: 0.5rem;  /* 8px */
>   --space-2: 1.0rem;  /* 16px */
>   --space-3: 1.5rem;  /* 24px */
>   --space-4: 2.0rem;  /* 32px */
>   --space-6: 3.0rem;  /* 48px */
>   --space-8: 4.0rem;  /* 64px */
> 
>   /* ==========================================================================
>      4. BORDERS & RADII
>      ========================================================================== */
> 
>   --border-radius-sm: 4px;
>   --border-radius-md: 8px;
>   --border-width: 1px;
>   --border-style: solid;
> } */
> ```


_Note: The above code is commented out to prevent direct execution issues, but should be used as a standard CSS file._

## 3. Base Styles & Resets

Apply these styles to your global stylesheet to set a consistent foundation.

```css
/* --- Basic Reset & Body Styling --- */
/* *, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-primary);
  font-weight: var(--fw-book);
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--text-body);
  background-color: var(--background-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* --- Typographic Hierarchy --- */
h1, h2, h3, h4 {
  margin-bottom: var(--space-2);
  line-height: 1.2;
}

h1 {
  font-family: var(--font-secondary);
  font-weight: var(--fw-heavy); /* Bold for web */
  font-size: var(--fs-h1);
  color: var(--fau-dark-gray);
}

h2 {
  font-family: var(--font-primary);
  font-weight: var(--fw-heavy);
  font-size: var(--fs-h2);
  color: var(--fau-blue);
}

h3 {
  font-family: var(--font-primary);
  font-weight: var(--fw-heavy);
  font-size: var(--fs-h3);
  color: var(--fau-red);
}

h4 {
  font-family: var(--font-primary);
  font-weight: var(--fw-roman);
  font-size: var(--fs-h4);
  color: var(--fau-dark-gray);
}

a {
  color: var(--text-link);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

a:hover {
  text-decoration: underline;
  color: var(--fau-blue);
} */
```

## 4. Component Library

Here are the base styles for common UI components.

### 4.1. Buttons

```css
/* .btn {
  display: inline-block;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-primary);
  font-weight: var(--fw-heavy);
  font-size: var(--fs-body);
  text-align: center;
  cursor: pointer;
  border: var(--border-width) var(--border-style) transparent;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease-in-out;
}

/* -- Primary Button -- */
.btn-primary {
  background-color: var(--fau-electric-blue);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--fau-blue);
  color: var(--white);
}

/* -- Secondary Button -- */
.btn-secondary {
  background-color: var(--white);
  color: var(--fau-electric-blue);
  border-color: var(--fau-electric-blue);
}

.btn-secondary:hover {
  background-color: var(--fau-sky-blue);
  border-color: var(--fau-blue);
  color: var(--fau-blue);
} */
```

### 4.2. Form Inputs

```css
/* .form-group {
  margin-bottom: var(--space-2);
}

.form-label {
  display: block;
  margin-bottom: var(--space-1);
  font-weight: var(--fw-roman);
}

.form-input {
  display: block;
  width: 100%;
  padding: var(--space-2);
  font-family: var(--font-primary);
  font-size: var(--fs-body);
  color: var(--text-body);
  background-color: var(--white);
  border: var(--border-width) var(--border-style) var(--fau-gray);
  border-radius: var(--border-radius-sm);
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.form-input:focus {
  outline: none;
  border-color: var(--fau-electric-blue);
  box-shadow: 0 0 0 3px rgba(18, 107, 217, 0.2);
} */
```

### 4.3. Cards

```css
/* .card {
  background-color: var(--white);
  border: var(--border-width) var(--border-style) var(--border-light);
  border-radius: var(--border-radius-md);
  padding: var(--space-4);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.card-header {
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-2);
  border-bottom: var(--border-width) var(--border-style) var(--border-light);
} */
```

## 5. Layout Examples

### 5.1. Grid System

```css
/* .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-2);
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(-1 * var(--space-2));
}

.col {
  flex: 1;
  padding: 0 var(--space-2);
}

.col-6 {
  flex: 0 0 50%;
  padding: 0 var(--space-2);
}

.col-4 {
  flex: 0 0 33.333333%;
  padding: 0 var(--space-2);
}

.col-3 {
  flex: 0 0 25%;
  padding: 0 var(--space-2);
} */
```

### 5.2. Hero Section Example

```html
<!-- <section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>ERNESTO LEE</h1>
      <p class="hero-subtitle">Instructor</p>
      <h2 class="hero-department">INFORMATION TECHNOLOGY AND OPERATIONS MANAGEMENT DEPARTMENT</h2>
      <div class="hero-contact">
        <p>Office: Liberal Arts Building - Room 467 (Davie)</p>
        <p>Email: <a href="mailto:lee@fau.edu">lee@fau.edu</a></p>
      </div>
    </div>
  </div>
</section> -->
```

```css
/* .hero {
  background-color: var(--white);
  padding: var(--space-8) 0;
}

.hero-content {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.hero h1 {
  color: var(--fau-red);
  margin-bottom: var(--space-1);
}

.hero-subtitle {
  color: var(--fau-dark-gray);
  font-size: var(--fs-body);
  margin-bottom: var(--space-2);
}

.hero-department {
  color: var(--fau-red);
  font-size: var(--fs-h3);
  font-weight: var(--fw-heavy);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space-3);
}

.hero-contact p {
  margin-bottom: var(--space-1);
  color: var(--fau-dark-gray);
} */
```

## 6. Responsive Design Guidelines

Ensure your implementation is mobile-first and responsive.

```css
/* --- Mobile First Breakpoints --- */
/* @media (min-width: 768px) {
  .container {
    padding: 0 var(--space-4);
  }
  
  .hero {
    padding: var(--space-8) 0;
  }
  
  .hero-content {
    flex-direction: row;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-6);
  }
} */
```

## 7. Implementation Checklist

When implementing this style guide in Windsurf, Cursor, or any development environment:

1. **Set up CSS Custom Properties**: Copy the `:root` variables into your main CSS file.
2. **Include Font Files**: Ensure Avenir and Superclarendon fonts are properly loaded (or use appropriate fallbacks).
3. **Apply Base Styles**: Use the provided typography and reset styles as your foundation.
4. **Build Components**: Implement buttons, forms, and cards using the provided component styles.
5. **Test Accessibility**: Ensure proper color contrast ratios and keyboard navigation.
6. **Validate Responsive Design**: Test across different screen sizes and devices.

## 8. Font Loading Considerations

Since Avenir and Superclarendon are premium fonts, consider these alternatives if they're not available:

- **Avenir Alternative**: "Nunito Sans", "Source Sans Pro", or system fonts
- **Superclarendon Alternative**: "Playfair Display", "Crimson Text", or "Georgia"

```css
/* Alternative font stacks */
/* --font-primary-alt: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-secondary-alt: "Playfair Display", "Georgia", "Times New Roman", serif; */
```

## 9. Performance Optimization

- Use CSS custom properties for consistent theming
- Minimize CSS specificity conflicts
- Consider using CSS-in-JS solutions for component-based frameworks
- Optimize font loading with `font-display: swap`
- Use semantic HTML for better accessibility and SEO

This developer guide provides everything needed to implement the FAU brand identity consistently across web projects while maintaining clean, maintainable, and scalable code.
