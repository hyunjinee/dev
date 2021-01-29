const country = "S.%20Korea";
// .%20 url로 인코딩된 띄워쓰기
const url = `https://coronavirus-19-api.herokuapp.com/countries/${country}`;
const req = new Request(url);
const res = await req.loadJSON();
let widget = new ListWidget();
widget.backgroundColor = Color.white();
let titleTxt = widget.addText("코로나 확진자 수");
titleTxt.textColor = Color.black();
widget.addSpacer(5);
let Txt1 = widget.addText(`오늘 ${res.todayCases}`);
Txt1.font = Font.systemFont(24);
Txt1.textColor = Color.black();
widget.addSpacer(5);

let Txt2 = widget.addText(`전체 ${res.cases}`);
Txt2.textColor = Color.black();
Script.setWidget(widget);
Script.complete();
