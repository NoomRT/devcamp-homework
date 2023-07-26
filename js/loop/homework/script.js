const draw11 = function (n) {
  console.log("-----1.1-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    text += "*";
  }
  console.log(text);
};

const draw12 = function (n) {
  console.log("-----1.2-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += "*";
    }
    text += "\n";
  }
  console.log(text);
};

const draw13 = function (n) {
  console.log("-----1.3-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += j + 1;
    }
    text += "\n";
  }
  console.log(text);
};

const draw14 = function (n) {
  console.log("-----1.4-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += i + 1;
    }
    text += "\n";
  }
  console.log(text);
};

const draw15 = function (n) {
  console.log("-----1.5-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += n - i;
    }
    text += "\n";
  }
  console.log(text);
};

const draw16 = function (n) {
  console.log("-----1.6-----");
  let text = "";
  let counter = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += counter++;
    }
    text += "\n";
  }
  console.log(text);
};

const draw17 = function (n) {
  console.log("-----1.7-----");
  let text = "";
  let counter = n * n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += counter--;
    }
    text += "\n";
  }
  console.log(text);
};

const draw18 = function (n) {
  console.log("-----1.8-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    text += i + i;
    text += "\n";
  }
  console.log(text);
};

const draw19 = function (n) {
  console.log("-----1.9-----");
  let text = "";
  for (let i = 0; i < n; i++) {
    text += (i + 1) * 2;
    text += "\n";
  }
  console.log(text);
};

const draw110 = function (n) {
  console.log("-----1.10-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      text += j * i;
    }
    text += "\n";
  }
  console.log(text);
};

const draw111 = function (n) {
  console.log("-----1.11-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw112 = function (n) {
  console.log("-----1.12-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
      if (i == j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw21 = function (n) {
  console.log("-----2.1-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw22 = function (n) {
  console.log("-----2.2-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
      if (i > j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw23 = function (n) {
  console.log("-----2.3-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j <= n - 1; j++) {
      if (i > j) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw24 = function (n) {
  console.log("-----2.4-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        text += "-";
      } else {
        text += i;
      }
    }
    text += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j <= n - 1; j++) {
      if (i > j) {
        text += i;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw25 = function (n) {
  console.log("-----2.5-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
      if (j > i) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw26 = function (n) {
  console.log("-----2.6-----");
  let text = "";
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (i < j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw27 = function (n) {
  console.log("-----2.7-----");
  let text = "";
  for (let i = 1; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (i < j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (i < j) {
        text += "-";
      } else {
        text += "*";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw28 = function (n) {
  console.log("-----2.8-----");
  let text = "";
  let counter = 1;
  for (let i = 1; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (i < j) {
        text += "-";
      } else {
        text += counter++;
      }
    }
    text += "\n";
  }
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (i < j) {
        text += "-";
      } else {
        text += counter++;
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw29 = function (n) {
  console.log("-----2.9-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw210 = function (n) {
  console.log("-----2.10-----");
  let text = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 2 * n - 1; j >= 1; j--) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw31 = function (n) {
  console.log("-----3.1-----");
  let text = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 2 * n - 1; j >= 1; j--) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw32 = function (n) {
  console.log("-----3.2-----");
  let text = "";
  let counter = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        text += counter++;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 2 * n - 1; j >= 1; j--) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        text += counter++;
      } else {
        text += "-";
      }
    }
    text += "\n";
  }
  console.log(text);
};

const draw33 = function (n) {
  console.log("-----3.3-----");
  let text = "";
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (j > i) {
        arr[i][j] = "-";
      } else {
        arr[i][j] = "*";
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      text += arr[i][j];
    }
    text += "\n";
  }
  console.log(arr);

  console.log(text);
};

const draw34 = function (n) {
  console.log("-----3.4-----");
  let text = "";
  let star1 = [];
  let star2 = [];
  debugger;
  for (let i = 1; i <= n; i++) {
    star1[i] = [];
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        star1[i][j] = "*";
      } else {
        star1[i][j] = "-";
      }
    }
  }

  for (let i = n - 1; i >= 1; i--) {
    star2[i] = [];
    for (let j = 2 * n - 1; j >= 1; j--) {
      if (j >= n - (i - 1) && j <= n + (i - 1)) {
        star2[i][j] = "*";
      } else {
        star2[i][j] = "-";
      }
    }
  }

  for (let i = 1; i < star1.length; i++) {
    for (let j = 1; j < star1[i].length; j++) {
      text += star1[i][j];
    }
    text += "\n";
  }
  for (let i = star2.length - 1; i >= 1; i--) {
    for (let j = star2[i].length - 1; j >= 1; j--) {
      text += star2[i][j];
    }
    text += "\n";
  }

  console.log(text);
};
const draw = async function (n) {
  await draw11(n);
  await draw12(n);
  await draw13(n);
  await draw14(n);
  await draw15(n);
  await draw16(n);
  await draw17(n);
  await draw18(n);
  await draw19(n);
  await draw110(n);
  await draw111(n);
  await draw112(n);
  await draw21(n);
  await draw22(n);
  await draw23(n);
  await draw24(n);
  await draw25(n);
  await draw26(n);
  await draw27(n);
  await draw28(n);
  await draw29(n);
  await draw210(n);
  await draw31(n);
  await draw32(n);
  await draw33(n);
  await draw34(n);
};

draw(2);
draw(3);
draw(4);
