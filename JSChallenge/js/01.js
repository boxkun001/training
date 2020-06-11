var x = new Big(0);
let temp = '0';
let cal = '';
document.getElementById('wrapper').addEventListener('click', (e) => {
    // 選択した要素
    let selectedElement = e.target;

    // 子要素を選択したらその親要素を選択する
    if (e.target.tagName === 'SPAN') selectedElement = e.target.parentElement;


    if (selectedElement.classList.contains('number') && temp.replace('.', '').length < 20) {
        // 数字を選択した
        temp += selectedElement.firstChild.textContent;
        document.getElementById('value').textContent = Number(temp);
    }
    switch (selectedElement.id) {
        case 'prime':
            if (!String(temp).includes('.')) {
                temp += selectedElement.firstChild.textContent;
                document.getElementById('value').textContent = Number(temp);
            }
            break;
        case 'clear':
            //　クリアを選択した
            x = new Big(0);
            temp = '0';
            document.getElementById('value').textContent = 0;
            break;
        case 'division':
        case 'dimension':
        case 'plus':
        case 'minus':
            operation();
            cal = selectedElement.id;
            break;
        case 'equal':
            if (cal === '') return;
            operation();
            cal = '';
            document.getElementById('value').textContent = x;
            x = Big(0);
            break;
        default:
            break;
    }

});

function operation() {
    if (cal === '') x = Big(temp);
    else if (cal === 'division') x = x.div(Big(temp));
    else if (cal === 'dimension') x = x.times(Big(temp));
    else if (cal === 'plus') x = x.plus(Big(temp));
    else if (cal === 'minus') x = x.minus(Big(temp));
    temp = '0';
}