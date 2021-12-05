export function Avatar(props) {
  return (
    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={props.avatarUrl} alt="Avatar do Membro"></img>
  );
};