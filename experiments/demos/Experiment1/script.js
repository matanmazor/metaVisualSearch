// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "meta_vs_color_shape",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "meta_VS_color_shape",
    "description": "",
    "repository": "",
    "contributors": "Michael Kriechbaumer\nFelix Henninger"
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.bonus = 0;
}
      },
      "title": "Instructions",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Ch1\u003EYour task\u003C\u002Fh1\u003E\n    \u003Cp\u003EThis experiment has three parts.\u003C\u002Fp\u003E\n    \u003Cp\u003E It involves searching for things and estimating the difficulty of different search tasks. \u003C\u002Fp\u003E\n    \u003Cp\u003E In the last two parts of the experiment you will earn points. If your final point count is at the top 30% of our participants, you will receive a bonus of $1.5 \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions1a",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Ch1\u003EPart 1\u003C\u002Fh1\u003E\n    \u003Cp\u003EIn the first part, you will find a target hidden among distractors.\u003C\u002Fp\u003E\n    \u003Cp\u003EFirst, a gray cross will appear on the screen. Look at the cross. Then, the target and distractors will appear. When you spot the target, press \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E as quickly as possible. \u003C\u002Fp\u003E \n    \u003Cp\u003E Upon pressing the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E, the target and distractors\n    will be replaced by up to 5 numbers. To move to the next trial, type in the number that replaced the target.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions1b",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n   \u003Cp\u003EBe quick to press the spacebar. There's no time pressure on pressing the right number key.\u003C\u002Fp\u003E\n\n    \u003Cp\u003ELet's start!\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "set_size": 7,
          "display_function": 1,
          "trial_number": "1"
        },
        {
          "set_size": 7,
          "display_function": 1,
          "trial_number": "2"
        },
        {
          "set_size": 7,
          "display_function": 1,
          "trial_number": "3"
        },
        {
          "set_size": 7,
          "display_function": 1,
          "trial_number": "4"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": ""
      },
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
  window.demoRTs=[]

},
        "end": function anonymous(
) {
this.data.accuracy = window.accuracy;
this.data.RT = window.RT;
}
      },
      "title": "Visual search intro",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
// Enumerate all possible positions and rotations.
// Because we place stimuli on a 10x10 grid, there
// are 100 possible positions.
const positions = Array(100).fill().map((_, i) => i)
const rotations = [0, 45, 90, 135, 180, 225, 270, 315]

// If a target is present, we need to generate 
// one additional item
const setSize = this.parameters.set_size+1
this.parameters.numbers_order =  this.random.sample(
  [1,2,3,4,5], 5, false)

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const item_rotations = this.random.sample(
  rotations, setSize, true // *with* replacement
)

