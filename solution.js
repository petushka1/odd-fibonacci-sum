function fib(num){
  var sum=2;
  var arr=[1,1];
  let i=1;
  while(arr[i]<=num){
    i++;
    arr[i]=arr[i-1]+arr[i-2];
    if(arr[i]%2>0){
      sum=sum+arr[i];
    }
  }
  return sum - arr[arr.length-1]
}
