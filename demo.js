const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, 'server', 'app.env'),
});
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { Faker, uk } = require('@faker-js/faker');

const faker = new Faker({
  locale: [uk],
});

function RandomUser() {
  this.name = faker.internet.userName();
  this.email = faker.internet.email();
  this.phone = `+38${faker.phone.number().replaceAll(/\D/g, '')}`;
}

(
  async () => {
    try {
      axios.defaults.baseURL = `http://localhost:${process.env.PORT}/api/v1`;
      axios.defaults.headers.common['Authorization'] = `Bearer ${await jwt.sign({}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })}`;

      console.group('API DEMO');

      const createUserUrl = `/add-user`;
      console.group(`creating new user: POST ${createUserUrl}`);
      const { data: createdUser, ...createdUserRes } = await axios.post(createUserUrl, new RandomUser());
      console.log(`${createdUserRes.status}: ${createdUserRes.statusText}`);
      console.log(createdUser);
      console.groupEnd();


      const getUserUrl = `/get-user/${createdUser.id}`;
      console.group('requesting created user: GET');
      const getUserRes = await axios.get(getUserUrl);
      console.log(`${getUserRes.status}: ${getUserRes.statusText}`);
      console.log(getUserRes.data);
      console.groupEnd();
      console.groupEnd();
      console.groupEnd();
    } catch (e) {
      console.group('SOMETHING WENT WRONG');
      console.error(e);
      console.groupEnd();
    }
  }
)();
