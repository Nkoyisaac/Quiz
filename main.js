//1 - create away to store data
let survey = [
    {
        ques: 'question1',
        ans: [ "option1", "option2", "option3"]
    },
    {
        ques : "question2",
        ans : ["option1", "option2", "option3"]

    },
    {
        ques : "question3",
        ans : ["option1", "option2", "option3"]

    }

];
//2 - create a function to display the survey ques and ans
function displaySurvey(){
    let optionsDiv = document.getElementById("question");


    for(let i = 0; i < survey.length; i++){
        //3 -test loop
        console.log(survey[i]);
        //5 - creating the element or node
        //5.1- creating the <h3> element
        let questionDiv = document.createElement("h3");

        //5.2- displaying questions using innerHTML
        questionDiv.innerHTML = survey[i < survey.length].ans;
        //5.3 -Appending questions to the <div id="questions"></div>
        optionsDiv.appendChild(questionDiv);
    }


}
//call the fuction
displaySurvey();
