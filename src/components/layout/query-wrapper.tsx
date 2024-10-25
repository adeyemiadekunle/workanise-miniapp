import { ReactNode, ReactElement } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { CustomError } from '@/utils/api-types'
import { ErrorAlert } from '../ui/alert'
import { Button } from '../ui/button'
import Spinner from '../ui/spinner'

interface QueryWrapperProps<TData, TError = CustomError> {
	currentQuery: UseQueryResult<TData, TError>
	children: ReactNode
	CustomLoader?: ReactElement | ReactNode
}

export const QueryWrapper = <TData, TError = CustomError>({
	currentQuery,
	children,
	CustomLoader,
}: QueryWrapperProps<TData, TError>) => {
	const { isPending, isError, error, refetch } = currentQuery || {}

	const handleRefetch = () => {
		refetch()
	}

	if (isPending) {
		if (CustomLoader) {
			return CustomLoader
		}
		return (
			<div className='flex min-h-56 flex-1 items-center justify-center'>
				<Spinner size='lg' type='external' />
			</div>
		)
	}

	if (isError) {
		return (
			<div className='flex min-h-56 flex-1 items-center justify-center'>
				<div className='flex flex-col items-center justify-center gap-4'>
					<ErrorAlert content={(error as { message: string })?.message} />
					<Button
						variant='default'
						size='md'
						type='button'
						className='mt-4 w-fit'
						onClick={handleRefetch}
					>
						Retry
					</Button>
				</div>
			</div>
		)
	}

	return <>{children}</>
}