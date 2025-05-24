// Contract ABIs - Replace with your actual ABIs
const contractABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_usdtReceiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"required","type":"uint256"}],"name":"BuyerAllowanceLow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMinBuy","type":"uint256"}],"name":"MinBuyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"ReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"required","type":"uint256"}],"name":"SellerAllowanceLow","type":"event"},{"anonymous":false,"inputs":[],"name":"SwapPaused","type":"event"},{"anonymous":false,"inputs":[],"name":"SwapResumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmountNormalized","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vnstAmountNormalized","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rateUsed","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"getBuyerAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"usdtRequiredNormalized","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSellerAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"isApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSellerApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resumeSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMinBuy","type":"uint256"}],"name":"updateMinBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"updateReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const usdtABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const vnstABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LargeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"string","name":"activity","type":"string"}],"name":"SuspiciousActivity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"attacker","type":"address"},{"indexed":false,"internalType":"string","name":"method","type":"string"}],"name":"UnauthorizedAccessAttempt","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

// Network configurations
const networks = {
    56: { // BSC Mainnet
        name: "BSC Mainnet",
        contractAddress: "0x...", // Your mainnet contract address
        usdtAddress: "0x55d398326f99059fF775485246999027B3197955", // USDT on BSC
        vnstAddress: "0x...", // Your mainnet VNST address
        explorer: "https://bscscan.com"
    },
    97: { // BSC Testnet
        name: "BSC Testnet",
        contractAddress: "0xc5eB6A6c225D82B889952fE17fCbed60DA2e7A0E",
        usdtAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
        vnstAddress: "0xC8De4964F09459c24F79F31EC804CC8B8f63F1Bf",
        explorer: "https://testnet.bscscan.com"
    }
};

// Global variables
let web3;
let contract;
let accounts = [];
let currentNetwork;
let vnstDecimals = 18;
let usdtDecimals = 18;
let gateQuotas = {
    totalQuota: 0,
    remainingQuota: 0,
    individualQuota: 0,
    purchasedAmount: 0
};

// Initialize the DApp
async function initDApp() {
    try {
        // Check if Web3 is available
        if (!window.ethereum) {
            showStatusMessage("Please install a Web3 wallet like MetaMask, Trust Wallet, or Binance Wallet", "error");
            const connectBtn = document.getElementById('connectWallet');
            if (connectBtn) connectBtn.style.display = 'block';
            return;
        }
        
        web3 = new Web3(window.ethereum);
        
        // Request account access
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            showStatusMessage("User denied account access", "warning");
            return;
        }
        
        // Get current chain ID
        const chainId = await web3.eth.getChainId();
        currentNetwork = networks[chainId];
        
        // Check if we're on supported network
        if (!currentNetwork) {
            showStatusMessage(`Unsupported network. Please switch to BSC Mainnet (56) or Testnet (97)`, "error");
            const networkSwitch = document.getElementById('networkSwitch');
            if (networkSwitch) networkSwitch.style.display = 'block';
            return;
        }
        
        // Set contract explorer link
        const contractLink = document.getElementById('contractLink');
        if (contractLink) {
            contractLink.href = `${currentNetwork.explorer}/address/${currentNetwork.contractAddress}`;
        }
        
        // Initialize contracts
        contract = new web3.eth.Contract(contractABI, currentNetwork.contractAddress);
        
        // Get token decimals with fallback
        try {
            const vnstContract = new web3.eth.Contract(vnstABI, currentNetwork.vnstAddress);
            vnstDecimals = await vnstContract.methods.decimals().call() || 18;
            
            const usdtContract = new web3.eth.Contract(usdtABI, currentNetwork.usdtAddress);
            usdtDecimals = await usdtContract.methods.decimals().call() || 18;
        } catch (e) {
            console.log("Using default decimals (18)");
            vnstDecimals = 18;
            usdtDecimals = 18;
        }
        
        // Update UI and load gate quotas
        await updateUI();
        await loadGateQuotas();
        
        // Set up event listeners
        setupEventListeners();
        
        // Listen for account and network changes using EIP-1193 standard
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
            window.ethereum.on('disconnect', handleDisconnect);
        }
        
    } catch (error) {
        console.error("Error initializing DApp:", error);
        showStatusMessage("Error connecting to wallet: " + (error.message || error), "error");
    }
}

