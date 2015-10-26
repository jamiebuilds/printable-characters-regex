import test from 'ava';
import printableCharactersRegex from './';

test('Valid Characters', t => {
	t.true(printableCharactersRegex.test('@bc123!'));
	t.end();
});

test('Invalid Characters', t => {
  t.true(printableCharactersRegex.test('@bc123!'));
  t.end();
});
