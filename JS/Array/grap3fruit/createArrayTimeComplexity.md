# Array 생성 속도 비교

```
array fill:  6
array from:  169
array spread:  70

array fill:  7
array from:  169
array spread:  74

array fill:  7
array from:  148
array spread:  66
```

fill은 정적인 값 하나로 채우지만 가장 빠르고,  
spread는 new Array(개수)로 생성하는데. 이것도 빠른것 같다..  
from이 가장 느린데, 아무래도 여러 형태로 반환할 수 있어서 그런듯?
