# Diary Calender

## 一句話描述這個專題
一個行事曆以及日記兼具的可愛網頁  
This is the [deployed link]('link') and the [Demo Video]('link').

## Usage

### Setup
Run the following command to setup the project:  

```
$ clone git https://github.com/chiajoukuo/Diary_Calendar.git
$ cd mern_calender -> npm install   
$ cd client -> npm install
```  

### Run the project
回到mern_calender執行
```
$ npm run dev
```

這個專案的前端使用`localhost:3000`，後端使用`localhost:5000`。


## 系統說明與特色
我們做了一個可在行事曆內自由增加日記的系統。
我們可以進到行事曆頁面增加事件(可更改時間,名稱和標註顏色)
也可以點選日期以進入該日的日記，可加入文字和圖片
加入的文字和圖片也可以拖曳放大縮小旋轉，自由放在版面上的任何地方　

### 行事曆
我們的行事曆有以下功能
1. 新增/更新事件
　我們可在行事曆上拉取時間，將事件名稱填入表單，並選取標註的顏色。
    可再度點選事件以進行更新。勾選左上角的欄位可同時編輯相同的事件。
2.連結至日記頁面
    點選第一列的日期就可以進入到該日的日記裡頭。

###日記
我們的日記有以下功能
1.新增/更新文字圖片
    可新增文字或是圖片，也可以雙擊該物件以更新它的資料
2.拖曳，放大，縮小，旋轉
    可自由拖曳物件，而用滑鼠滾輪滾動可將物件放大縮小(此為預設值)，
而點選左側的旋轉按鈕可將之設置成選轉模式，此時滾動滑鼠則可將該物件旋轉
   
    

    這種選舉會在使用者投出一張選票號立即更新投票結果，跟一般網路上常見的投票方式一樣，雖然方便但不具有匿名性與驗證性
2. 兩階段選舉(Two-Stage Election)
    此種選舉有**投票**跟**開票**兩個階段，在投票時使用者需要投出選票的雜湊值(Commitment)，此時只有使用者自己知道他投出的選項，後端無法得知選票內容。在第二階段時，使用者必須提交當初的選票內容作為開票證明(Opening)，為了確保匿名性，這個時候會強制使用者登出。

選票設計如下：
```
Choice: Int -> 代表這張選票投出的選項
Secret: Data -> 產生Commitment所需的密碼，由投票者自行設定
Commitment: Hash( Hash(Secret) || Hash(Choice) ) -> 實際投出的選票
Opening: ( Hash(Secret), Choice ) -> 開票證明
```
方便起見，在此使用的Hash Function為SHA3-512，它可以被任何一種安全的雜湊函數代替。

在Commitment的數值確定之後，如果一個使用者反悔將Choice的數值改變，則他必須找到另外一個Secret使這兩張選票的Commitment相同，這也代表他必須找出SHA3-512的碰撞，以目前的技術而言是不可能的事情，而這也代表著Server無法操控選舉結果。

使用者投出Commitment後，Server會立即將選票公布出來，讓選民驗證自己的選票有被正確儲存。在開票時，Server會公布已開出的選票的Opening，讓使用者驗證自己的選票有被正確計算在選舉結果中，同時驗證別張選票的開票結果。

### 為何只有一點點匿名性？


### Voting Page


## 使用與參考之框架/模組/原始碼

### 前端
- React: 我們的前端是以React開發
- React-week-calender: 行事曆的元件,省去手刻行事曆的麻煩
- Mateiral ui: 加速前端開發速度
- Reactstrap: 利用Reactstrap的元件加速前端的開發
- jsSHA: 
- react-chartjs-2: 

### 後端
- redux: 後端最主要使用的架構
- bcrypt: 用來計算使用者密碼的雜湊值
- JsonWebToken: 加密Session資訊，讓Server端不需要保留Session的內容
- jsSHA: 開票時用來計算開票內容的雜湊值
- mongoose: 連接MongoDB資料庫
- babel: 用來轉換ES6的Javascript
- nodemon: 方便後端開發
- mocha: 作為後端測試框架
- chai: 用來做測試驗證
- graphql-request: 後端測試時使用的GraphQL Client

###參考之程式碼

## 每位組員之貢獻



## 心得

