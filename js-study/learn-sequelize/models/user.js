const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    // static init 이라는 것은 테이블에 대한 설정을 하는 것이다.
    //user 라는 클래스의 모델의 각 테이블 속성에 맞게 설정을 해주는 것이다. 연동시킬 디비와 제대로 비교해주도록 하자.
    return super.init(
      {
        //super.init의 첫번째 인수로 이는 테이블 컬럼에 대한 설정이다.
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        //super.init의 두번째 인수로 이는 table 자체에 대한 설정을 해주는 것이다.
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  }
};
