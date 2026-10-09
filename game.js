let ironOre = 0;
let ironPlate = 0;
let electricity = 100;

// 每秒自动增加铁矿石（假装有采矿机）
setInterval(() => {
    ironOre += 1;
    updateUI();
}, 1000);

function updateUI() {
    document.getElementById('resources').innerText = 
        `铁矿石：${ironOre} | 铁板：${ironPlate} | 电力：${electricity}`;
}

// 点击按钮建造熔炉
document.getElementById('buildFurnaceBtn').addEventListener('click', () => {
    if (ironOre >= 10) {
        ironOre -= 10;
        alert("熔炉建造成功！开始冶炼铁板。");
        // 以后在这里加入熔炉的生产逻辑
    } else {
        alert("铁矿石不足！");
    }
    updateUI();
});