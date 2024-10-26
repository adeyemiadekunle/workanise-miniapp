import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from './alert'

export function ErrorAlert({
	content,
	title,
}: {
	content: string | undefined
	title?: string
}) {
	return (
		<Alert variant='destructive' className='flex items-end gap-1'>
			<ExclamationTriangleIcon className='m-0 mr-1 size-4' />
			<AlertTitle className='m-0 font-regular text-sm leading-none'>
				{title}
				{title && ':'}
			</AlertTitle>
			<AlertDescription className='font-light leading-none'>
				{content}
			</AlertDescription>
		</Alert>
	)
}