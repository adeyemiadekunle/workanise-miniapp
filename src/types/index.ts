export interface UserType {
	id: string;
	telegramId: string;
	username: string | null;
	firstName: string | null;
	lastName: string | null;
	photoUrl: string | null;
	referralCode?: string;
	role?:string
 }

export interface StateType {
	user: UserType | null
	accessToken: string
	refreshToken: string
}

export enum ActionEnums {
	SAVE_TO_STATE = 'SAVE_TO_STATE',
	CLEAR_STATE = 'CLEAR_STATE',
}

export interface ActionType {
	type: ActionEnums
	payload?: StateType
}

export type AppContextType = {
   state: StateType;
   dispatch: React.Dispatch<ActionType>;
 }
 