import renderer from 'react-test-renderer';
import InsideInfo from '../components/InsideInfo';

describe('Home component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <InsideInfo />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
