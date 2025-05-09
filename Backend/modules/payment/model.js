import { DataTypes } from 'sequelize';
import sequelize from '../../MyDbContext.js'; 
import { v4 as uuidv4 } from 'uuid';

const Example  = sequelize.define(
  'Example',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Examples',
    timestamps: true,     
    paranoid: true,      
  }
);

export default Example;
