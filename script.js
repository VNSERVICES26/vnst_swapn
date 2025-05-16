
const vnsTokenAddress = "0xD56b19A7A083E64b3f2E41cDD09BaDF2D168D101";
const usdtTokenAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const presaleContractAddress = "0x1d696372c231160765ea55294B545451560451b0";
const sellerWallet = "0xab75520a1C19483cbA1Fbd2c74366164aaA3FD41";

let account;

// Connect wallet
async function connectWallet() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        document.getElementById("walletAddress").innerText = account;
        loadBalances();
    } else {
        alert("Please install MetaMask!");
    }
}

// Load USDT & VNS balances
async function loadBalances() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const usdt = new ethers.Contract(usdtTokenAddress, [
        "function balanceOf(address) view returns (uint256)"
    ], provider);
    const vns = new ethers.Contract(vnsTokenAddress, [
        "function balanceOf(address) view returns (uint256)"
    ], provider);

    const usdtBalance = await usdt.balanceOf(account);
    const sellerBalance = await vns.balanceOf(sellerWallet);

    document.getElementById("usdtBalance").innerText = (Number(usdtBalance) / 1e18).toFixed(2) + " USDT";
    document.getElementById("sellerBalance").innerText = (Number(sellerBalance) / 1e8).toFixed(2) + " VNS";
}

// Approve USDT
async function approveUSDT() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const usdt = new ethers.Contract(usdtTokenAddress, [
        "function approve(address spender, uint256 amount) public returns (bool)"
    ], signer);

    const amount = BigInt(1_000_000_000_000_000_000_000); // approve large amount
    const tx = await usdt.approve(presaleContractAddress, amount);
    await tx.wait();
    alert("USDT Approved!");
}

// Buy VNS
async function buyVNS() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(presaleContractAddress, [
        "function buyTokens(uint256 vnsAmount) public",
        "function pricePerVNS() public view returns (uint256)"
    ], signer);

    const vnsInput = document.getElementById("vnsInput").value;
    const vnsAmount = BigInt(Math.floor(parseFloat(vnsInput) * 1e8)); // VNS has 8 decimals

    if (vnsAmount <= 0n) {
        alert("Enter a valid VNS amount");
        return;
    }

    const tx = await contract.buyTokens(vnsAmount);
    await tx.wait();
    alert("VNS Purchased!");
}

// Copy token address
function copyAddress() {
    navigator.clipboard.writeText(vnsTokenAddress);
    alert("Token address copied!");
}
