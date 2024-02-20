 var libButton = document.getElementById('lib-button');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            var adverb = document.getElementById("adverb")
            var adjective = document.getElementById("adjective")
            var food = document.getElementById("food")
            var price = document.getElementById("price")
            var emotion = document.getElementById("emotion")
            
            storyDiv.innerHTML = "You walk up to the counter and  "+ adverb.value + " order a pizza with extra  " + adjective.value + " " + food.value + ". You glance down at the recipe and notice your pizza came out to be "+ price.value + " dollars. You are " + emotion.value + " about your order." ;
        };
        libButton.addEventListener('click', libIt);