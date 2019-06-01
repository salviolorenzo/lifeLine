const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class users {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static getUsers() {
    return db
      .any(`select * from users`)
      .then(results => {
        console.log(results);
        return results.map(result => {
          return new User(
            result.id,
            result.name,
            result.email,
            result.password
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  static addUser(name, email, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return db
      .one(
        `insert into users(name, email, password)
    values
    ($1, $2, $3) 
    returning id`,
        [name, email, hash]
      )
      .then(result => {
        return new User(result.id, name, email, hash);
      });
  }

  static getUserById(id) {
    return db.one(`select * from users where id=$1`, [id]).then(result => {
      return new User(result.id, result.name, result.email, result.password);
    });
  }

  static getByEmail(email) {
    return db
      .one(`select * from users where email=$1`, [email])
      .then(result => {
        return new User(result.id, result.name, result.email, result.password);
      });
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }

  static getUserFriends(user_id) {
    return db.any(`select * from user_friends where user_id = $1`, [user_id]);
  }
}

module.exports = users;
