// initiate, middleware, terminate

function final(someInput, callback) {
    callback(`${someInput} final executed and ternimate..`)
}
function middleware(someInput, callback) {
    return final(`${someInput} by touched middelware `, callback)
}
function initiate() {
    const inputText = 'Some sample input';
    middleware(inputText, (result) => {
        console.log(result);
    })
}

initiate();