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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/posts?_page=${currentPage}&_limit=10`)
      .then((response) => setPosts(response.data));
  }, []);

  async function loadMorePosts() {
    setCurrentPage((prevPage) => prevPage + 1);
    setIsLoading(true);
    const response = await api.get(`/posts?_page=${currentPage + 1}&_limit=10`);
    setPosts((prevPost) => [...prevPost, ...response.data]);
    setIsLoading(false);
  }

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight } = document.documentElement;
      const windowHeight = window.innerHeight;
      const scrollPosition = scrollTop + windowHeight;
      const scrollBottom = scrollHeight - 50; // margem de erro de 50 pixels

      if (scrollPosition >= scrollBottom) {
        loadMorePosts();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

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
        {isLoading && <p>Loading...</p>}
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
