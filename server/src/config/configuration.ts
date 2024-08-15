import type { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as process from 'node:process';

export type AppConfig = {
  port: number;
  jwt: {
    secret: string | Buffer;
    expiresIn: string;
  };
  database: SequelizeModuleOptions;
};
export default (): AppConfig => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  database: {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    logging: true,
    autoLoadModels: true,
    synchronize: true,
  },
});
