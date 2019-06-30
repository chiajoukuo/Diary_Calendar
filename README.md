﻿Diary Calender
一句話描述這個專題
一個行事曆以及日記兼具的可愛網頁
This is the Demo Video.

Usage
Setup
Run the following command to setup the project:

$ clone git https://github.com/chiajoukuo/Diary_Calendar.git
$ cd mern_calender
$ npm install   
$ cd client 
$ npm install
Run the project
回到mern_calender資料夾底下執行

$ npm run dev
這個專案的前端使用localhost:3000，後端使用localhost:5000。

系統說明與特色
我們做了一個可在行事曆內自由增加日記的系統。
我們可以進到行事曆頁面增加事件(可更改時間,名稱和標註顏色)。
也可以點選日期以進入該日的日記，可加入文字和圖片。
加入的文字和圖片可以拖曳放大縮小旋轉，自由放在版面上的任何地方。

行事曆
我們的行事曆有以下功能

新增/更新事件
我們可在行事曆上拉取時間，將事件名稱填入表單，並選取標註的顏色。
可再度點選事件以進行更新。勾選左上角的欄位可同時編輯相同的事件。
連結至日記頁面
點選第一列的日期就可以進入到該日的日記裡頭。
日記
我們的日記有以下功能

新增/更新文字圖片
可新增文字或是圖片，也可以雙擊該物件以更新它的資料
拖曳，放大，縮小，旋轉
可自由拖曳物件，而用滑鼠滾輪滾動可將物件放大縮小(此為預設值)，而點選左側的旋轉按鈕可將之設置成選轉模式，此時滾動滑鼠則可將該物件旋轉
登入系統
我們的日記需要先行登入才能使用。因此具有登入帳號以及創建帳戶的功能。進到每一個頁面也會先驗證身分才會生成日記和行事曆頁面。

使用與參考之框架/模組/原始碼
前端
React: 我們的前端是以React開發
React-week-calender: 行事曆的元件，省去手刻行事曆的麻煩
Material ui, Reactstrap: 加速前端開發速度
Moment: 行事曆的時間format
jsonwebtoken: 用來解決身份認證的問題
後端
redux: 後端最主要使用的架構
bcrypt: 用來計算使用者密碼的雜湊值
mongoose: 連接MongoDB資料庫
nodemon: 方便後端開發
待增加
分工
心得
b05901159邱昱禎：這次實做了行事曆，由於行事曆是開源元件，所以有深入了解它的程式碼，也對於props傳遞的結構更加的熟悉。這學期最大的收穫就是知道網頁的領域非常的龐大，不論前後端都有好幾種框架，模組。希望自己以後能夠繼續鑽研。