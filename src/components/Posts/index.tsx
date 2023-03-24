import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

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
  // id: number;
  // username: string;
  // email: string;
  // address: {
  //   street: string;
  //   suite: string;
  //   city: string;
  //   zipcode: string;
  //   geo: {
  //     lat: string;
  //     lng: string;
  //   };
  // };
  // phone: string;
  // website: string;
  // company: {
  //   name: string;
  //   catchPhrase: string;
  //   bs: string;
  // };
}

export function Posts({ userId, title, content, postId }: Posts) {
  const [comments, setComments] = useState<Comments[]>([]);
  const [user, setUser] = useState<User>({
    name: "",
  });
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    api.get(`users/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  function handleShowComment(postId: number) {
    api.get(`posts/${postId}/comments`).then((response) => {
      setComments(response.data);
      setShowComments(true);
    });
  }

  function handleHideComments() {
    setShowComments(false);
  }

  return (
    <Container>
      <header>
        <div>
          <p>{user.name}</p>
          <p>{title}</p>
        </div>
      </header>
      <div onClick={() => handleShowComment(postId)}>
        <p>{content}</p>
      </div>
      {showComments && (
        <div>
          <br />
          <br />
          <h3>Comentários</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleHideComments}>Fechar Comentários</button>
        </div>
      )}
    </Container>
  );
}
