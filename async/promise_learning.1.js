let fa = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(1)
            resolve()
        }, 1000)
    })
}

let fb = function () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(2)
            resolve()
        }, 2000)
    })
}

async function c() {
    await fb();
    await fa();
}

c();