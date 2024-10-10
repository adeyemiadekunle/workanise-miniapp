import { ActionEnums, ActionType, StateType } from '@/types'
import { STORAGE_KEY } from '@/utils/constants'
import { fetchLocalUserData } from './local-storage'

export const initialState: StateType = {
	user: null,
	accessToken: '',
	refreshToken: '',
}

export const initializer = async (
	initialValue: StateType = initialState
): Promise<StateType> =>  await fetchLocalUserData(STORAGE_KEY, initialValue)

export function reducer(state: StateType, action: ActionType) {
	switch (action.type) {
		case ActionEnums.SAVE_TO_STATE: {
			return { ...state, ...action.payload }
		}
		case ActionEnums.CLEAR_STATE:
			return initialState
		default:
			return state
	}
}

export const saveToState = (payload: StateType) => ({
	type: ActionEnums.SAVE_TO_STATE,
	payload,
})

export const clearState = () => ({
	type: ActionEnums.CLEAR_STATE,
})
