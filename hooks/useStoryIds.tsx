import { useState, useEffect } from 'react';

function useStoryIdsList(){
  const [storyIds, setStoriesIds] = useState([])
  useEffect(() => {
    async function fetchStories(){
      try {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        if (res && res.ok){
          const storyIds = await res.json();
          setStoriesIds(storyIds)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchStories()
  }, [storyIds.length])
  return [storyIds]
}

export default useStoryIdsList
