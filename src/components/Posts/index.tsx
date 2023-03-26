import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Comments } from "../Comments/index";
import { Loader } from "../layout/Loader";
import { Avatar } from "../layout/Avatar/index";
import { AuthorInfo, Container, Content } from "./style";
import { User } from "@phosphor-icons/react";

interface Posts {
  postId: number;
  userId: number;
  title: string;
  content: string;
}

interface Comments {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

interface User {
  name: string;
  id: number;
}

export function Posts({ userId, title, content, postId }: Posts) {
  const [comments, setComments] = useState<Comments[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    api.get(`users`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`posts/${postId}/comments`).then((response) => {
      setComments(response.data);
    });
  }, []);

  function handleShowComment() {
    setShowComments(true);
  }

  function handleHideComments() {
    setShowComments(false);
  }

  const userName = users.filter((user) => user.id === userId)[0]?.name;
  const commentsSize = comments.length;
  return (
    <Container>
      <header>
        <AuthorInfo>
          <Avatar hasBorder={true} />
          <div>
            <strong>{userName ? userName : <Loader />}</strong>
            <span>Usuário do AlkaBlog</span>
          </div>
        </AuthorInfo>
      </header>
      <Content>
        <strong>{title}</strong>
        <p>{content}</p>
      </Content>
      {showComments &&
        comments.map((comment) => (
          <Comments
            key={comment.id}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            content={comment.body}
          />
        ))}
      {showComments ? (
        <button onClick={handleHideComments}>Fechar Comentários</button>
      ) : (
        <button onClick={handleShowComment}>
          Ver todos os {commentsSize} comentários
        </button>
      )}
    </Container>
  );
}
