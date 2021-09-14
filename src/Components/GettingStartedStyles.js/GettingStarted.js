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
        Each section corresponds to querying different sections of the data. 
        So the Bands section will contain routes that can query data 
        related to the different musical bands.
        
      </Description>
    </div>
  );
}
