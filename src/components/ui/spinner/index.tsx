import { cn } from '@/utils/helper-funcs'

const sizes = {
	sm: 'h-4 w-4',
	md: 'h-8 w-8',
	lg: 'h-16 w-16',
	xl: 'h-24 w-24',
}

const variants = {
	light: 'text-white border-white',
	primary: 'text-primary border-primary',
}

export type SpinnerProps = {
	className?: string
	size?: keyof typeof sizes
	type?: 'internal' | 'external'
	variant?: keyof typeof variants
}

const Spinner = ({
	className,
	size = 'sm',
	type = 'internal',
	variant = 'primary',
}: SpinnerProps) => {
	if (type === 'internal') {
		return (
			<div className={cn(className)}>
				<div
					className={cn(
						'animate-spin rounded-full border-b-2',
						sizes[size],
						variants[variant]
					)}
				></div>
			</div>
		)
	}

	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={cn(
					'animate-spin',
					sizes[size],
					variants[variant],
					className
				)}
			>
				<path d='M21 12a9 9 0 1 1-6.219-8.56' />
			</svg>
			<span className='sr-only'>Loading</span>
		</>
	)
}

export default Spinner