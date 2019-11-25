module.exports = performance = (iterations, func, ...params) => {
    const start = new Date()

    for (let i = 0; i < iterations; i++) {
        func(...params)
    }

    const finish = new Date()

    return (finish - start) / 1000
}