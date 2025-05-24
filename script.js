const contractABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_usdtReceiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"required","type":"uint256"}],"name":"BuyerAllowanceLow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMinBuy","type":"uint256"}],"name":"MinBuyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"ReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"required","type":"uint256"}],"name":"SellerAllowanceLow","type":"event"},{"anonymous":false,"inputs":[],"name":"SwapPaused","type":"event"},{"anonymous":false,"inputs":[],"name":"SwapResumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmountNormalized","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vnstAmountNormalized","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rateUsed","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"getBuyerAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"usdtRequiredNormalized","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSellerAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"isApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSellerApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resumeSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMinBuy","type":"uint256"}],"name":"updateMinBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"updateReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const vnstABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LargeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"activity","type":"string"}],"name":"SuspiciousActivity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"attacker","type":"address"},{"indexed":false,"internalType":"string","name":"method","type":"string"}],"name":"UnauthorizedAccessAttempt","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const contractAddress = "0xc5eB6A6c225D82B889952fE17fCbed60DA2e7A0E";
const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const vnstAddress = "0xC8De4964F09459c24F79F31EC804CC8B8f63F1Bf";

// Global variables
let web3;
let contract;
let accounts = [];
let chainId;
let vnstDecimals = 18;
let usdtDecimals = 18;

// Initialize the DApp
async function initDApp() {
    web3 = getWeb3();
    if (!web3) {
        showStatusMessage("Please install MetaMask or Trust Wallet", "error");
        return;
    }

    try {
        // Request account access
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        chainId = await web3.eth.getChainId();
        
        // Set contract explorer link
        document.getElementById('contractLink').href = getExplorerLink(chainId);
        
        // Check and switch to BSC network
        const requiredChainId = 56; // or 97 for testnet
        if (chainId != requiredChainId) {
            await switchNetwork(requiredChainId);
            return;
        }
        
        // Initialize contracts
        contract = new web3.eth.Contract(contractABI, contractAddress);
        const vnstContract = new web3.eth.Contract(vnstABI, vnstAddress);
        
        // Get token decimals
        try {
            vnstDecimals = await vnstContract.methods.decimals().call();
            const usdtContract = new web3.eth.Contract(usdtABI, usdtAddress);
            usdtDecimals = await usdtContract.methods.decimals().call();
        } catch (e) {
            console.log("Using default decimals (18)");
        }
        
        // Update UI
        await updateUI();
        
        // Set up event listeners
        setupEventListeners();
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            updateUI();
        });
        
        // Listen for chain changes
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
        
    } catch (error) {
        console.error("Error initializing DApp:", error);
        showStatusMessage("Error connecting to wallet: " + error.message, "error");
    }
}

// Helper functions
function getWeb3() {
    if (window.ethereum) {
        return new Web3(window.ethereum);
    } else if (window.web3) {
        return new Web3(window.web3.currentProvider);
    } else if (window.BinanceChain) {
        return new Web3(window.BinanceChain);
    }
    return null;
}

