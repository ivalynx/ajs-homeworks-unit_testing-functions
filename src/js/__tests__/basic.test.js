import getStatusOfHealth from '../app';

test('should status healthy', () => {
  const result = getStatusOfHealth({ name: 'f', health: 80 });
  expect(result).toBe('healthy');
});


test('should status wounded', () => {
  const result = getStatusOfHealth({ name: 'f', health: 45 });
  expect(result).toBe('wounded');
});


test('should status critical', () => {
  const result = getStatusOfHealth({ name: 'f', health: 10 });
  expect(result).toBe('critical');
});
