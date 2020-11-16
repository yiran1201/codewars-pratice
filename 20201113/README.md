###时间复杂度

- 算法在运行中消耗时间
- log2 (n)< n < n^2

- O(1) 没有任何循环

```jsx
let i = 0;
i == 1;
```

- O(n) 这里面的代码执行了 n 次

```jsx
for (let i = 0; ilog 2*n  < n; i++) {
  console.log(i);
}
```

- O(n)*O(n)=O(n^2)

```jsx
for(let i=0;i<n;i++){
  for(let j=0; j<n;j++>){
  }
}
```

- O(logN) log 是以 2 为底数

```jsx
let i = 1;
while (i < n) {
  console.log(i);
  i *= 2;
}
```

### 空间复杂度

- 算法在运行中临时占用空间大小的量度 （占的内存多不多）

- O(1) 只申明了单个变量，单个变量占用的内存永远是 1

```jsx
let i = 0;
i == 1;
```

- O(n) 申明了 N 个值

```jsx
const list = [];
for (let i = 0; i < n; i++) {
  list.push(i);
}
```

- O(n^2) 二维数组 array 存储了 n^2 变量

```jsx
const matrix=[]
for(let i=0;i<n;i++){
  matrix.push([])
  for (let j=0;j<n<j++){
    matrix[i].push(j)
  }
}

```

### stack
- 后进先出
-  运用场景十进制转二进制， 判断字符串的括号知否有效，函数调用堆栈
