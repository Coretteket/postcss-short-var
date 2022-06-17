const postcss = require('postcss')

const plugin = require('./')

async function run (input, output) {
  let result = await postcss([plugin()]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('handles simple custom prop', async () => {
  await run('a{ color: --blue; }', 'a{ color: var(--blue); }')
});

it('handles custom prop with other value', async () => {
  await run('a{ color: --blue #fff; }', 'a{ color: var(--blue) #fff; }')
});

it('handles multiple custom props', async () => {
  await run('a{ color: --blue --red; }', 'a{ color: var(--blue) var(--red); }')
});

it('handles custom prop in function', async () => {
  await run('a{ color: rgba(--blue); }', 'a{ color: rgba(var(--blue)); }')
});

it('handles multiple custom props in function', async () => {
  await run('a{ color: rgba(--blue, --red); }', 'a{ color: rgba(var(--blue), var(--red)); }')
});

it('does not handle custom prop definition', async () => {
  await run('a{ --blue: #fff; }', 'a{ --blue: #fff; }')
});
