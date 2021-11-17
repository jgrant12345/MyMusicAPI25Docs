import { Description, ParameterName } from "./ParameterStyles";
export function Parameters(props) {
  return (
    <div>
      <div>Paramters</div>
      <ol>
        {props.ParameterList.map((object) => {
          console.log(object);
          return <li key={object.Description}>
              <ParameterName>{object.Name}</ParameterName>
              <Description>{object.Description}</Description>
              </li>;
        })}
      </ol>
    </div>
  );
}
