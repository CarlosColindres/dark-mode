import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
    const [localSorage, SetLocalStorage] = useLocalStorage('darkMode')
    return [localSorage, SetLocalStorage]
}