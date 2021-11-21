import Magician from '../Magician';
import Deamon from '../Daemon';

test('Test magician on min distace withaut stoned', () => {
  const poter = new Magician('Poter');
  poter.stoned = false;
  poter.distance = 1;
  poter.attack = 100;
  expect(poter.attack).toBe(100);
});

test('Test magician on max distace withaut stoned', () => {
  const poter = new Magician('Poter');
  poter.stoned = false;
  poter.distance = 10;
  poter.attack = 100;
  expect(poter.attack).toBe(10);
});

test('Test magician on max distace withaut stoned', () => {
  const poter = new Magician('Poter');
  poter.stoned = false;
  poter.distance = 11;
  poter.attack = 100;
  expect(poter.attack).toBe(0);
});

test('Test magician on min distace with stoned', () => {
  const poter = new Magician('Poter');
  poter.stoned = true;
  poter.distance = 2;
  poter.attack = 100;
  expect(poter.attack).toBe(85);
});

test('Test magician on max distace with stoned', () => {
  const poter = new Magician('Poter');
  poter.stoned = true;
  poter.distance = 11;
  poter.attack = 100;
  expect(poter.attack).toBe(0);
});

test('Test deamon on min distace without stoned', () => {
  const mort = new Deamon('Mort');
  mort.stoned = false;
  mort.distance = 1;
  mort.attack = 100;
  expect(mort.attack).toBe(100);
});

test('Test deamon on max distace without stoned', () => {
  const mort = new Deamon('Mort');
  mort.stoned = false;
  mort.distance = 10;
  mort.attack = 100;
  expect(mort.attack).toBe(10);
});

test('Test deamon on max distace without stoned', () => {
  const mort = new Deamon('Mort');
  mort.stoned = false;
  mort.distance = 11;
  mort.attack = 100;
  expect(mort.attack).toBe(0);
});

test('Test deamon on min distace with stoned', () => {
  const mort = new Deamon('Mort');
  mort.stoned = true;
  mort.distance = 2;
  mort.attack = 100;
  expect(mort.attack).toBe(85);
});

test('Test deamon on max distace with stoned', () => {
  const mort = new Deamon('Mort');
  mort.stoned = true;
  mort.distance = 11;
  mort.attack = 100;
  expect(mort.attack).toBe(0);
});