this.parameters.item_rotations = item_rotations;




}
        },
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "400",
                "height": "400",
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "transparent"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "files": {},
            "parameters": {},
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "Fixation",
            "timeout": "1000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "400",
                "height": "400",
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "transparent"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": "-75",
                "angle": 0,
                "width": 124.52,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Find the ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "files": {},
            "parameters": {},
            "responses": {
              "": ""
            },
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
window.draw_stimulus(
  this,
  125,
  0,
  1,
  this.parameters.display_function,
  50,-75
)


}
            },
            "viewport": [
              800,
              600
            ],
            "title": "targetSpec",
            "timeout": "1000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "400",
                "height": "400",
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "transparent"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "files": {},
            "parameters": {},
            "responses": {
              "keydown(Space)": ""
            },
            "messageHandlers": {
              "before:prepare": function anonymous(
) {

// Render the items one by one
this.parameters.item_positions.forEach((position, i) => {
  
  window.draw_stimulus(
    this,
    position,
    this.parameters.item_rotations[i],
    i==0,
    this.parameters.display_function
  )
})


},
              "after:end": function anonymous(
) {
window.demoRT = (this.state.duration/1000).toPrecision(2)
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "400",
                "height": "400",
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "transparent"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "files": {},
            "parameters": {},
            "responses": {
              "keypress(1)": "1",
              "keypress(2)": "2",
              "keypress(3)": "3",
              "keypress(4)": "4",
              "keypress(5)": "5"
            },
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
// Stimulus generation --------------------------------------------

var items_to_display = Math.min(5,this.parameters.item_positions.length)
for (i=0; i<items_to_display; i++) {
  window.draw_numbers(
    this,
    this.parameters.item_positions[i],
    0,
    String(this.parameters.numbers_order[i]), 'black'
  )
}
},
              "after:end": function anonymous(
) {
if (this.state.correct) {
  window.msg = 'This one took you\n' + window.demoRT + ' seconds.'
} else {
  window.msg = 'You got this one wrong.\nTry to be as accurate \nas possible.'
};

window.correct = this.state.correct;

if (this.state.correct & window.demoRT<4) {
  window.demoRTs.push(window.demoRT)
}
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "numbers",
            "correctResponse": "${parameters.numbers_order[0]}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "0",
                "top": "0",
                "angle": 0,
                "width": 400,
                "height": 400,
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "transparent"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -75,
                "angle": 0,
                "width": 209.09,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${window.msg}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "'Quicksand', sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "files": {},
            "parameters": {},
            "responses": {
              "": ""
            },
            "messageHandlers": {},
            "viewport": [
              800,
              600
            ],
            "title": "feedback",
            "timeout": "${window.correct?2000:5000}",
            "tardy": true
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions2a",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Ch1\u003EPart 2\u003C\u002Fh1\u003E\n    \u003Cp\u003EGood, you finished the first part!\u003C\u002Fp\u003E\n    \u003Cp\u003ENow, you will estimate how long it will take you to find various targets when mixed with different numbers of various distractors.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions2b",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003E In each trial, you will estimate how long it will take you to find a target when mixed with other distractors presented in a square. Imagine that the square will be thoroughly shaken after we add the target to it, so the specific locations and orientations of the target and distractors are likely to change. Only the identity and number of distractors are relevant here.\u003C\u002Fp\u003E\n    \u003Cp\u003EBe as accurate as possible.\u003C\u002Fp\u003E\n    \u003Cp\u003EIn the third part, you will perform these searching tasks, and receive points only if you find the target as fast as your estimate, or faster. The number of points offered for each estimate will appear inside the circle.\u003C\u002Fp\u003E\n     \u003Cp\u003ETo help you, small black arrows will mark your search times from the first part of the experiment. \u003C\u002Fp\u003E\n    \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": "0",
          "top": "0",
          "angle": 0,
          "width": 400,
          "height": 400,
          "stroke": "#aaaaaa",
          "strokeWidth": 2,
          "fill": "transparent"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -237,
          "angle": 0,
          "width": 454.66,
          "height": 48.82,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "How long (in seconds) will it take you to find the      \nwhen mixed with this set of distractors?",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "'Quicksand', sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {

// Enumerate all possible positions and rotations.
// Because we place stimuli on a 10x10 grid, there
// are 100 possible positions.
const positions = Array(100).fill().map((_, i) => i)
const rotations = [0, 45, 90, 135, 180, 225, 270, 315]

// If a target is present, we need to generate 
// one additional item
const setSize = 3

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const item_rotations = this.random.sample(
  rotations, setSize, true // *with* replacement
)

this.parameters.item_rotations = item_rotations;

// Render the items one by one
this.parameters.item_positions.forEach((position, i) => {
  if (!(i+1==0)) {window.draw_stimulus(
    this,
    position,
    this.parameters.item_rotations[i],
    0,
    1, NaN, NaN, i
    
  )}
})


window.draw_stimulus(
  this,
  125,
  0,
  1,
  1,
  223,-250
)

},
        "run": function anonymous(
) {
// Create a pointer to the current component,
// to be used inside of p5.js
var component = this
window.first = true;
window.makeS = (component) => {
  var estimate = 0;
  var bonus = 0;
  let mouseBoolean = false

  // p5.js initialization function
  return (p) => {

    let x = 100
    let y = 100

    function drawBackground() {
        //blue bar
        p.fill(255)
        p.stroke(0)
        p.rect(p.width/4, p.height*0.9, p.width/2, 20)
        p.noStroke()
        
        // axes labels
        p.fill(0)
        p.textSize(15)
        p.textStyle(p.NORMAL);
        p.textFont('Quicksand')
        p.text('seconds', p.width/2, p.height*0.9 +35)
        p.push()
        p.translate(p.width*0.3-50, p.height*0.5)
        p.rotate(-Math.PI/2)
        p.text('points', 0,0)
        p.pop()
        p.stroke(153);
        p.line(p.width*0.3, p.height*0.8, 
              p.width*0.3, p.height*0.2);
        p.noStroke()



        //ruler
        for (i = 1; i < 10; i++) {
          p.rect(p.width/4 + i * (p.width / 20), p.height*0.9, 1, -3)
          p.text(i/2.5, p.width/4 + i * (p.width / 20), p.height*0.9 - 10)
        }

        if (window.first) {
          //previous RTs
          for (RT of window.demoRTs) {
            var center_x = p.width/4+p.width/8*RT
            p.triangle(center_x-4, p.height*0.9+30, center_x+4, p.height*0.9+30,center_x, p.height*0.9+25,)
          }
        }
    }

    p.setup = function () {
      var cnv = p.createCanvas(
        component.options.canvas.width / window.devicePixelRatio,
        component.options.canvas.height / window.devicePixelRatio
      )
      p.noStroke();
      p.textAlign(p.CENTER,p.CENTER);


      // Make it so that HTML positions for the canvases
      // are calculated relative to the container surrounding them
      component.options.canvas.parentElement.style.position = 'relative'

      // Set the canvas dimensions relative to the container
      // surrounding it.
      cnv.style('display', 'block')
      cnv.style('position', 'absolute')
      cnv.style('left', '0')
      cnv.style('top', '0')
      cnv.style('z-index', '20')
      drawBackground();
    }

    p.draw = function() {
      
      if (mouseOverSlider()) {
        p.clear()
        drawBackground();
      }
      
      function estimate2width (estimate) {
        return estimate*(p.width/8)
      }
      
      function mouseOverSlider() {
        return p.mouseX>p.width/4 &&
                p.mouseX<p.width*(3/4) &&
                p.mouseY>p.height*0.9-20 &&
                p.mouseY<p.height*0.9+40
      }
      

      if (mouseOverSlider()) {
        estimate = Math.max((8*p.mouseX/(p.width))-2,0.1);
        bonus = 10/Math.sqrt(estimate);
        
        if (p.mouseIsPressed) {
            mouseBoolean = true
        }

        //draw bonus
        p.fill(0);
        p.ellipse(p.width*0.3, p.height*0.8-(0.6*bonus*p.height/32), 72, 72);
        p.fill(255);
        p.ellipse(p.width*0.3, p.height*0.8-(0.6*bonus*p.height/32), 70, 70);
        p.fill(0);
        p.textSize(28)
        // p.textStyle(p.BOLD);
        p.textFont("Permanent Marker");
        p.text(bonus.toFixed(1), p.width*0.3, p.height*0.8-(0.6*bonus*p.height/32))
      }

      //red bar
      p.fill(0)
      p.rect(p.width/4, p.height*0.9, estimate2width(estimate), 20)

      if (mouseBoolean && !p.mouseIsPressed && mouseOverSlider()) {
        mouseBoolean = false
        //move to next component
        component.respond(estimate)
        //close sketch
        p.remove()
      }
    }
  }
}

// p5.js instantiation
// (note that the library script has been added
// to the HTML page header via the study-wide options)
let myp5 = new p5(window.makeS(component), this.options.el)
},
        "after:end": function anonymous(
) {
const calculateBonus = function(x) {
  return 10/Math.sqrt(x);
}
window.demoEstimate = this.state.response*1000;
window.demoBonus = calculateBonus(this.state.response);
window.first = false

}
      },
      "viewport": [
        800,
        600
      ],
      "title": "EstimationDemo"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {
        "run": function anonymous(
) {
var feedback = document.getElementById("feedback").innerHTML
feedback = feedback.replace(/_estimate_/g,String((window.demoEstimate/1000).toPrecision(2)))
feedback = feedback.replace(/_num_points_/g, String(window.demoBonus.toPrecision(2)))
document.getElementById("feedback").innerHTML = feedback;
}
      },
      "title": "estimation_feedback",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp id = 'feedback'\u003EFor this first estimation, you estimated that it will take you \u003Cb\u003E_estimate_\u003C\u002Fb\u003E seconds to find 1 \u003Ci\u003ET\u003C\u002Fi\u003E among 3 randomly positioned \u003Ci\u003EL\u003C\u002Fi\u003E's. \u003Cbr\u002F\u003E\n    If you will find the \u003Ci\u003ET\u003C\u002Fi\u003E in _estimate_ seconds or less in part 3 of the experiment, you will get \u003Cb\u003E_num_points_\u003C\u002Fb\u003E points. Otherwise, you will get zero. Your final number of points will determine whether you get a bonus or not. \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial_number": 1,
          "set_size": 1,
          "display_function": 4
        },
        {
          "trial_number": 2,
          "set_size": 5,
          "display_function": 4
        },
        {
          "trial_number": 3,
          "set_size": 15,
          "display_function": 4
        },
        {
          "trial_number": 4,
          "set_size": 30,
          "display_function": 4
        },
        {
          "trial_number": 5,
          "set_size": 1,
          "display_function": 2
        },
        {
          "trial_number": 6,
          "set_size": 5,
          "display_function": 2
        },
        {
          "trial_number": 7,
          "set_size": 15,
          "display_function": 2
        },
        {
          "trial_number": 8,
          "set_size": 30,
          "display_function": 2
        },
        {
          "trial_number": 9,
          "set_size": 1,
          "display_function": 3
        },
        {
          "trial_number": 10,
          "set_size": 5,
          "display_function": 3
        },
        {
          "trial_number": 11,
          "set_size": 15,
          "display_function": 3
        },
        {
          "trial_number": 12,
          "set_size": 30,
          "display_function": 3
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.estimates = {};
window.trialBonuses ={}; 
window.timeToEstimate = {};
},
        "end": function anonymous(
) {
this.data.estimates = window.estimates;
this.data.trialBonuses = window.trialBonuses; 
this.data.timeToEstimate = window.timeToEstimate;
}
      },
      "title": "meta search task",
      "shuffleGroups": [],
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "rect",
            "left": "0",
            "top": "0",
            "angle": 0,
            "width": 400,
            "height": 400,
            "stroke": "#aaaaaa",
            "strokeWidth": 2,
            "fill": "transparent"
          },
          {
            "type": "i-text",
            "left": 0,
            "top": -237,
            "angle": 0,
            "width": 454.66,
            "height": 48.82,
            "stroke": null,
            "strokeWidth": 1,
            "fill": "black",
            "text": "How long (in seconds) will it take you to find the      \nwhen mixed with this set of distractors?",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontSize": "20",
            "fontFamily": "'Quicksand', sans-serif",
            "lineHeight": 1.16,
            "textAlign": "center"
          }
        ],
        "files": {},
        "parameters": {},
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
// Enumerate all possible positions and rotations.
// Because we place stimuli on a 10x10 grid, there
// are 100 possible positions.
const positions = Array(100).fill().map((_, i) => i)
const rotations = [0, 45, 90, 135, 180, 225, 270, 315]

