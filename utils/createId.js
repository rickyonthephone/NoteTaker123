module.exports = (notesArr) => {
    for (let index = 0; index < notesArr.length; index++) {
        const element = notesArr[index];
        element.id = index+1
    }
    return notesArr
}