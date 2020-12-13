const colors=["#b33a3a","#ff6700","#32cD32"]

export default (priority)=>{
    const level = ["High","Medium","low"]
    return{
        level:(level[priority-1]),
        color: colors[priority - 1]
    }
}