// If a target is present, we need to generate 
// one additional item
const setSize = this.parameters.set_size


// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const item_rotations = this.random.sample(
  rotations, setSize, true // *with* replacement
)

this.parameters.item_rotations = item_rotations;

// Render the items one by one
this.parameters.item_positions.forEach((position, i) => {
  if (!(i+1==this.parameters.target_number)) {window.draw_stimulus(
    this,
    position,
    this.parameters.item_rotations[i],
    0,
    this.parameters.display_function, NaN, NaN, i
    
  )}
})

window.draw_stimulus(
  this,
  125,
  0,
  1,
  this.parameters.display_function,
  223,-250
)

},
          "run": function anonymous(
) {
// Create a pointer to the current component,
// to be used inside of p5.js
var component = this

// p5.js instantiation
// (note that the library script has been added
// to the HTML page header via the study-wide options)
let myp5 = new p5(window.makeS(component), this.options.el)
},
          "after:end": function anonymous(
) {
 const calculateBonus = function(x) {
  return 10/Math.sqrt(x);
}
  window.estimates[this.parameters.trial_number] = 
  this.state.response*1000;
  window.trialBonuses[this.parameters.trial_number] = 
  calculateBonus(this.state.response)
  window.timeToEstimate[this.parameters.trial_number] = 
  this.state.duration;
}
        },
        "viewport": [
          800,
          600
        ],
        "title": "Estimation"
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button": "continue",
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions3",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n  \u003Ch1\u003EPart 3\u003C\u002Fh1\u003E\n    \u003Cp\u003EYou finished the second part!\u003C\u002Fp\u003E\n    \u003Cp\u003EIn the third and last part of the experiment, you will perform three trials of each visual search task for which you gave a time estimate. Try to be as fast and accurate as possible, as your bonus depends on this! \n      Just like in the first part, there's no time pressure on pressing the number key, but only on pressing the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E.\n      \n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial_number": 1,
          "set_size": 1,
          "display_function": 4
        },
        {
          "trial_number": 2,
          "set_size": 5,
          "display_function": 4
        },
        {
          "trial_number": 3,
          "set_size": 15,
          "display_function": 4
        },
        {
          "trial_number": 4,
          "set_size": 30,
          "display_function": 4
        },
        {
          "trial_number": 5,
          "set_size": 1,
          "display_function": 2
        },
        {
          "trial_number": 6,
          "set_size": 5,
          "display_function": 2
        },
        {
          "trial_number": 7,
          "set_size": 15,
          "display_function": 2
        },
        {
          "trial_number": 8,
          "set_size": 30,
          "display_function": 2
        },
        {
          "trial_number": 9,
          "set_size": 1,
          "display_function": 3
        },
        {
          "trial_number": 10,
          "set_size": 5,
          "display_function": 3
        },
        {
          "trial_number": 11,
          "set_size": 15,
          "display_function": 3
        },
        {
          "trial_number": 12,
          "set_size": 30,
          "display_function": 3
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.accuracy = {}
window.time = {}
window.counter = 0;
},
        "end": function anonymous(
) {
this.data.accuracy = window.accuracy;
this.data.RT = window.time;
this.data.bonus = window.bonus;
}
      },
      "title": "Visual search task",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Loop",
        "files": {},
        "parameters": {},
        "templateParameters": [
          {
            "repetition": "1",
            "": ""
          },
          {
            "repetition": "2",
            "": ""
          },
          {
            "repetition": "3",
            "": ""
          }
        ],
        "sample": {
          "mode": "sequential"
        },
        "responses": {
          "": ""
        },
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
window.accuracy[this.parameters.trial_number] = [];
window.time[this.parameters.trial_number] = [];
}
        },
        "title": "inner loop",
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
// Enumerate all possible positions and rotations.
// Because we place stimuli on a 10x10 grid, there
// are 100 possible positions.
const positions = Array(100).fill().map((_, i) => i)
const rotations = [0, 45, 90, 135, 180, 225, 270, 315]

