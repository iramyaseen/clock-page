        // Black themes javaScript code
        setInterval(setClock , 1000)
        const hourHand = document.querySelector('[data-hour-hand]');
        const minuteHand = document.querySelector('[data-minute-hand]');
        const secondHand = document.querySelector('[data-second-hand]');
        function setClock(){
            const currentDate = new Date()
            const secondRation = currentDate.getSeconds() / 60
            const minutesRation = (secondRation + currentDate.getMinutes()) / 60
            const hourRation = (minutesRation + currentDate.getHours()) / 12
            setRotation(secondHand , secondRation)
            setRotation(minuteHand , minutesRation)
            setRotation(hourHand , hourRation)
        }
        function setRotation(element , rotationRation){
            element.style.setProperty('--rotation' , rotationRation * 360)
        }
        setClock()
    // 