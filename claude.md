# Claude AI Development Guide

## Project Overview
This is a Slidev presentation project for creating developer-friendly slide presentations.

## Reference Material

### Example Presentation
**Location:** `examples/example-presentation.md`

This file contains a comprehensive example presentation that demonstrates all the major features and capabilities of Slidev. Use it as a reference when creating new presentations or slides.

The example includes demonstrations of:
- Basic slide structure and frontmatter configuration
- Navigation and keyboard shortcuts
- Code highlighting with TypeScript support
- Vue components integration
- Theming and styling
- Click animations and transitions
- Motion animations
- LaTeX support
- Diagrams (Mermaid, PlantUML)
- Draggable elements
- Monaco Editor integration

## Development Guidelines

When working on this project:

1. **Use the example as a template** - Reference `examples/example-presentation.md` to understand proper syntax and features
2. **Follow Slidev conventions** - Slides are separated by `---` and support frontmatter
3. **Leverage built-in components** - Slidev provides components like `<Tweet/>`, `<Youtube/>`, `<Counter/>`, etc.
4. **Use Markdown-first approach** - Content should be written in Markdown with Vue components where needed

## File Structure
- `slides.md` - Main presentation file (edit this for your presentation)
- `examples/` - Reference materials and example presentations
- `components/` - Custom Vue components
- `pages/` - Additional slide pages
- `snippets/` - Code snippets for inclusion in slides

## Running the Project
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

## Resources
- [Slidev Documentation](https://sli.dev)
- [Slidev GitHub](https://github.com/slidevjs/slidev)
