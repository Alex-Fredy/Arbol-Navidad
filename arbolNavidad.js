function arbol(num) {
  const N = num;
  let p = 1;
  for (let a = 1; a <= N; a++) {
    let g = "";

    for (let b = a; b < N; b++) {
      g += " ";
    }

    if (p == 1) {
      for (let z = 1; z <= 2 * a - 1; z++) {
        p = p + 1;
        a = a - 1;
        g += "*";
      }
    } else {
      for (let z = 1; z <= (2 * a - 1); z++) {
        g += "0";
      }
    }

    console.log(g);
  }
}