// Load gate quotas from contract
async function loadGateQuotas() {
    if (!contract || !accounts.length) return;
    
    try {
        showLoading(true);
        
        // Check if the contract has the getGateQuotas method
        if (!contract.methods.getGateQuotas) {
            console.warn("getGateQuotas method not found in contract");
            return;
        }
        
        // Get all gate quotas from contract
        const quotas = await contract.methods.getGateQuotas().call();
        
        // Process quotas data
        gateQuotas = {
            totalQuota: quotas[0] || 0,
            remainingQuota: quotas[1] || 0,
            individualQuota: quotas[2] || 0,
            purchasedAmount: quotas[3] || 0
        };
        
        // Update UI
        updateGateQuotasUI();
        
    } catch (error) {
        console.error("Error loading gate quotas:", error);
        showStatusMessage("Error loading gate quotas. Check contract method exists.", "error");
    } finally {
        showLoading(false);
    }
}

// Alternative method to load quotas if getGateQuotas doesn't exist
async function loadQuotasAlternative() {
    try {
        showLoading(true);
        
        // Load individual quota methods if getGateQuotas is not available
        gateQuotas = {
            totalQuota: await contract.methods.totalQuota().call() || 0,
            remainingQuota: await contract.methods.remainingQuota().call() || 0,
            individualQuota: await contract.methods.individualQuota().call() || 0,
            purchasedAmount: await contract.methods.purchasedAmount(accounts[0]).call() || 0
        };
        
        updateGateQuotasUI();
        
    } catch (error) {
        console.error("Error loading quotas (alternative method):", error);
        showStatusMessage("Error loading quota information", "error");
    } finally {
        showLoading(false);
    }
}

// Update gate quotas in UI
function updateGateQuotasUI() {
    const totalQuotaEl = document.getElementById('totalQuota');
    const remainingQuotaEl = document.getElementById('remainingQuota');
    const individualQuotaEl = document.getElementById('individualQuota');
    const purchasedAmountEl = document.getElementById('purchasedAmount');
    
    if (totalQuotaEl) {
        totalQuotaEl.textContent = formatTokenAmount(gateQuotas.totalQuota, vnstDecimals);
    }
    if (remainingQuotaEl) {
        remainingQuotaEl.textContent = formatTokenAmount(gateQuotas.remainingQuota, vnstDecimals);
    }
    if (individualQuotaEl) {
        individualQuotaEl.textContent = formatTokenAmount(gateQuotas.individualQuota, vnstDecimals);
    }
    if (purchasedAmountEl) {
        purchasedAmountEl.textContent = formatTokenAmount(gateQuotas.purchasedAmount, vnstDecimals);
    }
}

// Event handlers
function handleAccountsChanged(newAccounts) {
    accounts = newAccounts;
    if (newAccounts.length === 0) {
        showStatusMessage("Wallet disconnected", "warning");
    } else {
        showStatusMessage("Account changed", "info");
    }
    updateUI();
    loadGateQuotas().catch(() => loadQuotasAlternative());
}

function handleChainChanged(newChainIdHex) {
    // Convert hex to decimal
    const newChainId = parseInt(newChainIdHex, 16);
    showStatusMessage("Network changed. Reloading...", "info");
    setTimeout(() => window.location.reload(), 1000);
}

function handleDisconnect(error) {
    console.log("Wallet disconnected:", error);
    showStatusMessage("Wallet disconnected", "warning");
    accounts = [];
    updateUI();
}

// Helper functions
function getNetworkName(chainId) {
    return networks[chainId]?.name || `Unknown Network (${chainId})`;
}

async function switchNetwork(chainId) {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
            try {
                const networkConfig = chainId === 56 ? {
                    chainId: '0x38',
                    chainName: 'Binance Smart Chain Mainnet',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com']
                } : {
                    chainId: '0x61',
                    chainName: 'Binance Smart Chain Testnet',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                    blockExplorerUrls: ['https://testnet.bscscan.com']
                };
                
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [networkConfig],
                });
            } catch (addError) {
                showStatusMessage("Error adding network: " + (addError.message || addError), "error");
            }
        } else {
            showStatusMessage("Error switching network: " + (switchError.message || switchError), "error");
        }
    }
}

