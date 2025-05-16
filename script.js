
const vnsPresaleAddress = "0x1d696372c231160765ea55294B545451560451b0";
const vnsTokenAddress = "0xD56b19A7A083E64b3f2E41cDD09BaDF2D168D101";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const sellerWallet = "0xab75520a1C19483cbA1Fbd2c74366164aaA3FD41";

const vnsDecimals = 8;
const usdtDecimals = 18;

const vnsPresaleABI = [ // Only required functions from ABI
    { "inputs": [], "name": "pricePerVNS", "outputs": [{"internalType": "uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    { "inputs": [{"internalType":"uint256","name":"vnsAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
    { "inputs": [], "name": "vnsToken", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}
];

const erc20ABI = [
    { "constant": true, "inputs": [{"name":"owner","type":"address"}], "name":"balanceOf", "outputs": [{"name":"","type":"uint256"}], "type":"function" },
    { "constant": true, "inputs": [{"name":"owner","type":"address"},{"name":"spender","type":"address"}], "name":"allowance", "outputs": [{"name":"","type":"uint256"}], "type":"function" },
    { "constant": false, "inputs": [{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}], "name":"approve", "outputs": [{"name":"","type":"bool"}], "type":"function" }
];

let web3, account;

document.getElementById("connectWallet").onclick = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById("walletAddress").innerText = "Wallet: " + account;
        loadBalances();
    } else {
        alert("Install MetaMask or Web3 wallet!");
    }
};

async function loadBalances() {
    const usdt = new web3.eth.Contract(erc20ABI, usdtTokenAddress);
    const vns = new web3.eth.Contract(erc20ABI, vnsTokenAddress);
    const usdtBal = await usdt.methods.balanceOf(account).call();
    const vnsBal = await vns.methods.balanceOf(sellerWallet).call();
    document.getElementById("usdtBalance").innerText = (usdtBal / 10 ** usdtDecimals).toFixed(2);
    document.getElementById("sellerBalance").innerText = (vnsBal / 10 ** vnsDecimals).toFixed(2);
}

document.getElementById("approveBtn").onclick = async () => {
    const vnsAmount = parseFloat(document.getElementById("vnsAmount").value);
    const presale = new web3.eth.Contract(vnsPresaleABI, vnsPresaleAddress);
    const usdt = new web3.eth.Contract(erc20ABI, usdtTokenAddress);
    const price = await presale.methods.pricePerVNS().call();
    const usdtAmount = (vnsAmount * price) / (10 ** vnsDecimals);
    const usdtAmountWei = web3.utils.toBN(usdtAmount.toString());
    await usdt.methods.approve(vnsPresaleAddress, usdtAmountWei).send({ from: account });
    document.getElementById("status").innerText = "USDT Approved!";
};

document.getElementById("buyBtn").onclick = async () => {
    const vnsAmount = parseFloat(document.getElementById("vnsAmount").value);
    const vnsAmountUnits = web3.utils.toBN((vnsAmount * 10 ** vnsDecimals).toString());
    const presale = new web3.eth.Contract(vnsPresaleABI, vnsPresaleAddress);
    await presale.methods.buyTokens(vnsAmountUnits).send({ from: account });
    document.getElementById("status").innerText = "✅ VNS Purchase Successful!";
    loadBalances();
};

function copyVNSAddress() {
    const text = "0xYourVNSTokenAddress";
    navigator.clipboard.writeText(text);
    alert("VNS Contract Address Copied!");
}
