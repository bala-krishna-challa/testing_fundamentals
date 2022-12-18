const fn = (impl = () => {}) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplemention = (mockImpl) => {
    impl = mockImpl;
  };
  return mockFn;
};

module.exports = {
  getWinner: fn((p1, p2) => p1),
};
