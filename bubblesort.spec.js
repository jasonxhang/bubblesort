describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect(bubbleSort([1])).toEqual( [1]);
  });

  it('handles a multi-item unsorted array', function(){
    expect(bubbleSort([3, 2, 1])).toEqual( [1, 2, 3]);
  });

  it('handles a pre-sorted array', function(){
    expect(bubbleSort([2, 4, 6])).toEqual( [2, 4, 6]);
  });

});
