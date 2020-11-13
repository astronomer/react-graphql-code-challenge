const Query = {
  users(parent, args, { db }, info) {
    return db.users;
  },
};

export default Query;
