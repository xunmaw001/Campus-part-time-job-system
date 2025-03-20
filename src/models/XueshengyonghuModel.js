import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 学生用户
const XueshengyonghuModel = sequelize.define('XueshengyonghuModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shoujihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机号'
	},
	mima: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '密码'
	},
	nicheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '昵称'
	},
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	touxiang: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '头像'
	},
	youxiang: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '邮箱'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'xueshengyonghu'
})

export default XueshengyonghuModel
