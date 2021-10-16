import renderer from 'react-test-renderer';
import BackButton from '../components/BackButton';

describe('BackButton component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <BackButton handleSelect={() => {}} />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
