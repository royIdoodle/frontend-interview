# 黄油相机前端面试

## Case1: 异步任务队列

假设有一个数组 tasks: Promise[]（每一项都是一个 Promise 的数组）

实现一个方法 `function execute(tasks: Promise[]): Promise<any[]>`，该方法将 tasks 内的任务**依次**执行，并返回一个数组包含执行结果（以执行顺序排序）

<pre>
限制：
不添加任何依赖，仅使用 Promise，不使用 Generator 或 async
</pre>
