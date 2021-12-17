const UserList = (props) => {
  return (
    <ul>
      {props.userList.map((list) => (
        <li key={list.username}>
          `${list.username} (${list.age} years old)`
        </li>
      ))}
    </ul>
  );
};

export default UserList;
