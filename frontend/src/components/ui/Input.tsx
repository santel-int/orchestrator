import React from 'react'

export function Label({ htmlFor, children, className }: { htmlFor: string, children: React.ReactNode, className?: string }) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm uppercase font-bold text-gray-700 mb-1 ${className || ''}`}>
      {children}
    </label>
  )
}

export function TextInput({ id, value, onChange, required, placeholder, className }: { id: string, value: string, onChange: (value: string) => void, required: boolean, placeholder: string, className?: string }) {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className={`w-full px-4 py-2 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors ${className || ''}`}
    />
  )
}