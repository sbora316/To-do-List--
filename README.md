#  React To-Do List

A clean, responsive, and functional To-Do List application built as my first deep-dive into React state management and CRUD operations.

## Features

- **Add Tasks**: Quickly add new items to your list.
- **Validation**: Prevents empty tasks or whitespace-only entries.
- **Delete Tasks**: Remove tasks using a filtered state update.
- **Responsive Design**: Styled with modern CSS (Flexbox) for mobile and desktop.

## Tech Stack

- **React**: Functional components and Hooks (`useState`).
- **CSS3**: Custom styling with Flexbox and hover transitions.
- **JavaScript (ES6+)**: Array manipulation using `.map()` and `.filter()`.

---

## Component Logic Breakdown

### State Management

The app uses two main pieces of state:

1. `tasks`: An array containing the list of strings.
2. `input`: A string tracking the current value of the text field.

### Key Functions

- `handleInputChange`: Syncs the input field with the `input` state.
- `addTask`: Spreads the existing tasks and appends the new one: `setTasks([...tasks, input])`.
- `removeTask`: Uses `.filter()` to create a new array excluding the specific index.

---
