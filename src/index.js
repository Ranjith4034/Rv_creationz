import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Include tailwind
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);