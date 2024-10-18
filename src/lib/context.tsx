import { ReactNode, createContext, useMemo, useReducer } from 'react'
import { initialState, initializer, reducer } from './store'
import { AppContextType } from '@/types'

export const AppContext = createContext<AppContextType>({
	state: initialState,
	dispatch: () => null,
})

export function AppContextProvider({ children }: { children: ReactNode }) {

	const [state, dispatch] = useReducer(reducer, initialState, initializer)

	const value = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch]
	)
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
