import renderer from 'react-test-renderer';
import Logos from '../components/Logos';

describe('Logos component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Logos />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
