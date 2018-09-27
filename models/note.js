'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: { type: DataTypes.TEXT, defaultValue: 'Empty' },
    body: { type: DataTypes.TEXT, defaultValue: 'Empty' }
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsToMany(models.User, {through: 'NoteUser'})
  };
  return Note;
};