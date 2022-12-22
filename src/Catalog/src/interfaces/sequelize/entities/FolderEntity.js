module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define("Folder", {
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Folder.associate = ({ Model }) => {
    Folder.hasMany(Model, { foreignKey: "folderId" });
  };

  return Folder;
};
