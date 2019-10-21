/**
 * 异步任务队列
 * */

export default function excute(tasks) {
	let resultList = []
	return tasks.reduce(
    (previousPromise, currentPromise) => previousPromise.then(() => {
		return new Promise(resolve => {
			let promise = typeof currentPromise === 'function'? currentPromise(): currentPromise;
			promise.then(result => {
				resultList.push(result)
				resolve()
			}).catch(() => {
				resultList.push(null)
				resolve()
			})
		})
	}),
    Promise.resolve()
	).then(last => resultList)
}
