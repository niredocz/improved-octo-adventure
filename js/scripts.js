$(".txtb input").on("focus",function(){
    $(this).addClass("focus");
  });

    $(".txtb input").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
  });

  $(".txtb textarea").on("focus",function(){
    $(this).addClass("focus");
  });

    $(".txtb textarea").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
  });

  $(".txtb-2 input").on("focus",function(){
    $(this).addClass("focus");
  });

    $(".txtb-2 input").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
  });