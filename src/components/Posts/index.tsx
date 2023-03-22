import { Container } from "./style";

interface Posts {
  authorId: number;
  title: string;
  content: string;
}

export function Posts({ authorId, title, content }: Posts) {
  return (
    <>
      <Container>
        <header>
          <div>
            <p>{authorId}</p>
          </div>
        </header>
        <div>
          <p>{title}</p>
          <p>{content}</p>
        </div>
      </Container>
    </>
  );
}
