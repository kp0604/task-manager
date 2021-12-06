const add = (taskObj) => {
    return {
        type: "add",
        payload: taskObj
    }
}
const addcom = (tasklist) => {
    return {
        type: "addcom",
        payload: tasklist
    }
}
const get = () => {
    return {
        type : "get"
    }
}
const getcom = () => {
    return {
        type : "getcom"
    }
}
const addsub = (sub) => {
    return {
        type: "addsub",
        payload: sub
        
    }
}
const togDone = (doneObj) => {
    return {
        type: "togDone",
        payload: doneObj
        
    }
}



export { add,get,addsub,togDone,addcom,getcom }