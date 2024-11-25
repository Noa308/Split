const express = require("express");
const app = express();
const { client, connect } = require("./db");
app.use(express.json());
const port = 3000;

const makeLogger = (params) => {
  return (req, res, next) => {
    console.log(req.path);
    let s = "params: ";
    s += params.map((parm) => `${parm}: ${req.body[parm]}`).join(",");
    console.log(s);
    next();
    //middleware
  };
};

const request_habdler = async (res, query, queryVar) => {
  const { rows } = await client.query(query, queryVar);
  console.log(rows);
  if (rows.length > 0) {
    res.json(rows);
  } else {
    res.status(500).send();
  }
};

app.post("/addGroup", makeLogger(["groupName"]), (req, res) => {
  const groupName = req.body.groupName;
  if (!groupName) {
    return res.status(400).send();
  }
  request_habdler(res, `INSERT INTO groups (name) VALUES ($1) RETURNING id`, [
    groupName,
  ]);
});

app.post("/addUser", makeLogger(["userName"]), (req, res) => {
  const userName = req.body.userName;
  if (!userName) {
    return res.status(400).send();
  }
  request_habdler(res, `INSERT INTO users (name) VALUES ($1) RETURNING id`, [
    userName,
  ]);
});

app.post(
  "/addUserToGroup",
  makeLogger(["groupId", "userId"]),
  async (req, res) => {
    const { groupId, userId } = req.body;
    if (!groupId || !userId) {
      return res.status(400).send();
    }
    await client.query(
      `insert into users_in_groups (user_id, group_id) values($1,$2)`,
      [userId, groupId]
    );
    res.status(200).send();
  }
);

app.post(
  "/addExpense",
  makeLogger([
    "expenseName",
    "amount",
    "date",
    "whoPay",
    "splitEqualy",
    "groupId",
  ]),
  (req, res) => {
    const { expenseName, amount, date, whoPay, splitEqualy, groupId } =
      req.body;
    if (
      !expenseName ||
      !amount ||
      !date ||
      !whoPay ||
      !splitEqualy ||
      !groupId
    ) {
      return res.status(400).send();
    }
    request_habdler(
      res,
      `INSERT INTO expenses ( name, amount, date, paid_by, split_equaly, group_id) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING id`,
      [expenseName, amount, date, whoPay, splitEqualy, groupId]
    );
  }
);

app.get("/getGroupExpenses", makeLogger(["groupId"]), async (req, res) => {
  const groupId = req.body.groupId;
  if (!groupId) {
    return res.status(400).send();
  }
  const { rows } = await client.query(
    `select * from expenses where group_id= $1`,
    [groupId]
  );
  res.status(200).json(rows);
});

app.get("/getUsers", async (req, res) => {
  console.log(req.path);
  const { rows } = await client.query(`select * from users`);
  res.status(200).json(rows);
});

app.get("/getGroups", async (req, res) => {
  console.log(req.path);
  const { rows } = await client.query(`select * from groups`);
  res.status(200).json(rows);
});

app.get("/getGroupUsers", makeLogger(["groupId"]), async (req, res) => {
  const groupId = req.body.groupId;
  if (!groupId) {
    return res.status(400).send();
  }
  const { rows } = await client.query(
    `select user_id from users_in_groups where group_id= $1`,
    [groupId]
  );
  res.status(200).json(rows);
});

app.listen(port, async () => {
  await connect();
  console.log(`Example app listening on port ${port}`);
});

async function cleanup() {
  await client.end();
  setTimeout(function () {
    console.error("Could not close connections in time, forcing shut down");
    process.exit(1);
  }, 30 * 1000);
  process.exit();
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

//to delete the DB
