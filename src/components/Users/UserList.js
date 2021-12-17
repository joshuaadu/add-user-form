import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  if (props.userList.length === 0) {
    return null;
  }
  return (
    <Card className={classes.lists}>
      <ul>
        {props.userList.map((list) => (
          <li className={classes.list} key={list.username}>
            {list.username} ({list.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
