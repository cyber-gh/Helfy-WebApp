const checkLog = (props) => {
    if (!props.logged){
        props.history.push("/");
    }
}

export default {
    checkLog
}