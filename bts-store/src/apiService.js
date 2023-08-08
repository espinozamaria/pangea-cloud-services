export const getIP = () => {
    return new Promise(resolve => {
    fetch('/ip-address')
        .then(raw_response => raw_response.json())
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            console.log(err);
        });
    });
}


export const getRedact = (text) => {
    return new Promise(resolve => {
    fetch('/redact', {method: 'POST', body: JSON.stringify(text)})
        .then(raw_response => raw_response.json())
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            console.log(err);
        });
    });
}

