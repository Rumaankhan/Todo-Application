import React from 'react';
import TodoContextProvider from './context/TodoContextProvider';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8 space-y-6">
                <h1 className="text-3xl font-extrabold text-center text-gray-800">
                    <span className="text-purple-600">ToDo</span> List
                </h1>
                <TodoContextProvider>
                    <TodoInput />
                    <TodoList />
                </TodoContextProvider>
            </div>
        </div>
    );
}

export default App;
