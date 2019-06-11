const getArticlesList = () => {
    const url = "http://localhost:9001/api/Articles/All"
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
  }

export default getArticlesList