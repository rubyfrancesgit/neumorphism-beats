console.log('linked :)');

$(document).ready(function(){

    function master(){

        // function keyPress(key){
        //     if(key.keyCode == '82'){
        //         // alert('R has been pressed');
        //         $('body').css('background-color', '#A5FAFF')
        //     }
        // }

        // function keyLifted(key){
        //     if(key.keyCode == '49'){
        //         alert('key 1 clicked');
        //     }
        // }

        // window.addEventListener('keydown', keyPress, false);
        // window.addEventListener('keyup', keyLifted, false);


        function padsDown(key){
            let colours = ['#FDE5B9','#B5EFE0','#B0D9F3','#D8B4E2','#FF9BC5','#FF9798'];
            let randomColour = colours[Math.floor(Math.random() * colours.length)];
            console.log(randomColour);

            const beatPad = document.querySelectorAll('.pad');

            if(key.keyCode == '49'){
                beatPad[0].style.boxShadow="inset 2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";

                $('.1').css('background-color', randomColour)
            }

            if(key.keyCode == '50'){
                beatPad[1].style.boxShadow="inset 2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";
                
                $('.2').css('background-color', randomColour)
            }

            if(key.keyCode == '51'){
                beatPad[2].style.boxShadow="inset 2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";
                
                $('.3').css('background-color', randomColour)
            }

            if(key.keyCode == '52'){
                beatPad[3].style.boxShadow="inset 2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";
                
                $('.4').css('background-color', randomColour)
            }
        }

        function padsUp(key){
            const beatPad = document.querySelectorAll('.pad');

            if(key.keyCode == '49'){
                beatPad[0].style.boxShadow="2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";

                let audio = new Audio('./sounds/snare-808.wav');

                audio.play();

                $('.1').css('background-color', '#f9f9f9');
            }

            if(key.keyCode == '50'){
                beatPad[1].style.boxShadow="2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";

                let audio = new Audio('./sounds/kick-heavy.wav');

                audio.play();

                $('.2').css('background-color', '#f9f9f9');
            }

            if(key.keyCode == '51'){
                beatPad[2].style.boxShadow="2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";

                let audio = new Audio('./sounds/hihat-808.wav');

                audio.play();

                $('.3').css('background-color', '#f9f9f9');
            }

            if(key.keyCode == '52'){
                beatPad[3].style.boxShadow="2px 2px 10px 0 rgba(0, 0, 0, .15), -2px -2px 10px 0 rgba(255, 255, 255, 1)";

                let audio = new Audio('./sounds/hihat-acoustic01.wav');

                audio.play();

                $('.4').css('background-color', '#f9f9f9');
            }
        }




        window.addEventListener('keydown', padsDown, false);
        window.addEventListener('keyup', padsUp, false);
    }
    master();



});