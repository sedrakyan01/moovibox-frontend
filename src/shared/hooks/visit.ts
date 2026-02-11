import { useState } from 'react'

type StorageType = 'session' | 'local'

export function useVisit(key: string, storageType: StorageType = 'local') {
	const [hasAnimated] = useState(() => {
		if (typeof window === 'undefined') return false

		const storage = storageType === 'local' ? localStorage : sessionStorage
		const value = storage.getItem(key)

		if (value) return true

		storage.setItem(key, 'true')
		return false
	})

	return hasAnimated
}
