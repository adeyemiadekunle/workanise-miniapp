import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { loginApi } from '@/lib/axios'
import { MutationConfig } from '@/lib/react-query'
import { saveToState } from '@/lib/store'
import { storeLocalUserData } from '@/lib/local-storage'
import { useAppContext } from '@/hooks/useAppContext'
import { LoginResponseType } from '../utils/types'



type LoginInputType = {
	referralCode?: string
}


export const loginFn = async (
	data: LoginInputType
): Promise<LoginResponseType> => {
	return loginApi.post('/auth/login', data)
}

type UseLoginOptions = {
	mutationConfig?: MutationConfig<typeof loginFn>
}

export function useLogin({ mutationConfig }: UseLoginOptions = {}) {
	const { dispatch } = useAppContext()
	const navigate = useNavigate()
	
	return useMutation({
		onSuccess:  (response) => {
			storeLocalUserData(response?.data)
			dispatch(saveToState(response?.data))
			navigate('/')
		},
		...mutationConfig,
		mutationFn: loginFn,
	})
}
