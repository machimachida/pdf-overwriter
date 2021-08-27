const hummus = require("hummus");

const pdfWriter = hummus.createWriterToModify(
  "original.pdf",                    // 編集元PDFのパス
  { modifiedFilePath: "output.pdf" } // 保存先パス
);

// フォントファイルをインポート
const font = pdfWriter.getFontForFile("font.ttf");

 // 編集するページを取得(1ページ目を編集するため、2つ目の引数を0とする)
const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
pageModifier.startContext().getContext().writeText(
  "野比のび太", // 入力文字列
  59,572,      // 座標を入力 ページの左下端が(0,0)
  {
    font: font,         // フォントの指定
    size: 12,           // 文字サイズの指定
    colorspace: "gray", // 色空間を"gray", "cmyk", "rgb"から選択
    color: 0x00         // カラーコード
  }
);
pageModifier.startContext().getContext().writeText(
  "ドラえもん",
  59,552,
  {
    font: font,
    size: 12,
    colorspace: "rgb",
    color: 0x153ed3 // 青色
  }
);
pageModifier.endContext().writePage();

pdfWriter.end();