"use strict";

require("babel/register")

//////////////////////////////////////////////////////////////////

var zeroString = function(arr){
	return arr.map(function(v) {
        if (v.toString().length < 2) {
            return v = '0' + v.toString()
        } else {
            return v
        }
    }).join(':')
}

var findClock = function() {
    var container = document.querySelector('.container')

    var date = new Date()
    var currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()]
    //create colorScale, scalable for use in rgb or hex
    var range = [24, 60, 60]
    var colorScale = currentTime.map(function(v, i) {
        return Math.floor(v / range[i] * 255)
    })
    //convert colorScale into hex notation
    var hexColor = colorScale.map(function(v){
    	return v.toString(16).toUpperCase()
    })
    hexColor = zeroString(hexColor)
    var color = `#${hexColor.replace(/:/g, '')}`
    container.style['background'] = color

    container.querySelector("hr").width = `${((currentTime[2] / range[2]) * 100)}%`

    currentTime = zeroString(currentTime)
    container.querySelector(".time").innerHTML = currentTime
    container.querySelector(".hex").innerHTML = hexColor
}


setInterval(findClock, 1000)