function formatTokenAmount(amount, decimals = 18) {
    const amountNumber = typeof amount === 'string' ? parseFloat(amount) : Number(amount);
    const formatted = (amountNumber / Math.pow(10, decimals)).toFixed(6);
    return formatted.replace(/\.?0+$/, '');
}

function parseTokenAmount(amount, decimals = 18) {
    return BigInt(Math.round(amount * Math.pow(10, decimals)));
}

function showStatusMessage(message, type) {
    const statusElement = document.getElementById('statusMessage');
    if (statusElement) {
        statusElement.textContent = message;
        statusElement.className = `status-message ${type}`;
        statusElement.style.display = 'block';
        
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 5000);
    }
}

function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = show ? 'flex' : 'none';
    }
}

// Update UI with wallet and contract info
async function updateUI() {
    const walletAddressEl = document.getElementById('walletAddress');
    const networkNameEl = document.getElementById('networkName');
    const vnstPriceEl = document.getElementById('vnstPrice');
    const totalPurchasedEl = document.getElementById('totalPurchased');
    const sellerVnstBalanceEl = document.getElementById('sellerVnstBalance');
    
    if (accounts.length) {
        // Display wallet address
        if (walletAddressEl) {
            const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
            walletAddressEl.textContent = shortAddress;
        }
        
        // Display network name
        if (networkNameEl) {
            networkNameEl.textContent = currentNetwork.name;
        }
        
        try {
            // Load contract data with proper error handling
            if (vnstPriceEl) {
                const vnstPrice = await contract.methods.vnstPrice().call();
                vnstPriceEl.textContent = formatTokenAmount(vnstPrice, 18);
            }
            
            if (totalPurchasedEl) {
                const totalPurchased = await contract.methods.totalPurchased(accounts[0]).call();
                totalPurchasedEl.textContent = formatTokenAmount(totalPurchased, vnstDecimals);
            }
            
            // Get seller VNST balance
            if (sellerVnstBalanceEl) {
                const vnstContract = new web3.eth.Contract(vnstABI, currentNetwork.vnstAddress);
                const sellerWallet = await contract.methods.sellerWallet().call();
                const sellerBalance = await vnstContract.methods.balanceOf(sellerWallet).call()
                    .catch(() => "0"); // Fallback if error
                sellerVnstBalanceEl.textContent = formatTokenAmount(sellerBalance, vnstDecimals);
            }
            
            // Check approvals
            await checkApprovals();
            
        } catch (error) {
            console.error("Error loading contract data:", error);
            showStatusMessage("Error loading contract data. Try refreshing the page.", "error");
        }
    } else {
        if (walletAddressEl) walletAddressEl.textContent = "Not connected";
        const usdtApprovedStatus = document.getElementById('usdtApprovedStatus');
        const sellerApprovedStatus = document.getElementById('sellerApprovedStatus');
        if (usdtApprovedStatus) usdtApprovedStatus.textContent = "No";
        if (sellerApprovedStatus) sellerApprovedStatus.textContent = "No";
    }
}

// Check token approvals
async function checkApprovals() {
    if (!accounts.length) return;
    
    try {
        const usdtContract = new web3.eth.Contract(usdtABI, currentNetwork.usdtAddress);
        const usdtApprovedStatus = document.getElementById('usdtApprovedStatus');
        const sellerApprovedStatus = document.getElementById('sellerApprovedStatus');
        
        // Check USDT allowance for the contract
        if (usdtApprovedStatus) {
            const usdtAllowance = await usdtContract.methods.allowance(accounts[0], currentNetwork.contractAddress).call();
            usdtApprovedStatus.textContent = usdtAllowance > 0 ? "Yes" : "No";
        }
        
        // Check VNST allowance for the contract (if needed)
        if (sellerApprovedStatus) {
            const vnstContract = new web3.eth.Contract(vnstABI, currentNetwork.vnstAddress);
            const vnstAllowance = await vnstContract.methods.allowance(accounts[0], currentNetwork.contractAddress).call()
                .catch(() => "0"); // Fallback if error
            sellerApprovedStatus.textContent = vnstAllowance > 0 ? "Yes" : "No";
        }
            
    } catch (error) {
        console.error("Error checking approvals:", error);
        showStatusMessage("Error checking token approvals", "error");
    }
}

