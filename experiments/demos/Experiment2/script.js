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
      "filePrefix": "omniglot_metavs",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "omniglot_metaVS",
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

const characters = Array(20).fill(1).map((x, y) => x + y+8)
const workers = Array(20).fill(1).map((x, y) => x + y)
//randomize order characters for each participant so that different
//participants run on different versions of the task.
window.characters = this.random.sample(characters, 20, false)
window.workers = this.random.sample(workers, 20, false)

this.data.characters = window.estimates;
this.data.workers = window.workers; 

}
      },
      "title": "Instructions",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EYour task\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EHello! This experiment has three parts.\u003C\u002Fp\u003E\n    \u003Cp\u003E It involves searching historical letters and estimating the difficulty of different search tasks. \u003C\u002Fp\u003E\n    \u003Cp\u003E In the last two parts of the experiment you will earn points. If your final point count is at the top 30% of our participants, you will receive a bonus of $1.5 \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
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
        "before:prepare": function anonymous(
) {
window.draw_stimulus = 
(component, position, rotation, target, display_function, 
costum_x=NaN, costum_y = NaN, serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y


  switch (display_function) {
    
    case 1:
    component.options.content.push({
      type: 'text',
      left: x, top: y, angle: rotation,
      text: target? 'T':'L',
      fontSize: 25,
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      fill: 'black'
    });
   
    break;
    case 2:
    component.options.content.push({
    type: 'rect',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: target? '#FF5733':'#16A085'
  });
  break;

   case 3:
    if (target) {
      var stype = 1;
    } else {
      var stype = 2+serial_number%3;
    }
    component.options.content.push({
    type: stype%2==0?'rect':'circle',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: stype>2? '#FF5733':'#16A085'
  });
  break;
  }
}

window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}


}
      },
      "title": "Instructions1a",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EPart 1\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EThe Alphabet of the Magi was invented 500 years ago by the Swiss physician, alchemist, and astrologer, Paracelsus. He used it to engrave the names of angels on talismans which he claimed could treat illnesses and provide protection.\u003C\u002Fp\u003E\n\n    \u003Cp\u003EIn the first part, you will find target letters from the Alphabet of the Magi hidden among distractors.\u003C\u002Fp\u003E\n    \u003Cp\u003EFirst, the target letter will appear on the screen. Remember it, as this is the letter you should find. Then, a gray cross will appear, and then the target and distractor letters will appear in random positions. When you spot the target letter, press \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E as quickly as possible. \u003C\u002Fp\u003E \n    \u003Cp\u003E Upon pressing the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E, the target and distractors\n    will disappear and be replaced by up to 5 numbers, one of which will appear where the target was displayed. To move to the next trial, type in the number that replaced the target.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
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
        "before:prepare": function anonymous(
) {
window.draw_stimulus = 
(component, position, rotation, target, display_function, 
costum_x=NaN, costum_y = NaN, serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y


  switch (display_function) {
    
    case 1:
    component.options.content.push({
      type: 'text',
      left: x, top: y, angle: rotation,
      text: target? 'T':'L',
      fontSize: 25,
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      fill: 'black'
    });
   
    break;
    case 2:
    component.options.content.push({
    type: 'rect',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: target? '#FF5733':'#16A085'
  });
  break;

   case 3:
    if (target) {
      var stype = 1;
    } else {
      var stype = 2+serial_number%3;
    }
    component.options.content.push({
    type: stype%2==0?'rect':'circle',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: stype>2? '#FF5733':'#16A085'
  });
  break;
  }
}

window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}


}
      },
      "title": "Instructions1b",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EPart 1\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n   \u003Cp\u003EBe quick to press the spacebar. There's no time pressure on pressing the right number key. At the end of each trial, you will get feedback about your accuracy and speed. Then, the next trial will begin.\u003C\u002Fp\u003E\n\n    \u003Cp\u003ELet's start!\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "target_char": 28,
          "dist_char": 15,
          "target_worker": 1
        },
        {
          "target_char": 28,
          "dist_char": 15,
          "target_worker": 1
        },
        {
          "target_char": 28,
          "dist_char": 15,
          "target_worker": 1
        },
        {
          "target_char": 28,
          "dist_char": 15,
          "target_worker": 1
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
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

window.draw_omniglot = 
(component, position, rotation, target, alphabet, 
letter, user, costum_x=NaN, costum_y = NaN, 
serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

    var filename = 'static/'+(alphabet).pad(2)+(letter).pad(2)+'_'+
              (user).pad(2)+'.png'
    // alert(filename)
    component.options.content.push({
      type: 'image',
      left: x, top: y, angle: rotation,width:40, height:40,
      src: filename,
    })
  }


window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}

