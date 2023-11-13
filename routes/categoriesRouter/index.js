const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();
const randomPeople = (limit = 10) => {
  const people = Array.from({ length: limit }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  }));
};

router.get('/', (req, res) => {
  const { size } = req.query;
  const people = randomPeople(size);
  res.json(people);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const people = randomPeople().find((people) => people.id == id);
  res.json(people);
});

module.exports = router;