// Approve tokens
async function approveTokens(tokenType) {
    if (!accounts.length) {
        showStatusMessage("Please connect your wallet first", "error");
        return;
    }
    
    showLoading(true);
    try {
        let tokenContract, spender, amount;
        
        if (tokenType === 'usdt') {
            tokenContract = new web3.eth.Contract(usdtABI, currentNetwork.usdtAddress);
            spender = currentNetwork.contractAddress;
            // Approve maximum amount (2^256 - 1)
            amount = '0x' + 'f'.repeat(64);
        } else if (tokenType === 'vnst') {
            tokenContract = new web3.eth.Contract(vnstABI, currentNetwork.vnstAddress);
            spender = currentNetwork.contractAddress;
            // Approve maximum amount (2^256 - 1)
            amount = '0x' + 'f'.repeat(64);
        }
        
        const tx = await tokenContract.methods.approve(spender, amount)
            .send({ from: accounts[0] });
            
        showStatusMessage(`Approval successful! Tx hash: ${tx.transactionHash}`, "success");
        await checkApprovals();
        
    } catch (error) {
        console.error(`Error approving ${tokenType}:`, error);
        showStatusMessage(`Error approving tokens: ${error.message || error}`, "error");
    } finally {
        showLoading(false);
    }
}

// Purchase VNST tokens
async function purchaseVNST(usdtAmount) {
    if (!accounts.length) {
        showStatusMessage("Please connect your wallet first", "error");
        return;
    }
    
    if (usdtAmount <= 0) {
        showStatusMessage("Please enter a valid USDT amount", "error");
        return;
    }
    
    showLoading(true);
    try {
        const usdtValue = parseTokenAmount(usdtAmount, usdtDecimals);
        
        const tx = await contract.methods.buyVNST(usdtValue.toString())
            .send({ from: accounts[0] });
            
        showStatusMessage(`Purchase successful! Tx hash: ${tx.transactionHash}`, "success");
        await updateUI();
        await loadGateQuotas().catch(() => loadQuotasAlternative()); // Refresh quotas after purchase
        
    } catch (error) {
        console.error("Error purchasing VNST:", error);
        showStatusMessage(`Error purchasing VNST: ${error.message || error}`, "error");
    } finally {
        showLoading(false);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Connect wallet button
    const connectWalletBtn = document.getElementById('connectWallet');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', async () => {
            try {
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await updateUI();
                await loadGateQuotas().catch(() => loadQuotasAlternative());
            } catch (error) {
                showStatusMessage("Error connecting wallet: " + error.message, "error");
            }
        });
    }
    
    // Network switch buttons
    const switchToMainnetBtn = document.getElementById('switchToMainnet');
    const switchToTestnetBtn = document.getElementById('switchToTestnet');
    
    if (switchToMainnetBtn) {
        switchToMainnetBtn.addEventListener('click', () => switchNetwork(56));
    }
    if (switchToTestnetBtn) {
        switchToTestnetBtn.addEventListener('click', () => switchNetwork(97));
    }
    
    // Approve buttons
    const approveUSDTBtn = document.getElementById('approveUSDT');
    const approveSellerBtn = document.getElementById('approveSeller');
    
    if (approveUSDTBtn) {
        approveUSDTBtn.addEventListener('click', () => approveTokens('usdt'));
    }
    if (approveSellerBtn) {
        approveSellerBtn.addEventListener('click', () => approveTokens('vnst'));
    }
    
    // Purchase form
    const purchaseForm = document.getElementById('purchaseForm');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const usdtAmountInput = document.getElementById('usdtAmount');
            if (usdtAmountInput) {
                const usdtAmount = parseFloat(usdtAmountInput.value);
                if (isNaN(usdtAmount) || usdtAmount <= 0) {
                    showStatusMessage("Please enter a valid USDT amount", "error");
                    return;
                }
                await purchaseVNST(usdtAmount);
            }
        });
    }
    
    // Gate quotas refresh button
    const refreshQuotasBtn = document.getElementById('refreshQuotas');
    if (refreshQuotasBtn) {
        refreshQuotasBtn.addEventListener('click', async () => {
            await loadGateQuotas().catch(() => loadQuotasAlternative());
            showStatusMessage("Gate quotas refreshed", "success");
        });
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', initDApp);
