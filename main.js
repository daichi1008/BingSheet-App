let table = document.getElementById(`view`)
document.body.appendChild(table);

// 縦6横５のシート作成
for (let y = 0; y < 6; y++) {
    const tr = table.insertRow()
    for (let x = 0; x < 5; x++) {
        const td = tr.insertCell()

    }
}
// BINGOの追加
table.rows[0].cells[0].innerHTML = `B`
table.rows[0].cells[1].innerHTML = `I`
table.rows[0].cells[2].innerHTML = `N`
table.rows[0].cells[3].innerHTML = `G`
table.rows[0].cells[4].innerHTML = `O`
// // FREEの追加
table.rows[3].cells[2].innerHTML = `Free`

// Bの列
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let randArr = [];
let rand;
for (let i = 0, len = arr.length; i < 5; i++, len--) {
    rand = Math.floor(Math.random() * len);
    randArr.push(arr.splice(rand, 1)[0]);
}
table.rows[1].cells[0].innerHTML = `${randArr[0]}`;
table.rows[2].cells[0].innerHTML = `${randArr[1]}`;
table.rows[3].cells[0].innerHTML = `${randArr[2]}`;
table.rows[4].cells[0].innerHTML = `${randArr[3]}`;
table.rows[5].cells[0].innerHTML = `${randArr[4]}`;
// Iの列
let arr2 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let randArr2 = [];
let rand2;
for (let i = 0, len = arr2.length; i < 5; i++, len--) {
    rand2 = Math.floor(Math.random() * len);
    randArr2.push(arr2.splice(rand2, 1)[0]);
};
table.rows[1].cells[1].innerHTML = `${randArr2[0]}`;
table.rows[2].cells[1].innerHTML = `${randArr2[1]}`;
table.rows[3].cells[1].innerHTML = `${randArr2[2]}`;
table.rows[4].cells[1].innerHTML = `${randArr2[3]}`;
table.rows[5].cells[1].innerHTML = `${randArr2[4]}`;

// Nの列
let arr3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
let randArr3 = [];
let rand3;
for (let i = 0, len = arr3.length; i < 4; i++, len--) {
    rand3 = Math.floor(Math.random() * len);
    randArr3.push(arr3.splice(rand3, 1)[0]);
};
table.rows[1].cells[2].innerHTML = `${randArr3[0]}`;
table.rows[2].cells[2].innerHTML = `${randArr3[1]}`;
table.rows[4].cells[2].innerHTML = `${randArr3[2]}`;
table.rows[5].cells[2].innerHTML = `${randArr3[3]}`;

// Gの列
let arr4 = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
let randArr4 = [];
let rand4;
for (let i = 0, len = arr4.length; i < 5; i++, len--) {
    rand4 = Math.floor(Math.random() * len);
    randArr4.push(arr4.splice(rand4, 1)[0]);
};
table.rows[1].cells[3].innerHTML = `${randArr4[0]}`;
table.rows[2].cells[3].innerHTML = `${randArr4[1]}`;
table.rows[3].cells[3].innerHTML = `${randArr4[2]}`;
table.rows[4].cells[3].innerHTML = `${randArr4[3]}`;
table.rows[5].cells[3].innerHTML = `${randArr4[4]}`;

// Oの列
let arr5 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,];
let randArr5 = [];
let rand5;
for (let i = 0, len = arr5.length; i < 5; i++, len--) {
    rand5 = Math.floor(Math.random() * len);
    randArr5.push(arr5.splice(rand5, 1)[0]);
};
table.rows[1].cells[4].innerHTML = `${randArr5[0]}`;
table.rows[2].cells[4].innerHTML = `${randArr5[1]}`;
table.rows[3].cells[4].innerHTML = `${randArr5[2]}`;
table.rows[4].cells[4].innerHTML = `${randArr5[3]}`;
table.rows[5].cells[4].innerHTML = `${randArr5[4]}`;

// チャレンジ問題

// Freeのスタイル変更
table.rows[3].cells[2].style.backgroundColor = "black ";
table.rows[3].cells[2].style.color = `rgb(70, 206, 216)`;


