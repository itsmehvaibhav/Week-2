const datas = [
    { name: "vaibhav", profile: "senior developer" },
    { name: "yash", profile: "senior developer" },
];

function getdata() {
    setTimeout(() => {
        let display = "";
        datas.forEach((data, index) => {
            display += `<li>${data.name} - ${data.profile}</li>`;
        });
        console.log(display);
    }, 1000);
} // display for all value of datas it take a time in 1sec

function createnayadata(v) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(v);
            let error = true;
            if (!error) {
                resolve();
            } else {
                reject("kuch accha nhi chel rha ");
            }
        }, 2000);
    });
} // get a create a new value add to datas in 2sec

// createnayadata({ name: "prakhar railway ", profile: "govt job wala" })
//     .then(getdata)
//     .catch((err) => console.log(err));

async function start() {
    await createnayadata({ name: "prakhar railway ", profile: "govt job wala" });
    getdata();
}
start();