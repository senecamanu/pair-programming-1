'use strict';
module.exports = (sequelize, DataTypes) => {
  const NoteUser = sequelize.define('NoteUser', {
    NoteId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  NoteUser.associate = function(models) {
    // associations can be defined here
    NoteUser.belongsTo(models.Note)
    NoteUser.belongsTo(models.User)
  };
  return NoteUser;
};