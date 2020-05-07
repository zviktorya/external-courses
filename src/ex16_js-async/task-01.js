function fetch(url, options) {
    let resolve;
    let reject;
    let promise = new Promise(function(res, rej) {
        resolve = res;
        reject = rej;
    });
    let xhr = new XMLHttpRequest();

    if (options && options.method.toUpperCase() === 'POST') {
        xhr.open('POST', url, true);
        xhr.send(options.body);
    } else {
        xhr.open('GET', url, true);
        xhr.send();
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            reject({
                status: xhr.status,
                message: xhr.statusText
            })
        } else {
            resolve(xhr.responseText);
        }
    };

    return promise;
}

module.exports = fetch;