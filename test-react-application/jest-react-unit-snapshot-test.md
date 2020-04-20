# Unit Test

**FIRST** properties of good unit tests:

Fast, Isolated, Repeatable, Self-verifying, Timely.

## Fast

The slower the tests, the less often we'll run them. And there'll be more changes between test runs, which makes it harder to find problems when tests fail.

## Isolated

Each test should be independent of all other tests. It should set up what it needs, run the test, and verify the results. One assert per test. 

### AAA (Arrange Act Assert) notation

A test should be divided into three parts:

- Arrange
- Act
- Assert

Maybe there will be a `Restore` step at the end.

## Repeatable

Every test should either pass all the time, or fail all the time. Mock up external dependencies to avoid intermittently-failing tests.

## Self-verifying

Tests should verify their results automatically. Avoid involving human.

## Timely

TDD instead of TAD. But snapshot testing must be TAD.


# JavaScript Unit Test

Before, we need many dependencies to run a single react test.

- React TestUtil
- expect, assert library
- sinon
- js dom
- test runner, like mocha
- test coverage, like istanbul

Jest provides all you need for unit testing.

# Jest

Benefit:

- Performance: run test in parallel.
- Watch mode: make your experience of writing tests easier.
- Zero configuration: js dom, test runner, mocking library, test coverage library, assertion library.
- Less dependencies: a one-stop-shop for js unit testing.
- Greate itegration with Babel: `jest-babel` plugin.
- Snapshot testing.

## Snapshot testing

> Snapshot testing is a complement for conventional tests, not a replacement.

Classic assertion based tests are for testing clearly defined behavior that is expected to remain relatively stable.

Snapshot tests are for less defined behavior that may change often.

### History

Also known as `Gold Master Testing`. Gold master testing refers to capturing the result of a process, and then comparing future runs against the saved “gold master” (or known good) version to discover unexpected changes.

Gold master testing is good for legacy code. Rather than trying to specify all of the logical path through untest module, you can feed it a varied set of inputs and turn the outputs into automatically verifying tests. There's no guarantee the output are correct in this case, but at lease you can be sure they don't change.

Procee of `Gold Master Testing`:

1. Choose a set of inputs for the module or program.
2. Run the inputs through a known good version of the system, and store the outputs (gold masters).
3. When testing an update, run the same input through the new verison of the system and flag any variations.
4. For each variation, have a human determine whether or not the change is expected and desirable. If so, update the pesisted gold master.

### Usage

- Test React components
- Test Redux reducers
- Test API endpoints

### Pros

Snapshot tests is perfect for things that in past would have raised concerns for "overly brittle" tests that catch any regression but require constant updates, such as UI testing.

Snapshots in Jest are easy to write and effortless to update. And they provide a clear view of what has changed after each update. When testing a complex component, instead of picking critial parts, you can just capture a snapshot and any following update would procues updated snapshots to be compared with the previous one.

### Corns

Snapshot tests do not communicate the intention of the original test developer. They only provide the results without the processes. So they are not suitable for complicate logics. (???? In my opinion, snapshots could be the output of some complicate logic.)

Snapshot tests are more useful with a *healthy code review process*, such as using a dedicated code review tool like Github. Snapshot tests require large amount of human resource to confirm the udpates.

# Different testing strategies

Levels of strictness:

assert props/states < shallow snapshot < assert DOM < mount snapshot

- assert props/states: 

```javascript
expect(wrapper.props('lists')).toEqual(['item1', 'item2', 'item3'])
```

- shallow snapshot:

```javascript
expect(shallow(<ItemLists {...propsMock} />)).toMatchSnapshot()
```

- assert DOM: 

```javascript
expect(wrapper.find('li.list-item').length).toBe(3)
```

- mount snapshot:

```
expect(mount(<ItemLists {...propsMock} />)).toMatchSnapshot()
```

## Testing basic component rendering (dumb components)

```javascript
test('render a label', () => {
    const wrapper = shallow(<Label>Hello Jest!</Label>);
    expect(wrapper).toMatchSnapshot();
});
```

## Testing props

Sometimes you want to be more explicit and see real values in tests. In that case use Enzyme API with regular Jest assertions:

```javascript
test('render a document title', () => {
    const wrapper = shallow(
        <DocumentTitle title="Events" />
    );
    expect(wrapper.prop('title')).toEqual('Events');
});
```

In some cases you just can’t use snapshots. For example if you have random IDs or something like that:

```javascript
test('render a popover with a random ID', () => {
    const wrapper = shallow(
        <Popover>Hello Jest!</Popover>
    );
    expect(wrapper.prop('id')).toMatch(/Popover\d+/);
});
```

## Testing events

Simulate an event like click or change and then compare components to snapshots (shallow):

```javascript
test('render Markdown in preview mode', () => {
  const wrapper = shallow(
      <MarkdownEditor value="*Hello* Jest!" />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.find('[name="toggle-preview"]').simulate('click');

  expect(wrapper).toMatchSnapshot();
});
```

Instead of compoaring components to snapshots, sometimes it's concise to test the DOM element (mount):

```javascript
test('open a code editor', () => {
  const wrapper = mount(
      <Playground code={code} />
  );

  expect(wrapper.find('.ReactCodeMirror')).toHaveLength(0);

  wrapper.find('button').simulate('click');

  // We only care about the existence of .ReactCodeMirror.
  expect(wrapper.find('.ReactCodeMirror')).toHaveLength(1);
});
```

## Test callbacks (event handlers)

Use Jest's mock function to test the callbacks.

```javascript
test('pass a selected value to the onChange handler', () => {
    const value = '2';
    const onChange = jest.fn();
    const wrapper = shallow(
        <Select items={ITEMS} onChange={onChange} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('select').simulate('change', {target: { value }});

    expect(onChange).toBeCalledWith(value);
});
```

# Best Practice

1. Use detailed description to specify the intention of the snapshot.

Unlike assert based tests which shows clearly what is critical to test, snapshots does not communicate well the original developer's intention of the test. Use description to specify the most important thing under test.

2. 


# Video

snapshot testing is very fast with Jest watch mode.

# References

- [Testing with Jest Snapshots: First Impressions](https://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/)

- [Snapshot Testing: Use With Care](http://randycoulman.com/blog/2016/09/06/snapshot-testing-use-with-care/)

- [Gold Master Testing](https://codeclimate.com/blog/gold-master-testing/)

- [Unit Tests Are FIRST](https://pragprog.com/magazines/2012-01/unit-tests-are-first)

- [Getting Testy: Anti-Patterns](http://randycoulman.com/blog/2015/07/21/getting-testy-anti-patterns/)

- [Testing React components with Jest and Enzyme](https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f)

- [Testing React Applications](https://www.youtube.com/watch?v=59Ndb3YkLKA)
