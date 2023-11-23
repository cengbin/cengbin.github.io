var name = "window name"

function aaainit() {
  console.log("name:", name);

  var x = 10, y = 20;

  var foo = {x: 11};

  with (foo) {
    console.log(x); // 11
    console.log(y); // 20

    x = 30
    y = 30
  }
  console.log(x); // 10
  console.log(y); // 30
}

aaainit.call({name: "zengbin"})