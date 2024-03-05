// prog to find number count from the given array

arr = [10,20,50,20,30,80,10,20,70,50,20,10]
obj={}
arr.forEach(item=>item in obj?obj[item]+=1:obj[item]=1)
console.log(obj);