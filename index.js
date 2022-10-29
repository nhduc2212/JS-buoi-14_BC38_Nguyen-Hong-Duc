// 1) Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
// =============3 BLOCKS DIAGRAM==================
// INPUT: 3 integer (num1,num2,num3)
// OUTPUT: 3 integer in ascending order
// PROCESS:
// create a var called sortedNumber
// create 3 var called max1,max2,max3
// if num1>num2 => max1=num1&max2=num2 else max1=nun2&max2=num1

// if  num3>max1 => max3=max2&max2=max1&max1=num3;
// if num3<max1&num3>max2 => max3=max2&max2=num3;
// else max3=num3

// sortedNumber = max3 + max2 + max1
// ===========================================
function sortInteger() {
  var num1 = document.getElementById("integer-sorter-num1").value;
  var num2 = document.getElementById("integer-sorter-num2").value;
  var num3 = document.getElementById("integer-sorter-num3").value;
  var sortedNumber;
  var max1, max2, max3;
  if (num1*1 > num2*1) {
    (max1 = num1), (max2 = num2);
  } else {
    (max1 = num2), (max2 = num1);
  }
  if (num3*1 > max1) {
    (max3 = max2), (max2 = max1), (max1 = num3*1);
  } else if ((num3*1 < max1) & (num3*1 > max2)) {
    (max3 = max2), (max2 = num3);
  } else {
    max3 = num3*1;
  }

  sortedNumber = max3 + " " + max2 + " " + max1;
  if (max1 === max3 || max1 === max2 || max2 === max3) {
    sortedNumber = "Invalid numbers";
  }
  document.getElementById("integer-result").style.visibility = "visible";
  document.getElementById("integer-result-nums").innerHTML = sortedNumber;
}

// 2) Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
// hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
// đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
// =============3 BLOCKS DIAGRAM==================
// INPUT: Choices (Bố, Mẹ, anh Trai, Em gái)
// OUTPUT: Corresponding greeting for each user
// PROCESS:
// Getting input value via a select box
// Looking up for the input value in database
// Getting the corresponding greeting line saved in database
// Print out the var that contains the greeting line found and make the div visible.
// ===========================================
function greetingUser() {
  var userName;
  var userNameCode = document.getElementById("userName").value;
  switch (userNameCode) {
    case "B":
      userName = "PAPA";
      break;
    case "M":
      userName = "MAMA";
      break;
    case "A":
      userName = "BRO";
      break;
    case "E":
      userName = "SIS";
      break;
  }
  document.getElementById("userName-result").innerHTML = userName;
  document.getElementById("greeting-result").style.visibility = "visible";
}

// 3) Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
// =============3 BLOCKS DIAGRAM==================
// INPUT: 3 integer (num1,num2,num3)
// OUTPUT: number of odd and even numbers
// PROCESS:
// create a var called oddNumNum
// summarizing them the modulo 2 all integer = number of odd numbers (oddNumNum);
// number of even numbers = 3 - number of odd numbers
// if number of odd numbers <= 1 dont add s behind "odd number" and add s behind "even number", otherwise add s behind "odd number" and dont add s behind "even number"
// ===========================================
function oddEven() {
  var num1 = document.getElementById("integer-odd-even-num1").value;
  var num2 = document.getElementById("integer-odd-even-num2").value;
  var num3 = document.getElementById("integer-odd-even-num3").value;
  var oddNumNum;
  var evenNumNum;
  var oddS;
  var evenS;
  oddNumNum = (num1 % 2) + (num2 % 2) + (num3 % 2);
  evenNumNum = 3 - oddNumNum;
  if (oddNumNum <= 1) {
    (oddS = "number"), (evenS = "numbers");
  } else {
    (oddS = "numbers"), (evenS = "number");
  }
  document.getElementById("odd-num").innerHTML = oddNumNum;
  document.getElementById("odd-s").innerHTML = oddS;
  document.getElementById("even-num").innerHTML = evenNumNum;
  document.getElementById("even-s").innerHTML = evenS;
  document.getElementById("integer-odd-even-result").style.visibility =
    "visible";
}

// 4. Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
// =============3 BLOCKS DIAGRAM==================
// INPUT: 3 edges of a triangle (edgeA, edgeB, edgeC)
// OUTPUT: type of the triangle
// PROCESS:
// if edgeA = edgeB or edgeA = edgeC or edgeB = edgeC => Isosceles triangle 
// if edgeA = edgeB = edgeC => equilateral triangle
// if edgeA^2=edgeB^2+edgeC^2 or if edgeB^2=edgeA^2+edgeC^2 or if edgeC^2=edgeB^2+edgeA^2 => right-angled triangle
// if (edgeA = edgeB or edgeA = edgeC or edgeB = edgeC) and (edgeA^2=edgeB^2+edgeC^2 or if edgeB^2=edgeA^2+edgeC^2 or if edgeC^2=edgeB^2+edgeA^2) => isosceles right triangle
// ===========================================
function triangleTypeCheck(){
  var edgeA = document.getElementById("firstEdge").value;
  var edgeB = document.getElementById("secondEdge").value;
  var edgeC = document.getElementById("thirdEdge").value;

  var typeOfTriangle="Ordinary Triangle";
  if(edgeA===edgeB&edgeB===edgeC&edgeC===edgeA){typeOfTriangle="Equilateral Triangle"}else if(edgeA===edgeB||edgeA===edgeC||edgeB===edgeC){typeOfTriangle="Isosceles Triangle"};
  if(Math.pow(edgeA,2)===(Math.pow(edgeB,2)+Math.pow(edgeC,2))||Math.pow(edgeB,2)===(Math.pow(edgeA,2)+Math.pow(edgeC,2))||Math.pow(edgeC,2)===(Math.pow(edgeB,2)+Math.pow(edgeA,2))){typeOfTriangle="Right-angled Triangle"};
  
  if((Math.pow(edgeA,2)===(Math.pow(edgeB,2)+Math.pow(edgeC,2))||Math.pow(edgeB,2)===(Math.pow(edgeA,2)+Math.pow(edgeC,2))||Math.pow(edgeC,2)===(Math.pow(edgeB,2)+Math.pow(edgeA,2)))&(edgeA===edgeB||edgeA===edgeC||edgeB===edgeC)){typeOfTriangle="Isosceles right-angled triangle"};
  document.getElementById("triangle-checker-final-result").innerHTML=typeOfTriangle;
  document.getElementById("triangle-checker-final-result").style.visibility="visible";
  if(edgeA <= 0||edgeB<=0||edgeC<=0){document.getElementById("triangle-checker-result-invalid").style.visibility="visible", document.getElementById("triangle-checker-result-valid").style.visibility="hidden",document.getElementById("triangle-checker-final-result").style.visibility="hidden"}else{document.getElementById("triangle-checker-result-valid").style.visibility="visible", document.getElementById("triangle-checker-result-invalid").style.visibility="hidden"};

  document.getElementById("trianle-checker-result").style.visibility="visible";
}