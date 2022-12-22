module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Model", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model3D: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  Model.associate = ({ Folder }) => {
    Model.belongsTo(Folder, { foreignKey: "folderId" });
  };

  return Model;
};