window.demoRTs = [];

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

// If a target is present, we need to generate 
// one additional item
const setSize = 11

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const users = Array(20).fill(1).map((x, y) => x + y)
const characters = Array(20).fill(1).map((x, y) => x + y+8)

this.parameters.users = this.random.sample(users, setSize, true)
this.parameters.characters = this.random.sample(characters, setSize, true)

this.parameters.numbers_order =  this.random.sample(
  [1,2,3,4,5], 5, false)
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
            "title": "fixation",
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
window.draw_omniglot(
  this,
  125,
  0,
  1,
  7,this.parameters.target_char,
  window.workers[this.parameters.target_worker],50,-75
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
  if (!(i+1==0)) {window.draw_omniglot(
    this,
    position,
    0,
    i==0,
    7,
    i==0? this.parameters.target_char: this.parameters.dist_char,
    i==0? window.workers[this.parameters.target_worker]:this.parameters.users[i], NaN, NaN, i
  )}
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
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.draw_stimulus = 
(component, position, rotation, target, display_function, 
costum_x=NaN, costum_y = NaN, serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y


  switch (display_function) {
    
    case 1:
    component.options.content.push({
      type: 'text',
      left: x, top: y, angle: rotation,
      text: target? 'T':'L',
      fontSize: 25,
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      fill: 'black'
    });
   
    break;
    case 2:
    component.options.content.push({
    type: 'rect',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: target? '#FF5733':'#16A085'
  });
  break;

   case 3:
    if (target) {
      var stype = 1;
    } else {
      var stype = 2+serial_number%3;
    }
    component.options.content.push({
    type: stype%2==0?'rect':'circle',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: stype>2? '#FF5733':'#16A085'
  });
  break;
  }
}

window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}


}
      },
      "title": "Instructions2a",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EPart 2\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EGood, you finished the first part!\u003C\u002Fp\u003E\n    \u003Cp\u003ENow, you will estimate how long it will take you to find various letters when mixed with different distractor letters.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
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
        "before:prepare": function anonymous(
) {
window.draw_stimulus = 
(component, position, rotation, target, display_function, 
costum_x=NaN, costum_y = NaN, serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y


  switch (display_function) {
    
    case 1:
    component.options.content.push({
      type: 'text',
      left: x, top: y, angle: rotation,
      text: target? 'T':'L',
      fontSize: 25,
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      fill: 'black'
    });
   
    break;
    case 2:
    component.options.content.push({
    type: 'rect',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: target? '#FF5733':'#16A085'
  });
  break;

   case 3:
    if (target) {
      var stype = 1;
    } else {
      var stype = 2+serial_number%3;
    }
    component.options.content.push({
    type: stype%2==0?'rect':'circle',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: stype>2? '#FF5733':'#16A085'
  });
  break;
  }
}

window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}


}
      },
      "title": "Instructions2b",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EPart 2\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003E In each trial, you will estimate how long it will take you to find a letter when mixed with other letters presented in a square. The specific positions of the target and distractor letters are likely to change in the search phase, so focus on the identity of the letters.\u003C\u002Fp\u003E\n    \u003Cp\u003EBe as accurate as possible. In the third part, you will perform these searching tasks, and receive points only if you find the target letter as fast or faster than your estimate. The number of points offered for each estimate will appear inside the circle.\u003C\u002Fp\u003E\n    \u003Cp\u003EThe small black arrows mark your search times from the first part of the experiment. \u003C\u002Fp\u003E\n    \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
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

// If a target is present, we need to generate 
// one additional item
const setSize = 10

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const users = Array(20).fill(1).map((x, y) => x + y)
const characters = Array(20).fill(1).map((x, y) => x + y+8)

this.parameters.users = this.random.sample(users, setSize, true)
this.parameters.characters = this.random.sample(characters, setSize, true)


// Render the items one by one
this.parameters.item_positions.forEach((position, i) => {
  if (!(i+1==0)) {window.draw_omniglot(
    this,
    position,
    0,
    0,
    7,13,this.parameters.users[i], NaN, NaN, i
    
  )}
})

