import { useState, useEffect, useRef } from 'react';

export const useOnScreen = ref => {
	const [isOnScreen, setOnScreen] = useState(false);

	const observer = useRef();

	useEffect(() => {
		observer.current = new IntersectionObserver(
			([entry]) => setOnScreen(entry.isIntersecting),
			{
				threshold: [0.25, 0.5, 0.75],
			}
		);
		observer.current.observe(ref.current);
		return () => {
			observer.current.disconnect();
		};
	});

	return isOnScreen;
};