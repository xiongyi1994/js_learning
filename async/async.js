var resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

var resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 3000);
    });
};

var parallel = async function () {

    await Promise.all([
        (async () => await resolveAfter2Seconds())(),
        (async () => await resolveAfter1Second())()
    ]).then(() => {
        console.log(1)
    });
}

parallel();