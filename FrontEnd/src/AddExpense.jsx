// import { useEffect, useState } from "react";

import useGetUsers from "./useGetUsers";
// import useGetExpenses from "./useGetExpenses";
// import useGetUserName from "./useGetUserName";

function AddExpense({ id, setExpenses }) {
  //   const [usersId, setUsersId] = useState([]);
  //   const [payingUser, setPayingUser] = useState(0);

  const users = useGetUsers(id);
  //   const getExpenses = useGetExpenses({ setExpenses });
  //   const getUserName = useGetUserName({ setUsersNames });

  //   useEffect(() => {
  //     const getUsersNames = (usersId) => {
  //       console.log(usersId);
  //       setUsersNames(usersId.map((user) => getUserName(user)));
  //       console.log(usersId);
  //       console.log(usersNames);
  //     };
  //     getUsersNames(usersId);
  //   }, [usersId, getUserName, usersNames]);

  //   const handleChange = (e) => {
  //     setPayingUser(e.target.value);
  //     //this will be the expenses.whoPay
  //   };

  return (
    <div>
      <label>Add new expense:</label>
      <p>{JSON.stringify(users)}</p>

      {/* <select onChange={handleChange}>
         <option value="null">Who pay?</option>
        {usersNames.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option> 
        ))}  
      </select> */}
    </div>
  );
}

{
  /*
          i dont need it, all i want is to add: id of who pay, date, expense
          title, expense amount , splitting and agter this in Expense component i
          will change the user id to name. the client will not see the user_id, he
          will see the users options (from /getGroupUsers) and then select it but
          we wil get the id to open with http://localhost:5173/Groups/4 */
}

export default AddExpense;
