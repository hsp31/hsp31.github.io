var webmaps = [
  [
    "Duke Energy",
    "https://outagemap.duke-energy.com/#/current-outages/ohky",
    "This page is helpful for finding outages in your region. The strengths of this webmap are that it provides precise location data and updates often."
  ],
  [
    "Lululemon",
    "https://shop.lululemon.com/stores",
    "This website allows customers to view locations of lululemon stores, and provides data such as store hours and addresses. The strengths of this site are that it includes notes of information someone might want to know before visiting."
  ]
];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1"
  return message
}

function webmap_table() {
  document.write("<table width=100%>");

  for (var row = 0; row < webmaps.length; row++) {

    if (row % 1 == 0) {
      document.write("<tr style='background-color: #fee391;'>");
    } else {
      document.write("<tr style='background-color: #fec44f;'>");
    }
    for (var column = 0; column < webmaps[row].length; column++) {
      if (column == webmaps[row].length - 1){
      document.write("<td style='font-size: 20px;'>" + webmaps[row][column] + "</td>");
    } else {
      document.write("<td style='font-size: 25px;'>" + webmaps[row][column] + "</td>");
    }
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
