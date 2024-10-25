export type ApiResponse<T = undefined> = {
	data: T
	// statusCode: number
	message: string
}

export interface CustomError {
	response?: {
		data?: {
			message?: string
		}
	}
}