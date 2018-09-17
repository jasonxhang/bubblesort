// describe('Bubble Sort', function(){
//   beforeAll(function () {
//     spyOn(window, 'swap').and.callThrough();
//   });
//   it('expect [3, 2, 1] to call swap 3 times', function () {
//     bubbleSort([3, 2, 1]);
//     expect(window.swap.calls.count()).toEqual(3);
//   });

//   it('handles an empty array', function(){
//     expect(bubbleSort([]) ).toEqual( [] );
//   });

//   it('handles a single item array', function(){
//     expect(bubbleSort([1])).toEqual( [1]);
//   });

//   it('handles a multi-item unsorted array', function(){
//     expect(bubbleSort([5, 3, 2, 1, 6])).toEqual( [1, 2, 3, 5, 6]);
//   });

//   it('handles a pre-sorted array', function(){
//     expect(bubbleSort([2, 4, 6])).toEqual( [2, 4, 6]);
//   });


// });

describe("Split Array function", function(){
  it('is able to split an array into two halves', function(){
    expect(split([1, 2, 3, 4])).toEqual([[1,2],[3,4]]);
  })

  it('splitting odd number array results in more numbers in first half', function(){
    expect(split([1, 2, 3, 4, 5])).toEqual([[1,2,3],[4,5]]);
  })

});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
  })
});


describe('MergeSort function', function(){
  it('is able to merge sort an array', function(){
    expect(mergeSort([3,6,2,4,1,5,7,9,8])).toEqual([1,2,3,4,5,6,7,8,9]);
  })
});