const hitNum = document.getElementById(`hitNum`);
hitNum.addEventListener(`click`, function () {
    arrNum = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
        46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75
    ];
    arrNum1 = [];

    for (var i = 0; i < 1; i++) {
        arrNum1[i] = arrNum.splice(Math.floor(Math.random() * arrNum.length), 1)[0];
    }
    //  配列から文字列へ変換
    let answeNum = arrNum1.join(`,`);

    alert(`数字は${arrNum1}番です！`);


    if (answeNum === table.rows[1].cells[0].textContent) {        //Bの列
        table.rows[1].cells[0].style.backgroundColor = "black ";
        table.rows[1].cells[0].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[2].cells[0].textContent) {
        table.rows[2].cells[0].style.backgroundColor = "black ";
        table.rows[2].cells[0].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[3].cells[0].textContent) {
        table.rows[3].cells[0].style.backgroundColor = "black ";
        table.rows[3].cells[0].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[4].cells[0].textContent) {
        table.rows[4].cells[0].style.backgroundColor = "black ";
        table.rows[4].cells[0].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[5].cells[0].textContent) {
        table.rows[5].cells[0].style.backgroundColor = "black ";
        table.rows[5].cells[0].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[1].cells[1].textContent) {  //Iの列
        table.rows[1].cells[1].style.backgroundColor = "black ";
        table.rows[1].cells[1].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[2].cells[1].textContent) {
        table.rows[2].cells[1].style.backgroundColor = "black ";
        table.rows[2].cells[1].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[3].cells[1].textContent) {
        table.rows[3].cells[1].style.backgroundColor = "black ";
        table.rows[3].cells[1].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[4].cells[1].textContent) {
        table.rows[4].cells[1].style.backgroundColor = "black ";
        table.rows[4].cells[1].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[5].cells[1].textContent) {
        table.rows[5].cells[1].style.backgroundColor = "black ";
        table.rows[5].cells[1].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[1].cells[2].textContent) {  //Nの列
        table.rows[1].cells[2].style.backgroundColor = "black ";
        table.rows[1].cells[2].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[2].cells[2].textContent) {
        table.rows[2].cells[2].style.backgroundColor = "black ";
        table.rows[2].cells[2].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[4].cells[2].textContent) {
        table.rows[4].cells[2].style.backgroundColor = "black ";
        table.rows[4].cells[2].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[5].cells[2].textContent) {
        table.rows[5].cells[2].style.backgroundColor = "black ";
        table.rows[5].cells[2].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[1].cells[3].textContent) {  //Gの列
        table.rows[1].cells[3].style.backgroundColor = "black ";
        table.rows[1].cells[3].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[2].cells[3].textContent) {
        table.rows[2].cells[3].style.backgroundColor = "black ";
        table.rows[2].cells[3].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[3].cells[3].textContent) {
        table.rows[3].cells[3].style.backgroundColor = "black ";
        table.rows[3].cells[3].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[4].cells[3].textContent) {
        table.rows[4].cells[3].style.backgroundColor = "black ";
        table.rows[4].cells[3].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[5].cells[3].textContent) {
        table.rows[5].cells[3].style.backgroundColor = "black ";
        table.rows[5].cells[3].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[1].cells[4].textContent) {  //Oの列
        table.rows[1].cells[4].style.backgroundColor = "black ";
        table.rows[1].cells[4].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[2].cells[4].textContent) {
        table.rows[2].cells[4].style.backgroundColor = "black ";
        table.rows[2].cells[4].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[3].cells[4].textContent) {
        table.rows[3].cells[4].style.backgroundColor = "black ";
        table.rows[3].cells[4].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[4].cells[4].textContent) {
        table.rows[4].cells[4].style.backgroundColor = "black ";
        table.rows[4].cells[4].style.color = `rgb(70, 206, 216)`;
    } else if (answeNum === table.rows[5].cells[4].textContent) {
        table.rows[5].cells[4].style.backgroundColor = "black ";
        table.rows[5].cells[4].style.color = `rgb(70, 206, 216)`;
    };
});

