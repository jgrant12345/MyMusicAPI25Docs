import { Header, Description } from './GettingStartedStyles';
export function GettingStarted() {
  return (
    <div>
      <Header>Getting Started</Header>
      <Description>
        {' '}
        Welcome to my REST API! I made an API with some songs I like. This
        project is purely educational. It was built using SQL as the database,
        NodeJS and express in the backend, and ReactJS on the front end.
        
      </Description>
    </div>
  );
}
