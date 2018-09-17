describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('expect [3, 2, 1] to call swap 3 times', function () {
    bubbleSort([3, 2, 1]);
    expect(window.swap.calls.count()).toEqual(3);
  });

  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect(bubbleSort([1])).toEqual( [1]);
  });

  it('handles a multi-item unsorted array', function(){
    expect(bubbleSort([5, 3, 2, 1, 6])).toEqual( [1, 2, 3, 5, 6]);
  });

  it('handles a pre-sorted array', function(){
    expect(bubbleSort([2, 4, 6])).toEqual( [2, 4, 6]);
  });


});
