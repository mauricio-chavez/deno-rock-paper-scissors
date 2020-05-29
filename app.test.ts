import {
  assertEquals,
  assertThrows,
  assertArrayContains,
} from 'https://deno.land/std/testing/asserts.ts';
import { Result } from './enums.ts';
import { getComputerChoice, game } from './utils.ts';

Deno.test('checks draw results', () => {
  assertEquals(game('r', 'r'), Result.Draw);
  assertEquals(game('p', 'p'), Result.Draw);
  assertEquals(game('s', 's'), Result.Draw);
});

Deno.test('checks win results', () => {
  assertEquals(game('r', 's'), Result.Win);
  assertEquals(game('p', 'r'), Result.Win);
  assertEquals(game('s', 'p'), Result.Win);
});

Deno.test('checks lose results', () => {
  assertEquals(game('r', 'p'), Result.Lose);
  assertEquals(game('p', 's'), Result.Lose);
  assertEquals(game('s', 'r'), Result.Lose);
});

Deno.test('invalid arguments should throw an error', () => {
  assertThrows(
    () => game('wrong', 'also wrong'),
    TypeError,
    'Invalid arguments'
  );
});

Deno.test('getComputerChoice() should return "r", "p" or "s"', () => {
  assertArrayContains(['r', 'p', 's'], [getComputerChoice()]);
});
