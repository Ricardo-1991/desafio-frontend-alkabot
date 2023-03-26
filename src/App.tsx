import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Loader } from "./components/layout/Loader/index";
import { FooterContainer } from "./styles/FooterContainer";
import { api } from "./services/api";
import { Header } from "./components/Header/index";
import { Posts } from "./components/Posts/index";
import { Wrapper } from "./styles/wrapper";
import { Container } from "./styles/Main";

interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [currentPage, setCurrentPage] = useState(10);

  useEffect(() => {
    api.get(`posts`).then((response) => setPosts(response.data));
  }, []);

  function handlePost() {
    setCurrentPage((prev) => prev + 10);
  }

  return (
    <Container>
      {!posts && <Loader />}
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
        <FooterContainer>
          <button onClick={handlePost}>Carregar novas postagens</button>
        </FooterContainer>
      </Wrapper>
      <GlobalStyle />
    </Container>
  );
}

export default App;
