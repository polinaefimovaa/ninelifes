$(document).ready(function(){
    // начало
    $(".t0").click(function() {
        if ($(this).hasClass("exist")) {
            $(this).removeClass("exist");
            $(".main").removeClass("opac"); 
            $(".t0").remove();
        }
    });
    // улыбка
    $(".mirror").click(function(){
        if ($(".smile").hasClass("exist")) {
            $(".smile").removeClass("exist");
            $(".smile").addClass("none");
            }
        else if ($(".smile").hasClass("none")) {
                $(".smile").removeClass("none");
                $(".smile").addClass("exist");
            }
    });
    // наполнение душа
    $(".shower").click(function(){
        if ($(".t1").hasClass("none") && !$(".water").hasClass("stop")) {
            $(".t1").removeClass("none");
            $(".t1").addClass("exist");
        }   
    });
    let h1;
    $(".t1").click(function(){
        if ($(this).hasClass("exist")) {
            $(this).removeClass("exist");
            $(this).remove();
            h1 = parseInt($(".water").height());
            $(".water").addClass("stop"); 
            $(".water").css('height', `${h1}`);
        }
    });
    $(".water").click(function(){
        if ($(".water").hasClass("stop")) {
            h1 -= 20;
            $(".water").css('height', `${h1}`);
        }
    });
    // менять цвет обоев
    $(".attic").click(function(){
        if ($(".attic").hasClass("a_pink")) {
        $(".attic").removeClass("a_pink");
        $(".attic").addClass("a_blue");
        }
        else if ($(".attic").hasClass("a_blue")) {
            $(".attic").removeClass("a_blue");
            $(".attic").addClass("a_green");
        }
        else if ($(".attic").hasClass("a_green")) {
            $(".attic").addClass("a_pink");
            $(".attic").removeClass("a_green");
        }
    });
    // менять цвет книжного шкафа
    $(".bookshelf").click(function(){
        if ($(".bookshelf").hasClass("b_pink")) {
        $(this).removeClass("b_pink");
        $(this).addClass("b_blue");
        }
        else if ($(".bookshelf").hasClass("b_blue")) {
            $(this).removeClass("b_blue");
            $(this).addClass("b_green");
        }
        else if ($(".bookshelf").hasClass("b_green")) {
            $(this).addClass("b_pink");
            $(this).removeClass("b_green");
        }
    });
    // менять цвет книг
    $(".books").click(function(){
        if ($(".books").hasClass("b1_pink")) {
        $(this).removeClass("b1_pink");
        $(this).addClass("b1_blue");
        }
        else if ($(".books").hasClass("b1_blue")) {
            $(this).removeClass("b1_blue");
            $(this).addClass("b1_green");
        }
        else if ($(".books").hasClass("b1_green")) {
            $(this).addClass("b1_pink");
            $(this).removeClass("b1_green");
        }
    });
    // менять цвет стула
    $(".chair").click(function(){
        if ($(".chair").hasClass("c_pink")) {
        $(this).removeClass("c_pink");
        $(this).addClass("c_blue");
        }
        else if ($(".chair").hasClass("c_blue")) {
            $(this).removeClass("c_blue");
            $(this).addClass("c_green");
        }
        else if ($(".chair").hasClass("c_green")) {
            $(this).addClass("c_pink");
            $(this).removeClass("c_green");
        }
    });
    // анимация с коробкой
    let bb = 0;
    let cc = 0;
    $(".box").click(function(){
        if ($(".t2").hasClass("none")) {
        $(".t2").removeClass("none");
        cc = 1;
        }
    });
    $(".t2").click(function(){
        if (!$(".t2").hasClass("none")) {
            $(".te1").remove();
            $(".thebox").remove();
            $(".t2").remove();
            $(".box").addClass("fall");
            bb = 1;
        }
    });
    // let b_1 = parseInt($(".box").top());
    $(".box").click(function(){
        if (bb == 1 && cc == 1) { 
            $(".box").addClass("stop");
            element = $('.box');
            let t = element.css('top');   
            let l =  element.css('margin-left');   
            $(".box").css('top', `${t}`);
            $(".box").css('margin-left', `${l}`);
            $(".box").removeClass("fall");
            $( ".box" ).draggable({connectWith: ".boxes"});
        }
    });
    // менять цвет обоев в спальне
    $(".bedroom").click(function(){
        if ($(".bedroom").hasClass("bed_pink")) {
        $(this).removeClass("bed_pink");
        $(this).addClass("bed_blue");
        }
        else if ($(".bedroom").hasClass("bed_blue")) {
            $(this).removeClass("bed_blue");
            $(this).addClass("bed_green");
        }
        else if ($(".bedroom").hasClass("bed_green")) {
            $(this).addClass("bed_pink");
            $(this).removeClass("bed_green");
        }
    });
    // менять цвет лампы
    $(".lamp").click(function(){
        if ($(".lamp").hasClass("l_pink")) {
        $(this).removeClass("l_pink");
        $(this).addClass("l_blue");
        }
        else if ($(".lamp").hasClass("l_blue")) {
            $(this).removeClass("l_blue");
            $(this).addClass("l_green");
        }
        else if ($(".lamp").hasClass("l_green")) {
            $(this).addClass("l_pink");
            $(this).removeClass("l_green");
        }
    });
    // менять цвет 1 картины
    $(".painting1").click(function(){
        if ($(".painting1").hasClass("p1_pink")) {
        $(this).removeClass("p1_pink");
        $(this).addClass("p1_blue");
        }
        else if ($(".painting1").hasClass("p1_blue")) {
            $(this).removeClass("p1_blue");
            $(this).addClass("p1_green");
        }
        else if ($(".painting1").hasClass("p1_green")) {
            $(this).addClass("p1_pink");
            $(this).removeClass("p1_green");
        }
    });
    // менять цвет 2 картины
    $(".painting2").click(function(){
        if ($(".painting2").hasClass("p2_pink")) {
        $(this).removeClass("p2_pink");
        $(this).addClass("p2_blue");
        }
        else if ($(".painting2").hasClass("p2_blue")) {
            $(this).removeClass("p2_blue");
            $(this).addClass("p2_green");
        }
        else if ($(".painting2").hasClass("p2_green")) {
            $(this).addClass("p2_pink");
            $(this).removeClass("p2_green");
        }
    });
    // менять цвет 3 картины
    $(".painting3").click(function(){
        if ($(".painting3").hasClass("p3_pink")) {
        $(this).removeClass("p3_pink");
        $(this).addClass("p3_blue");
        }
        else if ($(".painting3").hasClass("p3_blue")) {
            $(this).removeClass("p3_blue");
            $(this).addClass("p3_green");
        }
        else if ($(".painting3").hasClass("p3_green")) {
            $(this).addClass("p3_pink");
            $(this).removeClass("p3_green");
        }
    });
    // полка
    $(".shelf").click(function(){
        if ($(".shelf").hasClass("s_blue")) {
            $(this).removeClass("s_blue");
            $(this).addClass("s_green");
        }
        else {
            $(this).addClass("s_blue");
            $(this).removeClass("s_green");
        }
    });
    // обои в гостиной с котиком
    $(".living_room").click(function(){
        if ($(".living_room").hasClass("lr_pink")) {
        $(this).removeClass("lr_pink");
        $(this).addClass("lr_blue");
        }
        else if ($(".living_room").hasClass("lr_blue")) {
            $(this).removeClass("lr_blue");
            $(this).addClass("lr_green");
        }
        else if ($(".living_room").hasClass("lr_green")) {
            $(this).addClass("lr_pink");
            $(this).removeClass("lr_green");
        }
    });
    // картина в гостиной
    $(".painting4").click(function(){
        if ($(".painting4").hasClass("p4_pink")) {
        $(this).removeClass("p4_pink");
        $(this).addClass("p4_blue");
        }
        else if ($(".painting4").hasClass("p4_blue")) {
            $(this).removeClass("p4_blue");
            $(this).addClass("p4_green");
        }
        else if ($(".painting4").hasClass("p4_green")) {
            $(this).addClass("p4_pink");
            $(this).removeClass("p4_green");
        }
    });
    // телевизор
    $(".tv").click(function(){
        if ($(".noise").hasClass("none")) {
            $(".noise").removeClass("none");
        }
        if ($(".tv").hasClass("tv_pink")) {
        $(this).removeClass("tv_pink");
        $(this).addClass("tv_blue");
        }
        else if ($(".tv").hasClass("tv_blue")) {
            $(this).removeClass("tv_blue");
            $(this).addClass("tv_green");
        }
        else if ($(".tv").hasClass("tv_green")) {
            $(this).addClass("tv_pink");
            $(this).removeClass("tv_green");
        }
    });
    // часы
    // книжные полки
    $(".shelf3").click(function(){
        if ($(".shelf3").hasClass("sh1_blue")) {
        $(this).removeClass("sh1_blue");
        $(this).addClass("sh1_green");
        }
        else if ($(".shelf3").hasClass("sh1_green")) {
            $(this).removeClass("sh1_green");
            $(this).addClass("sh1_blue");
        }
    });
    $(".shelf2").click(function(){
        if ($(".shelf2").hasClass("sh2_blue")) {
        $(this).removeClass("sh2_blue");
        $(this).addClass("sh2_green");
        }
        else if ($(".shelf2").hasClass("sh2_green")) {
            $(this).removeClass("sh2_green");
            $(this).addClass("sh2_blue");
        }
    });
    // лампа
    $(".lamp3").click(function(){
        if ($(".lamp3").hasClass("l3_pink")) {
        $(this).removeClass("l3_pink");
        $(this).addClass("l3_blue");
        }
        else if ($(".lamp3").hasClass("l3_blue")) {
            $(this).removeClass("l3_blue");
            $(this).addClass("l3_green");
        }
        else if ($(".lamp3").hasClass("l3_green")) {
            $(this).addClass("l3_pink");
            $(this).removeClass("l3_green");
        }
    });
    // кухня обои
    $(".kitchen").click(function(){
        if ($(".kitchen").hasClass("k_pink")) {
        $(this).removeClass("k_pink");
        $(this).addClass("k_blue");
        }
        else if ($(".kitchen").hasClass("k_blue")) {
            $(this).removeClass("k_blue");
            $(this).addClass("k_green");
        }
        else if ($(".kitchen").hasClass("k_green")) {
            $(this).addClass("k_pink");
            $(this).removeClass("k_green");
        }
    });
    // картина
    $(".painting5").click(function(){
        if ($(".painting5").hasClass("p5_pink")) {
        $(this).removeClass("p5_pink");
        $(this).addClass("p5_blue");
        }
        else if ($(".painting5").hasClass("p5_blue")) {
            $(this).removeClass("p5_blue");
            $(this).addClass("p5_green");
        }
        else if ($(".painting5").hasClass("p5_green")) {
            $(this).addClass("p5_pink");
            $(this).removeClass("p5_green");
        }
    });
    // стол
    $(".table1").click(function(){
        if ($(".table1").hasClass("t_pink")) {
        $(this).removeClass("t_pink");
        $(this).addClass("t_blue");
        }
        else if ($(".table1").hasClass("t_blue")) {
            $(this).removeClass("t_blue");
            $(this).addClass("t_green");
        }
        else if ($(".table1").hasClass("t_green")) {
            $(this).addClass("t_pink");
            $(this).removeClass("t_green");
        }
    });
    // тарелка
    $(".plate").click(function(){
        if ($(".plate").hasClass("pl_pink")) {
        $(this).removeClass("pl_pink");
        $(this).addClass("pl_blue");
        }
        else if ($(".plate").hasClass("pl_blue")) {
            $(this).removeClass("pl_blue");
            $(this).addClass("pl_pink");
        }
    });
    // 1 столешница
    $(".tablekitchen1").click(function(){
        if ($(".tablekitchen1").hasClass("tk1_pink")) {
        $(this).removeClass("tk1_pink");
        $(this).addClass("tk1_blue");
        }
        else if ($(".tablekitchen1").hasClass("tk1_blue")) {
            $(this).removeClass("tk1_blue");
            $(this).addClass("tk1_green");
        }
        else if ($(".tablekitchen1").hasClass("tk1_green")) {
            $(this).addClass("tk1_pink");
            $(this).removeClass("tk1_green");
        }
    });
    // 2 столешница
    $(".tablekitchen2").click(function(){
        if ($(".tablekitchen2").hasClass("tk2_pink")) {
        $(this).removeClass("tk2_pink");
        $(this).addClass("tk2_blue");
        }
        else if ($(".tablekitchen2").hasClass("tk2_blue")) {
            $(this).removeClass("tk2_blue");
            $(this).addClass("tk2_green");
        }
        else if ($(".tablekitchen2").hasClass("tk2_green")) {
            $(this).addClass("tk2_pink");
            $(this).removeClass("tk2_green");
        }
    });
    // фон с электрическим щитком
    $(".electric").click(function(){
        if ($(this).hasClass("e_pink")) {
        $(this).removeClass("e_pink");
        $(this).addClass("e_blue");
        }
        else if ($(this).hasClass("e_blue")) {
            $(this).removeClass("e_blue");
            $(this).addClass("e_green");
        }
        else if ($(this).hasClass("e_green")) {
            $(this).addClass("e_pink");
            $(this).removeClass("e_green");
        }
    });
    let ans = 0;
    // трубы с щитком
    $(".pipes").click(function(){
        if ($(this).hasClass("pipes_pink")) {
        $(this).removeClass("pipes_pink");
        $(this).addClass("pipes_blue");
        }
        else if ($(this).hasClass("pipes_blue")) {
            $(this).removeClass("pipes_blue");
            $(this).addClass("pipes_green");
        }
        else if ($(this).hasClass("pipes_green")) {
            $(this).addClass("pipes_pink");
            $(this).removeClass("pipes_green");
        }
        if ($(".t7").hasClass("none")) {
            $(".t7").removeClass("none");
            }
    });
    // труба с щитком справа
    $(".pipe").click(function(){
        if ($(this).hasClass("pipe_pink")) {
        $(this).removeClass("pipe_pink");
        $(this).addClass("pipe_blue");
        }
        else if ($(this).hasClass("pipe_blue")) {
            $(this).removeClass("pipe_blue");
            $(this).addClass("pipe_green");
        }
        else if ($(this).hasClass("pipe_green")) {
            $(this).addClass("pipe_pink");
            $(this).removeClass("pipe_green");
        }
    });
    $(".t7").click(function(){
        if (!$(".t7").hasClass("none")) {
        $(".t7").remove();
        ans = 1;
        }
    });
    $(".lightning5").click(function(){
        if ($(this).hasClass("stop")) {
        $(".lightning5").removeClass("stop");
        $(".lightning5").addClass("none");
        }
    });
    $(".lightning5").click(function(){
        if (ans == 1) {
        $(".lightning5").removeClass("lii1");
        $(".lightning5").addClass("stop");
        }
    });
    $(".lightning4").click(function(){
        if ($(this).hasClass("stop")) {
        $(".lightning4").removeClass("stop");
        $(".lightning4").addClass("none");
        }
    });
    $(".lightning4").click(function(){
        if (ans == 1) {
        $(".lightning4").removeClass("lii2");
        $(".lightning4").addClass("stop");
        }
    });
    $(".lightning3").click(function(){
        if ($(this).hasClass("stop")) {
        $(".lightning3").removeClass("stop");
        $(".lightning3").addClass("none");
        }
    });
    $(".lightning3").click(function(){
        if (ans == 1) {
        $(".lightning3").removeClass("lii1");
        $(".lightning3").addClass("stop");
        }
    });
    $(".lightning2").click(function(){
        if ($(this).hasClass("stop")) {
        $(".lightning2").removeClass("stop");
        $(".lightning2").addClass("none");
        }
    });
    $(".lightning2").click(function(){
        if (ans == 1) {
        $(".lightning2").removeClass("lii2");
        $(".lightning2").addClass("stop");
        }
    });
    $(".lightning1").click(function(){
        if ($(this).hasClass("stop")) {
        $(".lightning1").removeClass("stop");
        $(".lightning1").addClass("none");
        }
    });
    $(".lightning1").click(function(){
        if (ans == 1) {
        $(".lightning1").removeClass("lii1");
        $(".lightning1").addClass("stop");
        }
    });
    // фон для камина
    $(".fireplace").click(function(){
        if ($(this).hasClass("f_pink")) {
        $(this).removeClass("f_pink");
        $(this).addClass("f_blue");
        }
        else if ($(this).hasClass("f_blue")) {
            $(this).removeClass("f_blue");
            $(this).addClass("f_green");
        }
        else if ($(this).hasClass("f_green")) {
            $(this).addClass("f_pink");
            $(this).removeClass("f_green");
        }
    });
    // картина на камине
    $(".painting6").click(function(){
        if ($(this).hasClass("p6_pink")) {
        $(this).removeClass("p6_pink");
        $(this).addClass("p6_blue");
        }
        else if ($(this).hasClass("p6_blue")) {
            $(this).removeClass("p6_blue");
            $(this).addClass("p6_green");
        }
        else if ($(this).hasClass("p6_green")) {
            $(this).addClass("p6_pink");
            $(this).removeClass("p6_green");
        }
    });
    // кот
    $(".cat").click(function(){
        if ($(".t3").hasClass("none")) {
        $(".t3").removeClass("none");
        }
    });
    $(".t3").click(function(){
        if (!$(".t3").hasClass("none")) {
        $(".t3").remove();
        }
        $( ".cat" ).draggable({connectWith: ".chair1"});
    });
    // часы
    $(".person2").click(function(){
        if ($(".t5").hasClass("none")) {
        $(".t5").removeClass("none");
        }
    });   
    $(".t5").click(function(){
        if (!$(".t5").hasClass("none")) {
        $(".t5").remove();
        }
        $(".clock1").addClass("clock_1");
        $(".clock").addClass("cloock");
    });
    $(".clock1").click(function(){
        if ($(this).hasClass("clock_1")) {
        $(this).addClass("stop1");
        $(".clock").addClass("stop1");
        $(".person2").addClass("left1");
        }
    });
    });
