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
    }, 5000);
} // display for all value of datas it take a time in 1sec

function createnayadata(v, callback) {
    setTimeout(() => {
        datas.push(v);
        callback();
    }, 2000);
} // get a create a new value add to datas in 2sec
getdata();
createnayadata({ name: "prakhar railway ", profile: "govt job wala" }, getdata);