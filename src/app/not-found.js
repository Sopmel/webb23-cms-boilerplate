"use client"
import React, { useEffect, useState } from 'react';

export default function NotFound() {
	const [story, setStory] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchStory = async () => {
			try {
				const response = await fetch(`https://api.storyblok.com/v1/cdn/stories/not-found?version=draft&token=DlQbYZlQJxxPw4TB1jpc1gtt`);
                console.log('res-data:', response);
				if (!response.ok) {
					throw new Error(`Error fetching story: ${response.statusText}`);
				}
				const data = await response.json();
				setStory(data.story);
                console.log('data:', data);
			} catch (err) {
				setError(err);
			}
		};

		fetchStory();
	}, []);

	if (error) {
		return <div>Error loading 404 page: {error.message}</div>;
	}

	if (!story) {
		return <div>Loading...</div>;
	}

	return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">{story.content.body[0].title}</h1>
            <p>{story.content.body[0].description}</p>
            {story.content.body[0].image && <img src={story.content.body[0].image.filename} alt="404 Image" />}
        </main>
	);
}