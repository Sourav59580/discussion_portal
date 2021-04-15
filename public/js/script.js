// filter questions
$(document).ready(function () {
   $(".filter").on("input",function () {
       var value = $(this).val().toLowerCase();
       $(".question-area .question_item").filter(function (param) {  
           $(this).toggle($(this).find("h5").text().toLowerCase().indexOf(value)>-1)        
       })
       if($(".question-area .question_item:visible").length==0){
            $(".no_question_item").show();
       }else{
        $(".no_question_item").hide();
       }
     })
})

// new question form
$(document).ready(function(){
    $(".que_btn").click(function () {
        $(".right_form_container").fadeToggle();
      })
})