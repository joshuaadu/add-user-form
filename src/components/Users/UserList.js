import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  if (props.users.length === 0) {
    return null;
  }
  return (
    <Card className={classes.lists}>
      <ul>
        {props.users.map((user) => (
          <li className={classes.list} key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
