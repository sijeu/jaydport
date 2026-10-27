$(document).ready(function(){
// click btn
    $("#clickbtn").click(function(){
        $("#messgae").text("You clicked the button!")
        $(this).css("bacjground","#343b1b" )
    })

    //hide
    $("#hidebtn").click(function(){
        $("#message").text("Student Profile is hidden.")
        $("#profile").hide("slow")
    })
    
    $("#shwbtn").click(function(){
        $("#profile").show("slow")
        $("#message").text("Student Profile is Showing!.")
    })

    //mouse enter
    $("#clickbtn").mouseleave(function(){
        $("#message").text("Your mouse left the button.")
    })
    
    $("#course").change(function(){
        $("#studentcourse").text($(this).val())
    })

    $("#message").text(
        "Course changed to " + $(this).val()
    )


    //0dd rows
    $("#oddbtn").click(function(){
        $("#table tr")
        .removeClass("odd even")

        $("table tr:odd").addClass("odd")

        $("#message").text(
            "Odd rows applied!"
        )
    })

      //Even rows
    $("#evenbtn").click(function(){
        $("#table tr")
        .removeClass("odd even")

        $("table tr:even").addClass("even")

        $("#message").text(
            "Even rows applied!"
        )
    })

})