// If a target is present, we need to generate 
// one additional item
const setSize = this.parameters.set_size+1
this.parameters.numbers_order =  this.random.sample(
  [1,2,3,4,5], 5, false)

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const item_rotations = this.random.sample(
  rotations, setSize, true // *with* replacement
)

this.parameters.item_rotations = item_rotations;

}
          },
          "title": "Trial",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "rect",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": "400",
                  "height": "400",
                  "stroke": "#aaaaaa",
                  "strokeWidth": 2,
                  "fill": "transparent"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#aaaaaa",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "'Quicksand', sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": -25,
                  "top": "-75",
                  "angle": 0,
                  "width": 124.52,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "Find the ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "32",
                  "fontFamily": "'Quicksand', sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
window.draw_stimulus(
  this,
  125,
  0,
  1,
  this.parameters.display_function,
  50,-75
)


}
              },
              "viewport": [
                800,
                600
              ],
              "title": "Fixation",
              "timeout": "1000"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "rect",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": "400",
                  "height": "400",
                  "stroke": "#aaaaaa",
                  "strokeWidth": 2,
                  "fill": "transparent"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#aaaaaa",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "'Quicksand', sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keydown(Space)": ""
              },
              "messageHandlers": {
                "before:prepare": function anonymous(
) {

// Render the items one by one
this.parameters.item_positions.forEach((position, i) => {
    window.draw_stimulus(
      this,
      position,
      this.parameters.item_rotations[i],
      i==0,
      this.parameters.display_function,
      NaN, NaN, i
    )
})



},
                "after:end": function anonymous(
) {
window.time[this.parameters.trial_number].push(this.state.duration);
}
              },
              "viewport": [
                800,
                600
              ],
              "title": "Stimulus"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "rect",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": "400",
                  "height": "400",
                  "stroke": "#aaaaaa",
                  "strokeWidth": 2,
                  "fill": "transparent"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#aaaaaa",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "'Quicksand', sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(1)": "1",
                "keypress(2)": "2",
                "keypress(3)": "3",
                "keypress(4)": "4",
                "keypress(5)": "5"
              },
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
// Stimulus generation --------------------------------------------

