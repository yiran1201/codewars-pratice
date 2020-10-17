## stack

- it is a data structure based on last in first out

```js
[1, 2, 3, 4, 5, 6, 7];
```

- as example 7 是最后一个 push 进去的，所以也是第一个可以 access 的元素

```js
class Stack extends Array{} //这样我们可以用push and pop 的方法
constructor(...elems){// super and this -> []; 为啥可以替换
super(..elem)
}

pop(){
  if(this.length===0) throw new Error ('nothing to pop!')
  super.pop()  //this指的是里面的array
}

peek(){
  if(this.length===0) throw new Error ('Stack is empty')
  return this[this.length-1] //this指的是里面的array
}

const s= new Stack(1,2,3)// 可以得到Stack [1,2,3]
s.push(100) //可以得到Stack[1,2,3,100]
s.pop() //100 out
s.peek() // 3
```
