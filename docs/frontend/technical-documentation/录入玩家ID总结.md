# 录入玩家ID总结

![](./input_player_id.png)


```
function stringToList(str) {
  return str.split(/[\n+,;]/g).map(val => val.trim()).filter(val => val);
}
```