// дрова
$( function() {
    $( ".firewood" ).draggable();
    $( ".fire" ).droppable({
      drop: function( event, ui ) {
        $(".firewood").addClass( "disapear" );
        $(".firewood").remove();
        $(".fire").addClass( "fiire" );

      }
    });
    let ans = 0;
    $(".fire").click(function(){
        if ($(this).hasClass("fiire") && $(".t8").hasClass("none")) {
            $(".t8").removeClass("none");
        }
    });
    $(".t8").click(function(){
        anss = 1
        if (!$(".t8").hasClass("none")) {
        $(".t8").remove();
        }
    });
    $(".fire").click(function(){
        if (anss == 6) {
            $(".fire").remove();
        }
    });
    $(".fire").click(function(){
        if (anss == 5) {
            $(".fire").css('background', `url("images/fire5.svg")`);
            $(".fire").css('background-repeat', "no-repeat");
            $(".fire").css('background-size', "cover");
            anss += 1;
        }
    });
    $(".fire").click(function(){
        if (anss == 4) {
            $(".fire").css('background', `url("images/fire4.svg")`);
            $(".fire").css('background-repeat', "no-repeat");
            $(".fire").css('background-size', "cover");
            anss += 1;
        }
    });
    $(".fire").click(function(){
        if (anss == 3) {
            $(".fire").css('background', `url("images/fire3.svg")`);
            $(".fire").css('background-repeat', "no-repeat");
            $(".fire").css('background-size', "cover");
            anss +=1 ;
        }
    });
    $(".fire").click(function(){
        if (anss == 2) {
            $(".fire").css('background', `url("images/fire2.svg")`);
            $(".fire").css('background-repeat', "no-repeat");
            $(".fire").css('background-size', "cover");
            anss += 1;
        }
    });
    $(".fire").click(function(){
        if (anss == 1) {
            $(".fire").removeClass("fiire");
            $(".fire").css('background', `url("images/fire1.svg")`);
            $(".fire").css('background-repeat', "no-repeat");
            $(".fire").css('background-size', "cover");
            anss += 1;
        }
    });
    // каша
    $(".saucepan").click(function(){
        if ($(".t6").hasClass("none")) {
            $(".t6").removeClass("none");
        }
    });
    $(".t6").click(function(){
        if (!$(".t6").hasClass("none")) {
            $(".saucepan").addClass("kasha");
            $(".t6").remove();
        }
    });
    let sauce = 0;
    $(".saucepan").click(function(){
        if (sauce == 5) {
            $(".saucepan").css('background', `url("images/saucepan.svg")`);
            $(".saucepan").css('background-size', "cover");
        }
    });
    $(".saucepan").click(function(){
        if (sauce == 4) {
            $(".saucepan").css('background', `url("images/saucepan1.svg")`);
            $(".saucepan").css('background-size', "cover");
            sauce += 1; 
        }
    });
    $(".saucepan").click(function(){
        if (sauce == 3) {
            $(".saucepan").css('background', `url("images/saucepan2.svg")`);
            $(".saucepan").css('background-size', "cover");
            sauce += 1; 
        }
    });
    $(".saucepan").click(function(){
        if (sauce == 2) {
            $(".saucepan").css('background', `url("images/saucepan3.svg")`);
            $(".saucepan").css('background-size', "cover");
            sauce += 1; 
        }
    });
    $(".saucepan").click(function(){
        if (sauce == 1) {
            $(".saucepan").css('background', `url("images/saucepan4.svg")`);
            $(".saucepan").css('background-size', "cover");
            sauce += 1; 
        }
    });
    $(".saucepan").click(function(){
        if ($(this).hasClass("kasha")) {
            $(this).removeClass("kasha");
            $(".saucepan").css('background', `url("images/saucepan5.svg")`);
            $(".saucepan").css('background-size', "cover");
            sauce = 1;
        }
    });
    let a1 = 0;
    $(".thief").click(function(){
        if ($(".t4").hasClass("none")) {
            $(".t4").removeClass("none");
        }
    });
    $(".t4").click(function(){
        if (!$(".t4").hasClass("none")) {
            $(".t4").remove();
            a1 = 1
        }
    });

    $(".thief").click(function(){
        if (a1 == 5) {
            $(".thief").remove();
        }
        if (a1 == 4) {
            $(".thief").css('opacity', '0.2');
            a1 += 1;
        }
        if (a1 == 3) {
            $(".thief").css('opacity', '0.4');
            a1 += 1;
        }
        if (a1 == 2) {
            $(".thief").css('opacity', '0.6');
            a1 += 1;
        }
        if (a1 == 1) {
            $(".thief").css('opacity', '0.8');
            a1 += 1;
        }

    });

  });
    