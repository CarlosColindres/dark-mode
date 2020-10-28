import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {

        const localItem = window.localStorage.getItem(key)

        return localItem ? JSON.parse(localItem) : initialValue
    })

    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}
