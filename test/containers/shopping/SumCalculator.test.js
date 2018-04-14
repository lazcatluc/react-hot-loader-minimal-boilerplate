import SumCalculator from '../../../src/containers/shopping/SumCalculator'

it('should compute sums restricted to second decimal', () => {
  expect(SumCalculator([{value: "10"}, {value: "1.02"}, {value: "124.82"}, {value: "908.8"}])).toEqual(1044.64);
});
