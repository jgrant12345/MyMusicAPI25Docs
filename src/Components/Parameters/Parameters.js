export function Parameters(props) {
  return (
    <div>
      <div>Paramters</div>
      <ol>
        {props.ParameterList.map((object) => {
          console.log(object);
          return <li key={object.Description}>
              <div>{object.Name}</div>
              <div>{object.Description}</div>
              </li>;
        })}
      </ol>
    </div>
  );
}
