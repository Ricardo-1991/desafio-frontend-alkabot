import { useState } from "react";
import { Avatar } from "../layout/Avatar/index";
import { Container, CommentInfo } from "./style";
import { ThumbsUp } from "@phosphor-icons/react";
import { AuthorInfo } from "../Posts/style";

interface CommentsProps {
  content: string;
  id: number;
  name: string;
  email: string;
}

export function Comments({ name, content, email }: CommentsProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((prevCount) => prevCount + 1);
  }

  return (
    <Container>
      <ul>
        <CommentInfo>
          <AuthorInfo>
            <Avatar hasBorder={false} />
            <strong>{email}</strong>
          </AuthorInfo>
          <li>
            <h3>{name}</h3>
            <p>{content}</p>
          </li>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp size={20} />
              <span>Curtir {likeCount}</span>
            </button>
          </footer>
        </CommentInfo>
      </ul>
    </Container>
  );
}
