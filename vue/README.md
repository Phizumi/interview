#### difference between watch and watchEffect in vue3

1. watchEffect 会自动收集依赖，而 watch 则显示指定监听的数据
2. watchEffect 会立即执行一次，watch 不会
3. watchEffect 使用于简单场景，不需要额外配置，相当于默认开启 deep, immediate,
   watch 可以更精细地控制监听行为，如 deep, immediate, flush