window.draw_omniglot(
  this,
  125,
  0,
  1,
  7,25,1,223,-250
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
        "before:prepare": function anonymous(
) {
window.draw_stimulus = 
(component, position, rotation, target, display_function, 
costum_x=NaN, costum_y = NaN, serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y


  switch (display_function) {
    
    case 1:
    component.options.content.push({
      type: 'text',
      left: x, top: y, angle: rotation,
      text: target? 'T':'L',
      fontSize: 25,
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      fill: 'black'
    });
   
    break;
    case 2:
    component.options.content.push({
    type: 'rect',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: target? '#FF5733':'#16A085'
  });
  break;

   case 3:
    if (target) {
      var stype = 1;
    } else {
      var stype = 2+serial_number%3;
    }
    component.options.content.push({
    type: stype%2==0?'rect':'circle',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: stype>2? '#FF5733':'#16A085'
  });
  break;
  }
}

window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}


},
        "run": function anonymous(
) {
var feedback = document.getElementById("feedback").innerHTML
feedback = feedback.replace(/_estimate_/g,String((window.demoEstimate/1000).toPrecision(2)))
feedback = feedback.replace(/_num_points_/g, String(window.demoBonus.toPrecision(2)))
document.getElementById("feedback").innerHTML = feedback;
}
      },
      "title": "estimation_feedback",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp id = 'feedback'\u003EFor this first estimation, you estimated that it will take you \u003Cb\u003E_estimate_\u003C\u002Fb\u003E seconds to find 1 \u003Cimg src=\"static\u002F0725_01.png\" width=\"30\" height=\"30\"\u003E among 10 randomly positioned \u003Cimg src=\"static\u002F0713_01.png\" width=\"30\" height=\"30\"\u003E's. \u003Cbr\u002F\u003E\n    If you will find the \u003Cimg src=\"static\u002F0725_01.png\" width=\"30\" height=\"30\"\u003E in _estimate_ seconds or less in part 3 of the experiment, you will get \u003Cb\u003E_num_points_\u003C\u002Fb\u003E points. Otherwise, you will get nothing. Your final number of points will determine whether you get a bonus or not. \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "tardy": true
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial_number": 1,
          "target_char": 1,
          "dist_char": 8,
          "target_worker": 1
        },
        {
          "trial_number": 2,
          "target_char": 2,
          "dist_char": 9,
          "target_worker": 2
        },
        {
          "trial_number": 3,
          "target_char": 3,
          "dist_char": 10,
          "target_worker": 3
        },
        {
          "trial_number": 4,
          "target_char": 4,
          "dist_char": 11,
          "target_worker": 4
        },
        {
          "trial_number": 5,
          "target_char": 5,
          "dist_char": 12,
          "target_worker": 5
        },
        {
          "trial_number": 6,
          "target_char": 6,
          "dist_char": 13,
          "target_worker": 6
        },
        {
          "trial_number": 7,
          "target_char": 7,
          "dist_char": 14,
          "target_worker": 7
        },
        {
          "trial_number": 8,
          "target_char": 8,
          "dist_char": 15,
          "target_worker": 8
        },
        {
          "trial_number": 9,
          "target_char": 9,
          "dist_char": 16,
          "target_worker": 9
        },
        {
          "trial_number": 10,
          "target_char": 10,
          "dist_char": 17,
          "target_worker": 10
        },
        {
          "trial_number": 11,
          "target_char": 11,
          "dist_char": 18,
          "target_worker": 11
        },
        {
          "trial_number": 12,
          "target_char": 12,
          "dist_char": 19,
          "target_worker": 12
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

// If a target is present, we need to generate 
// one additional item
const setSize = 10

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const workers = Array(20).fill(1).map((x, y) => x + y-1)
this.parameters.workers = this.random.sample(workers, setSize, true)


// Render the items one by one
this.parameters.item_positions.forEach((position, i) => {
  if (!(i+1==0)) {window.draw_omniglot(
    this,
    position,
    0,
    0,
    7,window.characters[this.parameters.dist_char],window.workers[this.parameters.workers[i]], NaN, NaN, i
    
  )}
})

window.draw_omniglot(
  this,
  125,
  0,
  1,
  7,window.characters[this.parameters.target_char],window.workers[this.parameters.target_worker],223,-250
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
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.draw_stimulus = 
(component, position, rotation, target, display_function, 
costum_x=NaN, costum_y = NaN, serial_number = 1) => {


  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y


  switch (display_function) {
    
    case 1:
    component.options.content.push({
      type: 'text',
      left: x, top: y, angle: rotation,
      text: target? 'T':'L',
      fontSize: 25,
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      fill: 'black'
    });
   
    break;
    case 2:
    component.options.content.push({
    type: 'rect',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: target? '#FF5733':'#16A085'
  });
  break;

   case 3:
    if (target) {
      var stype = 1;
    } else {
      var stype = 2+serial_number%3;
    }
    component.options.content.push({
    type: stype%2==0?'rect':'circle',
    left: x, top: y, angle: rotation,width:25, height:25,
    fill: stype>2? '#FF5733':'#16A085'
  });
  break;
  }
}

window.draw_numbers = (component, position, rotation, content, color = 'black',
costum_x=NaN, costum_y = NaN) => {
  var x = (Number.isNaN(costum_x)) ? ((position % 10) * 32 - 160) : costum_x
  var y = (Number.isNaN(costum_y)) ? Math.floor(position / 10) * 32 - 160 : costum_y

  component.options.content.push({
    type: 'text',
    left: x, top: y, angle: rotation,
    text: content,
    fontSize: 32,
    fontFamily: 'Helvetica, Arial, Sans-Serif',
    fill: color
  })
}


}
      },
      "title": "Instructions3",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EPart 3\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EYou finished the second part!\u003C\u002Fp\u003E\n    \u003Cp\u003EIn the third and last part of the experiment, you will perform three repetition of each search for which you gave a time estimate. Try to be as fast and accurate as possible, as your bonus depends on this! \n      Just like in the first part, there's no time pressure on pressing the number key, but only on pressing the \u003Ckbd\u003Espacebar\u003C\u002Fkbd\u003E.\n      \n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial_number": 1,
          "target_char": 1,
          "dist_char": 8,
          "target_worker": 1
        },
        {
          "trial_number": 2,
          "target_char": 2,
          "dist_char": 9,
          "target_worker": 2
        },
        {
          "trial_number": 3,
          "target_char": 3,
          "dist_char": 10,
          "target_worker": 3
        },
        {
          "trial_number": 4,
          "target_char": 4,
          "dist_char": 11,
          "target_worker": 4
        },
        {
          "trial_number": 5,
          "target_char": 5,
          "dist_char": 12,
          "target_worker": 5
        },
        {
          "trial_number": 6,
          "target_char": 6,
          "dist_char": 13,
          "target_worker": 6
        },
        {
          "trial_number": 7,
          "target_char": 7,
          "dist_char": 14,
          "target_worker": 7
        },
        {
          "trial_number": 8,
          "target_char": 8,
          "dist_char": 15,
          "target_worker": 8
        },
        {
          "trial_number": 9,
          "target_char": 9,
          "dist_char": 16,
          "target_worker": 9
        },
        {
          "trial_number": 10,
          "target_char": 10,
          "dist_char": 17,
          "target_worker": 10
        },
        {
          "trial_number": 11,
          "target_char": 11,
          "dist_char": 18,
          "target_worker": 11
        },
        {
          "trial_number": 12,
          "target_char": 12,
          "dist_char": 19,
          "target_worker": 12
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

// If a target is present, we need to generate 
// one additional item
const setSize = 11

// Sample positions and rotations
const item_positions = this.random.sample(
  positions, setSize, false // without replacement
)

this.parameters.item_positions = item_positions;

const workers = Array(20).fill(1).map((x, y) => x + y-1)

this.parameters.workers = this.random.sample(workers, setSize, true)

this.parameters.numbers_order =  this.random.sample(
  [1,2,3,4,5], 5, false)

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
window.draw_omniglot(
  this,
  125,
  0,
  1,
  7,window.characters[this.parameters.target_char],
  window.workers[this.parameters.target_worker],
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
  if (!(i+1==0)) {window.draw_omniglot(
    this,
    position,
    0,
    i==0,
    7,
    i==0? window.characters[this.parameters.target_char]: window.characters[this.parameters.dist_char],
    i==0? window.workers[this.parameters.target_worker]: window.workers[this.parameters.workers[i]], NaN, NaN, i
  )}
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
      "content": "\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n    \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EThank you for taking the time!\u003C\u002Fp\u003E\n    \u003Cp id = 'bonus_msg'\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EWe will appreciate any thoughts or comments you have about the experiment. You can use the box below to share them with us. Thank you!\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cdiv style=\"text-align:center\"\u003E\n\u003Cform\u003E\n   \u003Ctextarea name=\"message\" rows=\"10\" cols=\"30\"\u003EYour feedback here.\u003C\u002Ftextarea\u003E\n  \u003Cbr\u003E\n  \u003Cinput id=\"submit\" type=\"submit\"\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E",
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