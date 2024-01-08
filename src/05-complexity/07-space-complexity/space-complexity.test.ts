import {
  add,
  createArray,
  createMatrix,
  findPower,
  findSum,
} from "./space-complexity";

test("Space Complexity: O(1) Time Complexity: O(1)", () => {
  const test1MemoryStart = process.memoryUsage();
  add(1, 2);
  const test1MemoryEnd = process.memoryUsage();
  const test1MemoryDifference = {
    rss: test1MemoryEnd.rss - test1MemoryStart.rss,
    heapTotal: test1MemoryEnd.heapTotal - test1MemoryStart.heapTotal,
    heapUsed: test1MemoryEnd.heapUsed - test1MemoryStart.heapUsed,
    external: test1MemoryEnd.external - test1MemoryStart.external,
  };
  console.log(test1MemoryDifference);
});

test("Space Complexity: O(n) Time Complexity: O(n)", () => {
  const test2MemoryStart = process.memoryUsage();
  createArray(1000);
  const test2MemoryEnd = process.memoryUsage();

  const test2MemoryDifference = {
    rss: test2MemoryEnd.rss - test2MemoryStart.rss,
    heapTotal: test2MemoryEnd.heapTotal - test2MemoryStart.heapTotal,
    heapUsed: test2MemoryEnd.heapUsed - test2MemoryStart.heapUsed,
    external: test2MemoryEnd.external - test2MemoryStart.external,
  };
  console.log(test2MemoryDifference);
});

test("Space Complexity: O(n^2) Time Complexity: O(n^2)", () => {
  const test3MemoryStart = process.memoryUsage();
  createMatrix(1000);
  const test3MemoryEnd = process.memoryUsage();

  const test3MemoryDifference = {
    rss: test3MemoryEnd.rss - test3MemoryStart.rss,
    heapTotal: test3MemoryEnd.heapTotal - test3MemoryStart.heapTotal,
    heapUsed: test3MemoryEnd.heapUsed - test3MemoryStart.heapUsed,
    external: test3MemoryEnd.external - test3MemoryStart.external,
  };
  console.log(test3MemoryDifference);
});

test("Space Complexity: O(log n) Time Complexity: O(log n)", () => {
  const test4MemoryStart = process.memoryUsage();
  findPower(2, 100);
  const test4MemoryEnd = process.memoryUsage();

  const test4MemoryDifference = {
    rss: test4MemoryEnd.rss - test4MemoryStart.rss,
    heapTotal: test4MemoryEnd.heapTotal - test4MemoryStart.heapTotal,
    heapUsed: test4MemoryEnd.heapUsed - test4MemoryStart.heapUsed,
    external: test4MemoryEnd.external - test4MemoryStart.external,
  };
  console.log(test4MemoryDifference);
});

test("Space Complexity: O(1) Time Complexity: O(n)", () => {
  const test5MemoryStart = process.memoryUsage();
  findSum([1, 2, 3, 4, 5]);
  const test5MemoryEnd = process.memoryUsage();

  const test5MemoryDifference = {
    rss: test5MemoryEnd.rss - test5MemoryStart.rss,
    heapTotal: test5MemoryEnd.heapTotal - test5MemoryStart.heapTotal,
    heapUsed: test5MemoryEnd.heapUsed - test5MemoryStart.heapUsed,
    external: test5MemoryEnd.external - test5MemoryStart.external,
  };
  console.log(test5MemoryDifference);
});
