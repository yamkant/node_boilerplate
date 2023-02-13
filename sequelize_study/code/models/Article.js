module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        // Model attributes are defined here
        art_seq: {
            comment: '아티클 순번',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        title: {
            comment: '아티클 제목',
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            comment: '아티클 내용',
            type: DataTypes.STRING
        }
    }, {
        // Other model options go here
        timestamps: false,
        tableName: 'articles',
    });

    Article.associate = (models) => {
        Article.belongsTo(models.User, {
            forienKey: {
                name: 'user_seq',
                allowNull: false,
                defaultValue: '1',
            }
        })
    }

    // `sequelize.define` also returns the model
    console.log(Article === sequelize.models.Article); // true
    return Article;
}