import { ReactNode, createContext, useEffect, useMemo, useReducer } from 'react'
import { initialState, initializer, reducer } from './store'
import { ActionEnums, AppContextType } from '@/types'

export const AppContext = createContext<AppContextType>({
	state: initialState,
	dispatch: () => null,
})

export function AppContextProvider({ children }: { children: ReactNode }) {

	const [state, dispatch] = useReducer(reducer, initialState)

	
	useEffect(() => {
		const fetchData = async () => {
			const initialData = await initializer();
			dispatch({ type: ActionEnums.SAVE_TO_STATE, payload: initialData });
		};
		fetchData();
	}, []);


	const value = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch]
	)

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
