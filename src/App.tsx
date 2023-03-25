import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Posts } from "./components/Posts/index";
import { Wrapper } from "./styles/wrapper";
import { api } from "./services/api";

interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/posts?_page=${currentPage}&_limit=10`)
      .then((response) => setPosts(response.data));
  }, []);

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    setLoading(true);
    api
      .get(`/posts?_page=${currentPage}&_limit=10`)
      .then((response) => setPosts((prev) => [...prev, ...response.data]));
  }, [currentPage]);

  function handlePost() {
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <>
      <Header />
      <Wrapper>
        {posts.map((post) => (
          <Posts
            key={post.id}
            postId={post.id}
            userId={post.userId}
            title={post.title}
            content={post.body}
          />
        ))}
        <button onClick={handlePost}>Carregar mais posts</button>
        {/* {loading && <p>Loading...</p>} */}
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
