import { useContext } from 'react'
import { AppContext } from '@/lib/context'

export const useAppContext = () => {
	const context = useContext(AppContext)

	if (context) {
		return context
	}

	throw new Error(`useAppContext must be used within a AppContextProvider`)
}
