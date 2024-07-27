var engMarks = document.querySelector ('#engMarks')
var mathMarks = document.querySelector ('#mathMarks')
var islMarks = document.querySelector ('#islMarks')
var urduMarks = document.querySelector ('#urduMarks')
var totalMarks = 400
var grade;
var obtained = document.querySelector ('#obtained')
var percent = document.querySelector ('#percent')
var yourGrade = document.querySelector ('#yourGrade')
function showResult () {
    if (+engMarks.value > 100 || +mathMarks.value > 100 || +islMarks.value > 100 || +urduMarks.value > 100){
        alert ('Entered Marks should be less than or equal to 100')
        obtained.innerHTML = 'Nil'
        percent.innerHTML = 'Nil'
        yourGrade.innerHTML = 'Nil'
    } else {
        var obtainedMarks = (+engMarks.value) + (+mathMarks.value) + (+islMarks.value) + (+urduMarks.value)
        var percentage = (obtainedMarks/totalMarks) * 100
        if (percentage >= 80) {
            grade = 'A+'
        }else if (percentage >= 70){
            grade = 'A'
        }else if (percentage >= 60){
            grade = 'B'
        } else {
            grade = 'fail'
        }
    obtained.innerHTML = obtainedMarks
    percent.innerHTML = percentage+'%'
    yourGrade.innerHTML = grade
    }
    return [obtainedMarks,percentage,grade]
}
