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

  useEffect(() => {
    api.get(`posts`).then((response) => setPosts(response.data));
  }, []);

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
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
