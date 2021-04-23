var binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

var searchRange = function(nums, target) {
  const mid = binarySearch(nums, target);
  if (mid == -1) {
    return [-1, -1];
  } else {
    let first = mid;
    let last = mid;
    while (nums[first - 1] === target) {
      first--;
    }
    while (nums[last + 1] == target) {
      last++;
    }
    return [first, last];
  }
};
