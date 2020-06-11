let counter = 0;
let marubatsu = '×';

document.getElementById('wrapper').addEventListener('click', (e) => {
    if (!e.target.firstChild && !document.getElementById('turn').textContent.includes('の勝ち')) {
        let txt = document.createElement('span');
        txt.textContent = marubatsu;
        if (marubatsu === '×') {
            txt.style.color = 'red';
            document.getElementById('turn').textContent = '○の順番';
            marubatsu = '○';
            counter++;
        } else {
            txt.style.color = 'blue';
            document.getElementById('turn').textContent = '×の順番';
            marubatsu = '×';
            counter++;
        }
        e.target.appendChild(txt);
        winCheck();
        if (counter === 9 && !document.getElementById('turn').textContent.includes('の勝ち')) {
            document.getElementById('turn').textContent = 　'引き分け…';
            document.getElementById('retry').style.display = 'inline-block';
        }
    }
});

document.getElementById('retry').addEventListener('click', (e) => {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).removeAttribute('style');
        while (document.getElementById(i).firstChild)
            document.getElementById(i).removeChild(document.getElementById(i).firstChild);
    }
    marubatsu = '×';
    document.getElementById('turn').textContent = '×の順番';
    document.getElementById('retry').style.display = 'none';
    counter = 0;
});

function winCheck() {
    let arr = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ];
    for (a of arr) {
        let bool = false;
        let kijun = '';
        for (let i = 0; i < 3; i++) {
            if (document.getElementById(a[i]).childElementCount === 0) break;
            else if (i === 2) {
                bool = true;
                kijun = document.getElementById(a[0]).firstChild.textContent;
            }
        }
        if (bool) {
            if (kijun === document.getElementById(a[1]).firstChild.textContent && kijun === document.getElementById(a[2]).firstChild.textContent) {
                document.getElementById('turn').textContent = kijun + 'の勝ち!';
                document.getElementById('retry').style.display = 'inline-block';
                for (let i = 0; i < 3; i++) {
                    document.getElementById(a[i]).style.backgroundColor = 'cornsilk';
                }
            }
        }
    }
}