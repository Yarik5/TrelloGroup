function isEmpty(Object) {
    for (let key in Object) {
        
        let schedule = {};

        console.log ( isEmpty(schedule) );

        schedule["8:30"] = "get up";

        console.log ( isEmpty(schedule) );
        return false;
    }
    return true;
}