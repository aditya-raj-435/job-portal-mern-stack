# Part 8 - Redux Integration

This part implements Redux state management and API integration.

## Features

- Redux store setup
- Authentication state management
- Job management state
- API integration
- Async actions with Redux Thunk
- Error handling
- Loading states

## Redux Structure

- `/redux/store.js` - Redux store configuration
- `/redux/actions` - Action creators
- `/redux/reducers` - State reducers
- `/redux/types` - Action types
- `/redux/selectors` - State selectors

## Setup Instructions

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Configure Redux DevTools:
   - Install Redux DevTools browser extension
   - Enable Redux DevTools in store configuration

3. Run the application:
   ```bash
   npm start
   ```

## State Management

- User authentication state
- Job listings state
- Job types state
- UI state (loading, errors)
- Filter and search state 