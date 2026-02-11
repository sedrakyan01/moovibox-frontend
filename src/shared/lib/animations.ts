import { type Variants } from 'framer-motion'

export const logoAnimation: Variants = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 10,
			mass: 1,
			duration: 2,
			ease: 'easeInOut',
			delay: 0,
		},
	},
}

export const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.5,
			delayChildren: 0.5,
		},
	},
}

export const itemVariants = {
	hidden: {
		opacity: 0,
		x: -40,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 10,
			mass: 1,
			duration: 1.2,
			ease: 'easeInOut',
		},
	},
}

export const signInAnimation: Variants = {
	hidden: {
		opacity: 0,
		x: -80,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 10,
			mass: 1,
			duration: 1.5,
			delay: 3.0,
			ease: 'easeInOut',
		},
	},
}

export const shortHeroWidgetAnimation: Variants = {
	hidden: {
		opacity: 0,
		y: -15,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 10,
			mass: 1,
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
}

export const heroWidgetAnimation: Variants = {
	hidden: {
		opacity: 0,
		y: -40,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 50,
			damping: 10,
			mass: 1,
			duration: 1.5,
			ease: 'easeInOut',
			delay: 3.7
		},
	},
}
