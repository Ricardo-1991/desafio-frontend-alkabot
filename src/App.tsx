import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { LoadingContainer } from "./styles/LoadingContainer";
import { api } from "./services/api";
import { Header } from "./components/Header/index";
import { Posts } from "./components/Posts/index";
import { Wrapper } from "./styles/wrapper";
import spinnerLoading from "./assets/spinner.svg";

interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [currentPage, setCurrentPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get(`posts`).then((response) => setPosts(response.data));
  }, []);

  function handlePost() {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage((prev) => prev + 10);
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <Header />
      <Wrapper>
        {posts.slice(0, currentPage).map((post) => (
          <Posts
            key={post.id}
            postId={post.id}
            userId={post.userId}
            title={post.title}
            content={post.body}
          />
        ))}
        <LoadingContainer>
          {loading ? (
            <img src={spinnerLoading} alt="" />
          ) : (
            <button onClick={handlePost}>Carregar novas postagens</button>
          )}
        </LoadingContainer>
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
