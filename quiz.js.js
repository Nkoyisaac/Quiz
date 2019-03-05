/*document.write("java").innerHTML;
 
    var ques1 = ['what is the capital of norway?',"how much is 2 + 2?","who is the king of the   jungle?","what color is the sky?",
    "which planet is closer to the sun?"];

    var ans1 = ["A-Trondhein B-Bergen C-Oslo D-Stavanger","A-3 B-4 C-7 D-5","A-tiger B-leopard C-lion D-wolf",
    "A-blue B-yellow C-red D-black","A-Versus B-Mercury C-Mars D-Jupiter","A- B- C- D-",
    "A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-",
    "A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-","A- B- C- D-"];
    

    var quiz =function displayQuiz(){
      for(i = 0; i < quiz.lenght; i++ )
      return(this.ques1[i] + " " +ans1[i]);
      document.write(quiZ).innerHTML = displayQuiz();
    
    }*/
    

    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //SELECTORS

    let questionTag = document.getElementById('question');
    let pTag =  document.getElementsByTagName('p');











    let questionAnswer = [
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is this ?", answer:["this", "that", "where"]},
      { question: "Who is that ?", answer:["this", "that", "where"]}
      ];

    for(i=0;i<questionAnswer.length;i++){
      pTag[i].innerHTML = questionAnswer[i].question;
    }

      
    let rightAnswer = [
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah',
      'blah'
    ];
    
   
   
  
  
  

  
      
    
     
