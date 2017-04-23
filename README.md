# GaiHexとは

GaiHexを一言でいえば、SPRGに運の要素を排除して、将棋の様な要素をちょっと振りかけて、戦略要素を隠し味を添えたものです。あぁ、一言じゃない上に何を言っているかわかりませんね。運の要素を排除したからと言って、二人零和有限確定完全情報ゲームではありません。有限ではありませんし、情報が多すぎるので完全情報と言われても苦しいでしょう。

別に本体終了しているにも関わらずアニメが成功した某すごーい！に触発されて作成したわけではありません。

（とってつけた）コンセプトは以下です。

* 1つのルール
* 2つ以上のチームで対戦
* 3つのゲーム時間を調整
* 4つのマップモード（固定マップ除いて）
* 5つのゲームモードを選択
* 6つの辺を持つマップ
* 7つのオプションを選択可能
* 8つのチーム（１つはランダム）
* 9つハンデを調整可能
* 10の...（思付かない）

# 動作イメージ

ゲームの動作イメージは以下になります。


![ゲームスタート](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/start.png)

![メニュー](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/menu.png)

![unit選択](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/unit.png)

![ゲーム画面1](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/game1.png)

![ゲーム画面1](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/win.png)


![ゲーム画面2](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/game2.png)

![ゲーム画面3](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/game3.png)

![ゲーム画面4](https://raw.githubusercontent.com/rakichiki/gaihex/master/man_image/game4.png)





# マニュアル

てきとうに作成したマニュアルは、トップメニューの歯車のアイコン→ブックのアイコンをクリックすると表示されます。

[]()


# ライセンス

ソース部分はApacheライセンスです。画像はK.Haruma氏が保持しているため、個人利用以外のフリー・商用公開はお控えください。


# 動かし方

Javascript/CSS/HTMLで作成されております。このため、git cloneしてindex.htmlをChromeなど(Chromeでのみしかデバッグしていません)で読み込むと動きます。

また、Electronを用いてWindowsアプリ化も可能です。手順は、[Cordovaで作成したアプリをElectronを用いてWindowsアプリ化してみる（手順と移植の問題点）](http://qiita.com/rakichiki/items/45fca916e2778e31c568)を参考にして動かしてみてください。

もとはCordovaでAndroidアプリ化を目指したもののため、Androidでアプリ化できると思っています。ですが、現在コミットしているバージョンはElectronに特化してる関係上、CordovaでAndroidアプリ化はできません。時間があれば修正戻しと手順を公開するかもしれません。




