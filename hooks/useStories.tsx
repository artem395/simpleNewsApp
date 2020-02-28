import { useState, useEffect } from 'react';

function useStoriesList(storyIds){
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchStories(){
      setLoading(true)
      try {
        const res = await Promise.all(storyIds
          .map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
          )
        ))
        setStories(stories.concat(res))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchStories()
  }, [JSON.stringify(storyIds)])
  return [stories, loading]
}

export default useStoriesList