async function switchNetwork(requiredChainId) {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${requiredChainId.toString(16)}` }],
        });
        window.location.reload();
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: `0x${requiredChainId.toString(16)}`,
                        chainName: 'Binance Smart Chain',
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'bnb',
                            decimals: 18
                        },
                        rpcUrls: ['https://bsc-dataseed.binance.org/'],
                        blockExplorerUrls: ['https://bscscan.com/']
                    }],
                });
                window.location.reload();
            } catch (addError) {
                showStatusMessage("Error adding BSC network: " + addError.message, "error");
            }
        } else {
            showStatusMessage("Error switching network: " + switchError.message, "error");
        }
    }
}

function getExplorerLink(chainId) {
    const baseUrl = chainId === 56 ? 'https://bscscan.com' : 'https://testnet.bscscan.com';
    return `${baseUrl}/address/${contractAddress}`;
}

function formatTokenAmount(amount, decimals = 18) {
    return amount / Math.pow(10, decimals);
}

function parseTokenAmount(amount, decimals = 18) {
    return Math.round(amount * Math.pow(10, decimals));
}

function showStatusMessage(message, type) {
    const statusElement = document.getElementById('statusMessage');
    statusElement.textContent = message;
    statusElement.className = `status-message ${type}`;
    statusElement.style.display = 'block';
    
    setTimeout(() => {
        statusElement.style.display = 'none';
    }, 5000);
}

function showLoading(show) {
    document.getElementById('loadingSpinner').style.display = show ? 'flex' : 'none';
}

// Update UI with wallet and contract info
async function updateUI() {
    if (accounts.length) {
        // Display wallet address
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        document.getElementById('walletAddress').textContent = shortAddress;
        
        // Display network name
        document.getElementById('networkName').textContent = getNetworkName(chainId);
        
        try {
            // Load contract data
            const vnstPrice = await contract.methods.vnstPrice().call();
            document.getElementById('vnstPrice').textContent = formatTokenAmount(vnstPrice, 18);
            
            const totalPurchased = await contract.methods.totalPurchased(accounts[0]).call();
            document.getElementById('totalPurchased').textContent = formatTokenAmount(totalPurchased, vnstDecimals);
            
            // Get seller VNST balance
            const vnstContract = new web3.eth.Contract(vnstABI, vnstAddress);
            const sellerWallet = await contract.methods.sellerWallet().call();
            const sellerBalance = await vnstContract.methods.balanceOf(sellerWallet).call();
            document.getElementById('sellerVnstBalance').textContent = formatTokenAmount(sellerBalance, vnstDecimals);
            
            // Check approvals
            await checkApprovals();
            
        } catch (error) {
            console.error("Error loading contract data:", error);
        }
    } else {
        document.getElementById('walletAddress').textContent = "Not connected";
    }
}

// Check USDT and seller approvals
async function checkApprovals() {
    if (!accounts.length) return;
    
    try {
        // Check USDT approval
        const isApproved = await contract.methods.isApproved(accounts[0]).call();
        const usdtApprovedElement = document.getElementById('usdtApprovedStatus');
        usdtApprovedElement.textContent = isApproved ? "Yes" : "No";
        usdtApprovedElement.style.color = isApproved ? "var(--success)" : "var(--error)";
        
        // Check seller approval
        const isSellerApproved = await contract.methods.isSellerApproved().call();
        const sellerApprovedElement = document.getElementById('sellerApprovedStatus');
        sellerApprovedElement.textContent = isSellerApproved ? "Yes" : "No";
        sellerApprovedElement.style.color = isSellerApproved ? "var(--success)" : "var(--error)";
        
    } catch (error) {
        console.error("Error checking approvals:", error);
    }
}

// Check USDT balance
async function checkUsdtBalance(requiredAmount) {
    try {
        const usdtContract = new web3.eth.Contract(usdtABI, usdtAddress);
        const balance = await usdtContract.methods.balanceOf(accounts[0]).call();
        
        if (balance < requiredAmount) {
            const missingAmount = formatTokenAmount(requiredAmount - balance, usdtDecimals);
            showStatusMessage(`Insufficient USDT balance. You need ${missingAmount} more USDT`, "error");
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error checking USDT balance:", error);
        return false;
    }
}

// Set up event listeners
function setupEventListeners() {
    // Connect Wallet Button
    document.getElementById('connectWalletBtn').addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await updateUI();
                showStatusMessage("Wallet connected successfully", "success");
            } catch (error) {
                console.error("Error connecting wallet:", error);
                showStatusMessage("Error connecting wallet: " + error.message, "error");
            }
        } else {
            showStatusMessage("Please install MetaMask or a Web3 compatible browser", "error");
        }
    });

    // Paste VNST Token Address Button
    document.getElementById('pasteVnstBtn').addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            document.getElementById('vnstAmount').value = text;
            showStatusMessage("Pasted from clipboard", "success");
        } catch (error) {
            console.error("Failed to read clipboard:", error);
            showStatusMessage("Failed to paste from clipboard", "error");
        }
    });

    // Check Quote Button
    document.getElementById('checkQuoteBtn').addEventListener('click', async () => {
        if (!accounts.length) {
            showStatusMessage("Please connect your wallet first", "error");
            return;
        }
        
        const vnstAmount = document.getElementById('vnstAmount').value;
        
        if (!vnstAmount || isNaN(vnstAmount)) {
            showStatusMessage("Please enter a valid VNST amount", "error");
            return;
        }
        
        try {
            const minBuy = await contract.methods.minBuy().call();
            const minBuyFormatted = formatTokenAmount(minBuy, vnstDecimals);
            
            if (Number(vnstAmount) < minBuyFormatted) {
                showStatusMessage(`Amount below minimum buy limit (${minBuyFormatted} VNST)`, "error");
                return;
            }
            
            const usdtRequired = await contract.methods.getQuote(parseTokenAmount(vnstAmount, vnstDecimals)).call();
            document.getElementById('usdtRequired').textContent = formatTokenAmount(usdtRequired, usdtDecimals);
            
            // Check approvals and balance
            await checkApprovals();
            await checkUsdtBalance(usdtRequired);
            
        } catch (error) {
            console.error("Error getting quote:", error);
            showStatusMessage("Error getting quote: " + error.message, "error");
        }
    });

    // Approve USDT Button
    document.getElementById('approveUsdtBtn').addEventListener('click', async () => {
        if (!accounts.length) {
            showStatusMessage("Please connect your wallet first", "error");
            return;
        }
        
        const vnstAmount = document.getElementById('vnstAmount').value;
        
        if (!vnstAmount || isNaN(vnstAmount)) {
            showStatusMessage("Please enter a valid VNST amount first", "error");
            return;
        }
        
        try {
            showLoading(true);
            const usdtRequired = await contract.methods.getQuote(parseTokenAmount(vnstAmount, vnstDecimals)).call();
            const usdtContract = new web3.eth.Contract(usdtABI, usdtAddress);
            
            showStatusMessage("Approving USDT...", "success");
            
            await usdtContract.methods.approve(contractAddress, usdtRequired).send({ from: accounts[0] });
            
            showStatusMessage("USDT approved successfully!", "success");
            await checkApprovals();
            
        } catch (error) {
            console.error("Error approving USDT:", error);
            showStatusMessage("Error approving USDT: " + error.message, "error");
        } finally {
            showLoading(false);
        }
    });

    // Buy VNST Button
    document.getElementById('buyVnstBtn').addEventListener('click', async () => {
        if (!accounts.length) {
            showStatusMessage("Please connect your wallet first", "error");
            return;
        }
        
        const vnstAmount = document.getElementById('vnstAmount').value;
        
        if (!vnstAmount || isNaN(vnstAmount)) {
            showStatusMessage("Please enter a valid VNST amount", "error");
            return;
        }
        
        try {
            showLoading(true);
            const minBuy = await contract.methods.minBuy().call();
            const minBuyFormatted = formatTokenAmount(minBuy, vnstDecimals);
            
            if (Number(vnstAmount) < minBuyFormatted) {
                showStatusMessage(`Amount below minimum buy limit (${minBuyFormatted} VNST)`, "error");
                return;
            }
            
            const vnstAmountWei = parseTokenAmount(vnstAmount, vnstDecimals);
            const usdtRequired = await contract.methods.getQuote(vnstAmountWei).call();
            
            // Check approvals
            const isApproved = await contract.methods.isApproved(accounts[0]).call();
            if (!isApproved) {
                showStatusMessage("Please approve USDT first", "error");
                return;
            }
            
            const isSellerApproved = await contract.methods.isSellerApproved().call();
            if (!isSellerApproved) {
                showStatusMessage("Seller has not approved VNST to contract", "error");
                return;
            }
            
            // Check balance
            const hasEnoughBalance = await checkUsdtBalance(usdtRequired);
            if (!hasEnoughBalance) return;
            
            showStatusMessage("Processing VNST purchase...", "success");
            
            await contract.methods.buyVNST(vnstAmountWei)
                .send({ from: accounts[0] })
                .on('transactionHash', (hash) => {
                    showStatusMessage(`Transaction sent: ${hash}`, "success");
                })
                .on('receipt', (receipt) => {
                    showStatusMessage("VNST purchased successfully!", "success");
                })
                .on('error', (error) => {
                    showStatusMessage("Transaction failed: " + error.message, "error");
                });
            
            // Update UI
            await updateUI();
            
        } catch (error) {
            console.error("Error buying VNST:", error);
            showStatusMessage("Error buying VNST: " + error.message, "error");
        } finally {
            showLoading(false);
        }
    });

    // Auto-check quote when VNST amount changes
    document.getElementById('vnstAmount').addEventListener('input', debounce(async () => {
        const vnstAmount = document.getElementById('vnstAmount').value;
        if (vnstAmount && !isNaN(vnstAmount)) {
            try {
                const usdtRequired = await contract.methods.getQuote(parseTokenAmount(vnstAmount, vnstDecimals)).call();
                document.getElementById('usdtRequired').textContent = formatTokenAmount(usdtRequired, usdtDecimals);
                await checkApprovals();
            } catch (error) {
                console.error("Error updating quote:", error);
            }
        }
    }, 500));
}

// Helper function to debounce input events
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Get network name from chain ID
function getNetworkName(chainId) {
    switch (chainId.toString()) {
        case "1": return "Ethereum Mainnet";
        case "56": return "Binance Smart Chain";
        case "97": return "BSC Testnet";
        case "137": return "Polygon Mainnet";
        case "80001": return "Mumbai Testnet";
        default: return `Chain ID: ${chainId}`;
    }
}

// Initialize when page loads
window.addEventListener('load', initDApp);