var items_to_display = Math.min(5,this.parameters.item_positions.length)
for (i=0; i<items_to_display; i++) {
  window.draw_numbers(
    this,
    this.parameters.item_positions[i],
    0,
    String(this.parameters.numbers_order[i]), 'black'
  )
}
},
                "after:end": function anonymous(
) {
window.accuracy[this.parameters.trial_number].push(this.state.correct);

window.correct = this.state.correct

if (window.correct) {
  window.bonus += window.trialBonuses[this.parameters.trial_number];
}
}
              },
              "viewport": [
                800,
                600
              ],
              "title": "numbers",
              "correctResponse": "${parameters.numbers_order[0]}"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "rect",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": "400",
                  "height": "400",
                  "stroke": "#aaaaaa",
                  "strokeWidth": 2,
                  "fill": "#ffffff"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "#aaaaaa",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "'Quicksand', sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Inter-trial interval",
              "timeout": "${window.correct?1000:3000}",
              "tardy": true
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": -25,
                  "top": -75,
                  "angle": 0,
                  "width": 645.72,
                  "height": 120.05,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "You finished ${window.counter}\n out of a total of 36 search trials. \nPress Space when you are ready to continue.",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "32",
                  "fontFamily": "'Quicksand', sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Space)": "space"
              },
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
window.counter+=1
window.skip = window.counter!=18;
}
              },
              "viewport": [
                800,
                600
              ],
              "title": "trialsLeft",
              "skip": "${ window.skip }",
              "tardy": true
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n    \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Ch1\u003EThank you.\u003C\u002Fh1\u003E\n    \u003Cp id = 'bonus_msg'\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EWe will appreciate any thoughts or comments you have about the experiment. You can use the box below to share them with us. Thank you!\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cdiv style=\"text-align:center\"\u003E\n\u003Cform\u003E\n   \u003Ctextarea name=\"message\" rows=\"10\" cols=\"30\"\u003EYour feedback here.\u003C\u002Ftextarea\u003E\n  \u003Cbr\u003E\n  \u003Cinput id=\"submit\" type=\"submit\"\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E",
      "files": {},
      "parameters": {},
      "responses": {
        "click submit": "submit"
      },
      "messageHandlers": {
        "run": function anonymous(
) {
this.data.accuracy = window.accuracy;
this.data.RT = window.RT;
this.data.bonus = window.bonus;
document.getElementById("bonus_msg").innerHTML = "You collected "+ String(Math.round(window.bonus))+ " points. You will get a bonus of 1.5$ if this is within the top 30% of our participants";

}
      },
      "title": "Form",
      "tardy": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Screen",
      "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n \u003Cmain\u003E\r\n   \u003Cp\u003E\u003Cstrong\u003EThe experiment is now complete.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n   \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-right\"\u003E\r\n  \u003Cp\u003EYou can now close the window\u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E",
      "timeout": "0"
    }
  ]
})

// Let's go!
study.run()